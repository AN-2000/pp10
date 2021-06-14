const puppeteer = require("puppeteer");

(async function () {
  let totalVideos = 0;
  const browser = await puppeteer.launch({
    //headless makes the chromium browser visible
    headless: false,
    slowMo: 500,
    //These 2 help to open the browser in full screen
    defaultViewport: null,
    args: ["--start-maximized"],
  });
  const page = await browser.newPage();
  //Go to youtube playlist
  await page.goto(
    "https://www.youtube.com/playlist?list=PLMC9KNkIncKtPzgY-5rmhvj7fax8fdxoj"
  );
  await page.waitForSelector(".style-scope.yt-formatted-string");
  //evaluate function works in the browser 
  //the below function get the total number of videos in the playlist
  totalVideos = await page.evaluate(function () {
    let a = document.querySelectorAll(".style-scope.yt-formatted-string");
    let s = a[1].innerText;
    if (s.length > 3) {
      s = s.split(",").join("");
    }
    return Number(s);
  });

  //this evaluate call gets the duration of entire playlist in hours
  let ans = await page.evaluate(async function (tv) {
    //initially 100 videos are loaded and we select them all
    let a = document.querySelectorAll(
      "#text.style-scope.ytd-thumbnail-overlay-time-status-renderer"
    );

  //this function converts time stamp string from video card to seconds
    function hmsToSecondsOnly(str) {
      var p = str.split(':'),
          s = 0, m = 1;
  
      while (p.length > 0) {
          s += m * parseInt(p.pop(), 10);
          m *= 60;
      }
  
      return s;
  }


    // we are creating a promise such that it will resolve when all videos are loaded until then it will keep scrolling
    let p = new Promise(function (resolve, reject) {
      let interval = setInterval(function () {
        if (a.length != tv) {
          let videoCardContainer = document.querySelector("#contents");
          window.scrollTo(0, videoCardContainer.scrollHeight);
          a = document.querySelectorAll(
            "#text.style-scope.ytd-thumbnail-overlay-time-status-renderer"
          ); 
        } else {
          clearInterval(interval);
          resolve();
        }
      }, 500);
    });

    //waiting for promise to resolve so that we can asure the a will contain all videos
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
