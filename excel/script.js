let rowNumberSection = document.querySelector(".row-number-section")

for(let i = 1;i<=100;i++){
    let div = document.createElement("div")
    div.innerText = i
    div.classList.add("row-number")
    rowNumberSection.append(div)
}