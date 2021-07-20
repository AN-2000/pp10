let allAlignmentOptions = document.querySelectorAll(".align-cell-content span");
let allColorOptions = document.querySelectorAll(".cell-color-options span");

let body = document.querySelector("body");

let leftAlign = allAlignmentOptions[0];
let centerAlign = allAlignmentOptions[1];
let rightAlign = allAlignmentOptions[2];

let bgColorPicker = allColorOptions[0];
let fontColorPicker = allColorOptions[1];

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

bgColorPicker.addEventListener("click", function () {
  let colorPickerElement = document.createElement("input");
  colorPickerElement.type = "color";
  body.append(colorPickerElement);
  colorPickerElement.click();

  colorPickerElement.addEventListener("input", function (e) {
    console.log(e.currentTarget.value);
    if (lastCell) {
      lastCell.style.backgroundColor = e.currentTarget.value;
      let address = lastCell.getAttribute("data-address");
      dataObj[address].bgColor = e.currentTarget.value;
    }
  });
});


fontColorPicker.addEventListener("click", function () {
    let colorPickerElement = document.createElement("input");
    colorPickerElement.type = "color";
    body.append(colorPickerElement);
    colorPickerElement.click();
  
    colorPickerElement.addEventListener("input", function (e) {
      console.log(e.currentTarget.value);
      if (lastCell) {
        lastCell.style.color = e.currentTarget.value;
        let address = lastCell.getAttribute("data-address");
        dataObj[address].color = e.currentTarget.value;
      }
    });
  });