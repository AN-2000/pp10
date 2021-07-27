//database version signifies how many major changes my database has been through
let req = indexedDB.open("Notes", 1);

req.addEventListener("success", function () {
  console.log(1);
  let db = req.result;
  //   console.log(db);
});

//kuch bhi creation ya fir update ka kaam ho to ye wala apka event chlta h
req.addEventListener("upgradeneeded", function () {
  console.log(2);
  let db = req.result;

  db.createObjectStore("csNotes", { keyPath: "cId" });
});

req.addEventListener("error", function () {
  console.log(3);
});
