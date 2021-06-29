let addBtn = document.querySelector(".add");
let body = document.querySelector("body");

addBtn.addEventListener("click", function () {
  let div = document.createElement("div"); //<div></div>

  div.classList.add("modal"); //<div class="modal"></div>

  div.innerHTML = ` <div class="task-section">
  <div class="task-inner-container" contenteditable="true"></div>
</div>
<div class="modal-priority-section">
  <div class="priority-inner-container">
    <div class="modal-priority pink"></div>
    <div class="modal-priority blue"></div>
    <div class="modal-priority green"></div>
    <div class="modal-priority black selected"></div>
  </div>
</div>`;

  let allModalPriority = div.querySelectorAll(".modal-priority");

  for (let i = 0; i < allModalPriority.length; i++) {
    allModalPriority[i].addEventListener("click", function (e) {


      for (let j = 0; j < allModalPriority.length; j++) {
          allModalPriority[j].classList.remove("selected")
      }

      e.currentTarget.classList.add("selected")

    });
  }

  body.append(div);
});
