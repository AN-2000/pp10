let ul = document.querySelector("ul");
let input = document.querySelector("input");
let btn = document.querySelector("button");

btn.addEventListener("click", function () {
  let task = input.value;

  let li = document.createElement("li");

  li.innerText = task;

  ul.append(li);
});
