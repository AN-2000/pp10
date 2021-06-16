const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 100,
    defaultViewport: null,
    args: ["--start-maximized"],
  });
  const page = await browser.newPage();
  await page.goto("https://github.com/topics");

  let intermediateData = await page.evaluate(function () {
    let allTopics = document.querySelectorAll(
      ".f3.lh-condensed.text-center.Link--primary.mb-0.mt-1"
    ); //NODE LIST != array
    let topics = [];
    for (let i = 0; i < allTopics.length; i++) {
      topics[i] = allTopics[i].innerText.trim();
    }

    let allAnchors = document.querySelectorAll(
      ".no-underline.d-flex.flex-column.flex-justify-center"
    );

    let links = [];
    for (let i = 0; i < allAnchors.length; i++) {
      links.push("https://github.com" + allAnchors[i].getAttribute("href"));
    }

    return { links, topics };
  });

  let data = {"c++":[]};
  for (let i = 0; i < intermediateData.topics.length; i++) {
    data[intermediateData.topics[i]] = [];
  }

  function fetchDataFromTopicPage(topicPageUrl) {
    return new Promise(function (resolve, reject) {
      page.goto(topicPageUrl).then(function () {
        return page
          .evaluate(function () {
            let allH1Tags = document.querySelectorAll(
              ".f3.color-text-secondary.text-normal.lh-condensed"
            );
            let projectLinks = [];
            for (let i = 0; i < allH1Tags.length && i < 5; i++) {
              projectLinks.push(
                "https://github.com" +
                  allH1Tags[i].querySelectorAll("a")[1].getAttribute("href") +
                  "/issues"
              );
            }
            return projectLinks;
          })
          .then(function (projectLinks) {
            console.log(projectLinks);
            resolve(projectLinks);
          });
      });
    });
  }

  for(let i = 0;i<intermediateData.links.length;i++){

    intermediateData.topics[i]
    //ek single topic ke 5 project ke links mil chuke h 
      let arr = await fetchDataFromTopicPage(intermediateData.links[i]);
      //function joki project ke link se issue ka link nikale and usko given topic array me daldo in data object
  }
})();
