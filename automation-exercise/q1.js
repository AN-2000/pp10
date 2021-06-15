const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 100,
    defaultViewport: null,
    args: ["--start-maximized"],
  });
  const page = await browser.newPage();
  await page.goto("http://the-internet.herokuapp.com");
  await page.waitForSelector("ul");
  let link = await page.evaluate(function () {
    let li = document.querySelectorAll("li")[14];
    let anchorTag = li.querySelector("a");
    let link =
      "http://the-internet.herokuapp.com/" + anchorTag.getAttribute("href");
    return link;
  });

  await page.goto(link);
  //   await Promise.all([
  //     page.click("li [href='/entry_ad']"),
  //     page.waitForNavigation(),
  //   ]);
  await page.waitForSelector(".modal-footer>p", { visible: true });
  await page.click(".modal-footer>p");
})();
