const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 100,
    defaultViewport: null,
    args: ["--start-maximized"],
  });
  const page = await browser.newPage();
  await page.goto("https://demo.applitools.com/");

  await page.waitForSelector("#username");
  await page.type("#username", "asdfg");

  await page.waitForSelector("#password");
  await page.type("#password", "asdfg");

  await Promise.all([page.click("#log-in"), page.waitForNavigation()]);

  await page.waitForSelector("table")

  let ans = await page.evaluate(function(){
      let allTrs = document.querySelectorAll("tbody tr")
      let allAmounts = []
      let allDescription = []
      for(let i = 0;i<allTrs.length;i++){
          let allTds = allTrs[i].querySelectorAll("td")
          allAmounts.push(allTds[allTds.length-1].innerText) 
          allDescription.push(allTds[2].innerText) 
      }

      for(let i = 0;i<allAmounts.length;i++){
          let a = allAmounts[i].split(" ")
          let b = a[1].split(",") // "1,250"
          a[1] = b.join("")
          allAmounts[i] = Number(a[0] + a[1])
      }
      let index = -1;
      let maxNegAmount = 0
      for(let i = 0;i<allAmounts.length;i++){
        if(allAmounts[i]<maxNegAmount){
            maxNegAmount = allAmounts[i]
            index = i;
        }
      }
      
      return "Max amount used is "+ (-1*maxNegAmount)+ " at " + allDescription[index];

  })

  console.log(ans);
})();
