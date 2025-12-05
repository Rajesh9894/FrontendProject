//String Method

let name ="Rajesh";
console.log("Text Length is: ",name.length); //Length

let char = "123456789";
console.log(char.charAt(3));
console.log(char.charCodeAt(0)); //Character Position

msg ="Hi am Rajesh";
console.log(msg.toUpperCase());
console.log(msg.toLowerCase());

let slc = "Am A Developer";
console.log("Slice Result: ",slc.slice(4));
console.log("SliceResult: ",slc.slice(4,8)); //Slice

let text ="And Am Currently doing course";
console.log("Replace output: ",text.replace("course","Python Developer"));
console.log(text.toWellFormed()); //Replace

let trm = "         hey See here            ";
let trm1 = "         hey See here            ";
console.log(trm.trim());
console.log(trm.trimStart());
console.log(trm.trimEnd()); //Trim

let inc = "Frontend Developer";
console.log(inc.includes("Developer"));
console.log(inc.includes("Raja")) //Includes to check weather it is true or false.

const find = "Rajesh";
console.log(find.at(3)); //Find Letter

const Text1 = "Am";
const Text2 = "Rajesh";
console.log(Text1,Text2); //Concat

const num = "12";
console.log(num.padStart(8,"0x"));
console.log(num.padStart(8,"0"));

