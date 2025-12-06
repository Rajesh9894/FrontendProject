// //String Method

// let name ="Rajesh";
// console.log("Text Length is: ",name.length); //Length

// let char = "123456789";
// console.log(char.charAt(3));
// console.log(char.charCodeAt(0)); //Character Position

// msg ="Hi am Rajesh";
// console.log(msg.toUpperCase());
// console.log(msg.toLowerCase());

// let slc = "Am A Developer";
// console.log("Slice Result: ",slc.slice(4));
// console.log("SliceResult: ",slc.slice(4,8)); //Slice

// let text ="And Am Currently doing course";
// console.log("Replace output: ",text.replace("course","Python Developer"));
// console.log(text.toWellFormed()); //Replace

// let trm = "         hey See here            ";
// let trm1 = "         hey See here            ";
// console.log(trm.trim());
// console.log(trm.trimStart());
// console.log(trm.trimEnd()); //Trim

// let inc = "Frontend Developer";
// console.log(inc.includes("Developer"));
// console.log(inc.includes("Raja")) //Includes to check weather it is true or false.

// const find = "Rajesh";
// console.log(find.at(3)); //Find Letter

// const Text1 = "Am";
// const Text2 = "Rajesh";
// console.log(Text1,Text2); //Concat

// const num = "12";
// console.log(num.padStart(8,"0x"));
// console.log(num.padStart(8,"0"));

/*------------------------------------------------------------------*/

// let apidata = fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then((realdata) => {
//       console.log(realdata);
//       return realdata.json()
//   }).then((data)=>{
//     console.log(data)
//   })
//   .catch((err) => {
//       console.log(err);
//   });

// console.log(apidata);

// const handlefetch =async( ) =>{
//   let apidata =await fetch('https://jsonplaceholder.typicode.com/todos/1');
//   let data = await apidata.json();
//   console.log(apidata);
  
// }
// handlefetch()

// function a() {
//   let age = 23;

//   function b() {
//     console.log(age);
//   }

//   return b; // return inner function
// }

// const result = a(); // a() returns function b
// result();           // calling b(), prints 23

// Hoisting-it is a js behaviourwhere the variables: var ,let const are host to top of the scope-->var --top let and const is temperory.
// JavaScript moves variable and function declarations to the top of their scope before the code runs.

// So you can use a function or variable before it is declared (with some rules).
// console.log (a)
// var a = 10; 
// console.log(a);

// scope-iit determinds the acceblity of variable.

// global
// function
// block -let 
 
//call by value and call by refrence.

// let a = 10 

// let b = a 

// b = 12 

// console.log(a,"a");
// console.log(b,"b");

// let a ={name:"Rajesh",age:"25"};
// let b = {...a} ;

// b.age = 20;
// b.name = "janu"

// console.log(a,"a");
// console.log(b,"b");

//stack and heap -->heare stack is assign the data and heap is store the data .

//shallow copy only works on outer only.
// let a ={name:"Rajesh",age:"25",address:{city:"chennai",state:"TN"}};
// let b = {...a} ; //shallow copy

// b.age = 20;
// b.name = "janu"
// a.address.city = "CH"

// console.log(a,"a");
// console.log(b,"b");

// let a ={name:"Rajesh",age:"25",address:{city:"chennai",state:"TN"}};

// let b = JSON.parse(JSON.stringify(a));
