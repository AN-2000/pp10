//pehle to require krlo readline module ko
const readline = require("readline");

//ek interface banaya basically btare hai ki khase input lena and kha output dena hai
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "myPrompt>>",
});

//2 variables banai jha numbers store krenge
let a, b;  

//user ko prompt krdia basically bola ki ab jobhi tu input dega wo muje script me milega
rl.prompt();

//interface ko bola tu ek event ka wait kr kaunsa event? =>
//user ke input dena ka event(type krke enter press krna)
//jb ye wala event hoga to niche wala function chalega
rl.on("line", function (input) {
  //is function ko user ka input milta hai hamesha argument me
  //hum check kr rhe hai ki wo input ek number hai ya fir + sign hai
  //agr inme se koi nhi h to bolo please enter a number
  if (isNaN(Number(input)) && input != "+") {
    console.log("Please enter a number");
  } else {
    //else pehle jo number aye use a me store fir dusre number jo input aye use b me store
    if (!a && a != 0) {
      a = Number(input);
    } else if (!b) {
      b = Number(input);
    }
  }

  //agr a and b dono me number agye and user ne + sign diya input to use output dedo
  if (input == "+" && a != undefined && b != undefined) {
    console.log(a);
    console.log(b);
    console.log(a + b);
    process.exit(0);
  }
  //  and ye sab krne ke baad firse prompt krdo
  rl.prompt();
});
