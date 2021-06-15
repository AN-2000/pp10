const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 100,
    defaultViewport: null,
    args: ["--start-maximized"],
  });
  const page = await browser.newPage();
  await page.goto("https://www.saucedemo.com/");  //p1

  await page.waitForSelector("#user-name"); //p2
  await page.type("#user-name", "standard_user");  //p3

  await page.waitForSelector("#password");
  await page.type("#password", "secret_sauce");

  await Promise.all([page.click("#login-button"), page.waitForNavigation()]);

  let urls = await page.evaluate(function () {
    let allUrls = [];
    let allImgs = document.querySelectorAll("img.inventory_item_img");
    for (let i = 0; i < allImgs.length; i++) {
      allUrls.push(allImgs[i].src);
    }
    return allUrls;
  });

//promise based function => returns a promise
  function downloadImage(url) {
    return new Promise(function (resolve, reject) {
        //this promise uses a page.evaluate call to run a function in browser
      page
        .evaluate(function (url) {
            //we have passed a url of an image to this evaluate function
            //Now this evaluate create an anchor tag and sets its href to given url
          let anchor = document.createElement("a");
          anchor.href = url;
          //now we know if an anchor tag have a file attached with it through href and it has
          //a download attribute then instead of opening the file in browser it downloads the file
          anchor.download = "img.jpg";
          //when we are performing a click on this anchor tag we are able to download image
          anchor.click();
        }, url)
        //on promise of page.evaluate we have set up a then call
        .then(function () {
            //inside this then function we have resolved the promise returned by our downloadImage function
          resolve();
        });
    });
  }

  for (let i = 0; i < urls.length; i++) {
    await downloadImage(urls[i]);
  }

  //fetch all links
  //create a promise based function which downloads image of a single link
  //use that function in a loop (but remember to use await)
})();
