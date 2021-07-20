let allAlignmentOptions = document.querySelectorAll(".align-cell-content span");

let leftAlign = allAlignmentOptions[0];
let centerAlign = allAlignmentOptions[1];
let rightAlign = allAlignmentOptions[2];

leftAlign.addEventListener("click", function () {
  if (lastCell) {
    lastCell.style.textAlign = "left";
    let address = lastCell.getAttribute("data-address");
    dataObj[address].align = "left";
  }
});

rightAlign.addEventListener("click", function () {
  if (lastCell) {
    lastCell.style.textAlign = "right";
    let address = lastCell.getAttribute("data-address");
    dataObj[address].align = "right";
  }
});

centerAlign.addEventListener("click", function () {
  if (lastCell) {
    lastCell.style.textAlign = "center";
    let address = lastCell.getAttribute("data-address");
    dataObj[address].align = "center";
  }
});
