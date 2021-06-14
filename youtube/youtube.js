const puppeteer = require("puppeteer");

(async function () {
  let totalVideos = 0;
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 500,
    defaultViewport: null,
    args: ["--start-maximized"],
  });
  const page = await browser.newPage();
  await page.goto(
    "https://www.youtube.com/playlist?list=PLMC9KNkIncKtPzgY-5rmhvj7fax8fdxoj"
  );
  await page.waitForSelector(".style-scope.yt-formatted-string");
  totalVideos = await page.evaluate(function () {
    let a = document.querySelectorAll(".style-scope.yt-formatted-string");
    let s = a[1].innerText;
    if (s.length > 3) {
      s = s.split(",").join("");
    }
    return Number(s);
  });

  let ans = await page.evaluate(async function (tv) {
    //initially 100 videos are loaded and we select them all
    let a = document.querySelectorAll(
      "#text.style-scope.ytd-thumbnail-overlay-time-status-renderer"
    );


    function hmsToSecondsOnly(str) {
      var p = str.split(':'),
          s = 0, m = 1;
  
      while (p.length > 0) {
          s += m * parseInt(p.pop(), 10);
          m *= 60;
      }
  
      return s;
  }


    //setInterval function

    let p = new Promise(function (resolve, reject) {
      let interval = setInterval(function () {
        //currently selected video hai unki length kya total video ke length ke barabar hogyi?
        if (a.length != tv) {
          //100!=200
          let videoCardContainer = document.querySelector("#contents");
          window.scrollTo(0, videoCardContainer.scrollHeight);
          a = document.querySelectorAll(
            "#text.style-scope.ytd-thumbnail-overlay-time-status-renderer"
          ); //200
        } else {
          clearInterval(interval);
          resolve();
        }
      }, 500);
    });

    await p;
    let allDuration = [];
    for (let i = 0; i < a.length; i++) {
      allDuration.push(hmsToSecondsOnly(a[i].innerText.trim()));
    }
    
    let totalDurationInSeconds = allDuration.reduce(function(a,b){return a+b})
    let totalDurationInHours = (totalDurationInSeconds/3600).toFixed(2)
    return totalDurationInHours;
  }, totalVideos);

  console.log(ans);
})();
