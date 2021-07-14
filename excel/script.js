let rowNumberSection = document.querySelector(".row-number-section");

let formulaBarSelectedCellArea = document.querySelector(".selected-cell-div");

let cellSection = document.querySelector(".cell-section");
let columnTagsSection = document.querySelector(".column-tag-section");

let lastCell;
let dataObj = {};

cellSection.addEventListener("scroll", function (e) {
  rowNumberSection.style.transform = `translateY(-${e.currentTarget.scrollTop}px)`;

  columnTagsSection.style.transform = `translateX(-${e.currentTarget.scrollLeft}px)`;
});

for (let i = 1; i <= 100; i++) {
  let div = document.createElement("div");
  div.innerText = i;
  div.classList.add("row-number");
  rowNumberSection.append(div);
}

for (let i = 0; i < 26; i++) {
  let asciiCode = 65 + i;

  let reqAlphabet = String.fromCharCode(asciiCode);

  let div = document.createElement("div");
  div.innerText = reqAlphabet;
  div.classList.add("column-tag");
  columnTagsSection.append(div);
}

//inside this nested for loop we are creating individual cells UI + cell obj
for (let i = 1; i <= 100; i++) {
  let rowDiv = document.createElement("div");
  rowDiv.classList.add("row");

  for (let j = 0; j < 26; j++) {
    let asciiCode = 65 + j;
    let reqAlphabet = String.fromCharCode(asciiCode);
    let cellAddress = reqAlphabet + i;

    dataObj[cellAddress] = {
      value: undefined,
      formula: undefined,
      upstream: [],
      downstream: [],
    };

    let cellDiv = document.createElement("div");

    cellDiv.addEventListener("input", function (e) {
      // jis cell pr type kra uske attribute se maine uska cell address fetch kra
      let currCellAddress = e.currentTarget.getAttribute("data-address");

      //kuki sare cell objects dataObj me store ho rakhe h using their cell address as key
      //maine jis cell pr click krke type kra uska hi address fetch and uska hi object chahiye
      //to wo address as key use krke dataObj se fetch krlia req cellObj ko
      let currCellObj = dataObj[currCellAddress];

      currCellObj.value = e.currentTarget.innerText;
      console.log(currCellObj);
    });

    cellDiv.setAttribute("contentEditable", true);
    cellDiv.classList.add("cell");
    cellDiv.setAttribute("data-address", cellAddress);
    cellDiv.addEventListener("click", function (e) {
      if (lastCell) {
        lastCell.classList.remove("cell-selected");
      }

      e.currentTarget.classList.add("cell-selected");

      lastCell = e.currentTarget;

      let currCellAddress = e.currentTarget.getAttribute("data-address");

      formulaBarSelectedCellArea.innerText = currCellAddress;
    });

    rowDiv.append(cellDiv);
  }

  cellSection.append(rowDiv);
}
