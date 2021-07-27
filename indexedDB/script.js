let opnBtn = document.querySelector("#open");

let addBtn = document.querySelector("#add");

let input = document.querySelector("input");

let db;

let tempData = [
  { cId: 2423534534, note: "this is note 1" },
  { cId: 2426634534, note: "this is note2" },
  { cId: 2113534534, note: "this is note 3" },
];

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
