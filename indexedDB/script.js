let opnBtn = document.querySelector("#open");

let addBtn = document.querySelector("#add");

let input = document.querySelector("input");

let viewBtn = document.querySelector("#view");

let table = document.querySelector("table");

let db;

let tempData = [
  { cId: 2423534534, note: "this is note 1" },
  { cId: 2426634534, note: "this is note2" },
  { cId: 2113534534, note: "this is note 3" },
];

viewBtn.addEventListener("click", function () {
    
  let isOpen = viewBtn.getAttribute("data-open");

  if (isOpen == "true") {
    viewBtn.setAttribute("data-open", "false");
    table.innerHTML = "";
    return;
  }

  viewBtn.setAttribute("data-open", "true");

  let tx = db.transaction("csNotes", "readonly");

  let csNotesObjectStore = tx.objectStore("csNotes");

  let req = csNotesObjectStore.openCursor();

  table.innerHTML = `<thead>
    <tr>
      <th>S. No.</th>
      <th>Note</th>
      <th> Delete </th>
    </tr>
  </thead>
  <tbody>
   
  </tbody>`;

  let tbody = table.querySelector("tbody");

  let serialNumber = 1;

  req.addEventListener("success", function (e) {
    let cursor = req.result;

    if (cursor) {
      let currObj = cursor.value;
      let tr = document.createElement("tr");
      tr.innerHTML = `
                <td> ${serialNumber} </td>
                <td> ${currObj.note} </td>
                <td> <button data-cId="${currObj.cId}"> Delete </button> </td>
              `;

      let button = tr.querySelector("button");

      button.addEventListener("click", function (e) {
        let cId = Number(e.currentTarget.getAttribute("data-cId"));
        deleteNote(cId);
        e.currentTarget.parentElement.parentElement.remove();
      });

      tbody.append(tr);
      serialNumber++;
      cursor.continue();
    }
  });
});

addBtn.addEventListener("click", function () {
  if (!db) {
    alert("database has not been opened yet");
    return;
  }

  let value = input.value;
  input.value = "";

  let tx = db.transaction("csNotes", "readwrite");

  let csNotesObjectStore = tx.objectStore("csNotes");

  let data = {
    note: value,
    cId: Date.now(),
  };

  csNotesObjectStore.add(data);
});

opnBtn.addEventListener("click", function () {
  let req = indexedDB.open("Notes", 1);

  req.addEventListener("success", function () {
    db = req.result;
    console.log(db);
    alert("successfully opened");
  });

  req.addEventListener("upgradeneeded", function () {
    db = req.result;

    db.createObjectStore("csNotes", { keyPath: "cId" });
  });

  req.addEventListener("error", function () {
    alert("error in opening the db");
  });
});

function deleteNote(cId) {
  let tx = db.transaction("csNotes", "readwrite");

  let csNotesObjectStore = tx.objectStore("csNotes");

  csNotesObjectStore.delete(cId);
}
