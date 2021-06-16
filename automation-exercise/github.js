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

  //this will containe 2 array => links(3 topic ke page ke link honge) and topics array(unke naam)
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

  //ek object banaya data naam ka and usme har topic ki ek key bnadi and use empty array se initialize krdia
  let data = { };
  for (let i = 0; i < intermediateData.topics.length; i++) {
    data[intermediateData.topics[i]] = [];
  }

  //ek promise based function banaya joki ek topic page ka url lega and hume ek promise dega ki resolve hone pr mai apko ek array dunga jo contain kregi jis topic ki link di thi wo topic ke 5 project ke issues page ki link
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
            resolve(projectLinks);
          });
      });
    });
  }

  //ek promise based function hai joki ek project ke issues page ki link lega and hume ek promise dega ki jis project ki link apne di h muje uska top issue ki link mai apko resolve hone pr dedunga
  function fetchIssueFromProject(projectUrl) {
    return new Promise(async function (resolve, reject) {

      await page.goto(projectUrl);

      let requiredLink = await page.evaluate(function () {
        let requireAnchor = document.querySelector(
          ".Link--primary.v-align-middle.no-underline.h4.js-navigation-open.markdown-title"
        );
        
        return "https://github.com" + requireAnchor.getAttribute("href");
      });

      

      resolve(requiredLink)
    });
  }


//   intermediateData = {
//       topics:["a","b","c"],
//       links:["l1","l2","l3"]
//   }

//   data = {
//       a:[links 5 project ke issues ki],
//       b:[],
//       c:[]
//   }

  //loop mara h topics ke link array pr is array me 3 topic ke page ki links hai 
  for (let i = 0; i < intermediateData.links.length; i++) {
    //ek ek krke ek link ko liya hai and use pass kra fetchDataFromTopicPage
    //is function ne muje ek array dedi jisne given topic page ke top 5 projects ke issues page ki link hai 
    let arr = await fetchDataFromTopicPage(intermediateData.links[i]);

    //yhase topic jis topic page ki link upar pass kri thi uska naam nikal lia taki usko as a key use kr pai data object me data fill krne kelie
    let topic = intermediateData.topics[i]

    //jo project pages ki links mili hai (total 5 links ) inpr loop mara and har link ko is function - fetchIssueFromProject me pass kra
    //ye function apko given project page link se issues page pr jata hai and whase top 1 issue ki link le ata hai and fir humne us link ko data object me require topic array me push krdia 
    for(let j = 0;j<arr.length;j++){
        let issueLink = await fetchIssueFromProject(arr[j])
        data[topic].push(issueLink)
    }
  }
  console.log(data);
})();
