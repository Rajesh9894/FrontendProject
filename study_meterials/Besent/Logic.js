// JavaScript Complete Topics (Context Only)
// 🔹 Operators & Basics
// Operators
// Post & Pre Increment
// Assignment Operators
// Logical Operators
// Concatenation & Template String
// Type Conversion

// 🔹 Control Flow
// Control Statements
// Switch Statement
// Nested if Statement

// 🔹 Loops
// Looping Statements
// While Loop
// Do While Loop

// 🔹 Functions
// Functions
// Return Type & Non-Return Type
// Variable Declaration
// Function Types
// Hoisting
// Currying Function
// Closure Functio
// Self-Invoked Function
// Generator Function

// 🔹 Data Structures
// Arrays
// Objects
// Iteration

// 🔹 Modern JavaScript Features
// Spread Operator & Rest Operator
// Destructuring

// 🔹 Array Methods
// Array Methods (basic)
// Concat, Slice, Flat, Fill
// Reverse, Sort, Includes, Join
// IndexOf, LastIndexOf

// 🔹 Higher Order Functions
// Higher Order Methods
// Filter vs Find
// Sort, Some, Every
// Reduce

// 🔹 String & Date
// String Methods
// Date Object
// Math Object

// 🔹 Objects & Functions Advanced
// Object Methods
// Inheritance
// Function Methods (Call, Apply, Bind)
// Deep Copy & Shallow Copy

// 🔹 Asynchronous JavaScript
// Synchronous vs Asynchronous JavaScript
// Promises
// Async & Await
// Fetch API

// 🔹 Advanced Concepts
// Modules

// 🔹 DOM (Document Object Model)
// DOM Basics
// Traversing Elements & Events
// Manipulating Elements
// Event Handler vs Event Listener

// 🔹 Projects
// Project 1: Calculator
// Project 2: Form Validation

// let str ="Hello";
// let reversed = "";

// for(let i = str.length-1;i>=0;i--){
//     reversed += str[i];
// }
// console.log(reversed)

// -------------------------------------------------------------------------->

// // Array

// //  length              1           2      3     4
// let multipleUser =["javascript","React","html","css"];
// // index                0          1       2     3
// console.log(multipleUser[0],multipleUser[2],multipleUser[1]);

// console.log(multipleUser.length);
// console.log(multipleUser.length-1);

// console.log(multipleUser[multipleUser.length-1])

// // Object --->it have behaviour and Properties (key:value pair)

// let Vehicle ={
//     vehicaltype:"Four Wheeler",
//     Price:100000,
//     name:"car",
//     color:"red",
//     fuletype:"petrol"
// }

// console.log(Vehicle)
// console.log(Vehicle.Price)

//operators 
//Arithmetic Operators
//Increment/Decrement 
// num++//post increament
// ++num //Pre increament
//num--//post decreament
//--num//pre decreament

//Post pre increament 
// 1.substitute
// 2.operation
// 3.increament 


//Assignment operator 
//comparison operator //it compare two values 
//logic operator[And T+T=T otherwise false (short circute Evaluavation if one condition getting false it doesn't checks the other condition),
// or both getting false is false otherwise true ,Not] // it compare two different conditions

// concat -->using "" and ''
// let str ="hello";
// let str1=" World";
// let output = str+str1;
// console.log(output)

// console.log(str+" "+ str1+" welcome");

// //Template string or template Literals(``)
// let newstr=`JavaScript`; //in this template string i  want to add a str to use string interpolation.
// console.log(newstr);

// // String interpolation;
// let newstr1 =`${newstr} is a scripting language `;
// console.log(newstr1)

// let num=5;
// let first=1;

// console.log(first + "*"+num+"="+(num*first));
// console.log(`${first}*${num}=${first*num}`);

// //Type conversion -->it will change the one datatype to another;
// // String+anything === anything+sring
// // Implicit conversion -
// let num1 ="45";
// let num2 = 45;
// let add =num1+num2;
// console.log(add)

// //Number -->
// console.log(10+true)//true ==>1 false==>0
// console.log(10+undefined)//nan==>Not a number 
// console.log(10+null)//null==>0 so its 10.
// console.log(typeof(10+[1]))
// console.log(10+{})
// console.log(10+'')

//Bolean 
// console.log(10+true);
// console.log(10+undefined);//Nan
// console.log(10+null)
// console.log(true+null)


// // Explicit conversion
// console.log(10+Number("10"));
// console.log(Number("  "));
// console.log(Number("abc"))//Nan
// console.log(Number(true));
// console.log(Number(false));
// console.log(Number(undefined));
// console.log(Number[1,2]);
// console.log(Number({}));

// console.log( Boolean(""));
// console.log( Boolean("123"));
// console.log( Boolean("abc"));
// console.log( Boolean(undefined));
// console.log( Boolean(null));

// console.log( Boolean(Infinity));
// console.log( Boolean(-Infinity));
// console.log( Boolean(NaN));

// console.log(String());

//consoles-->console.log(),console.warn(),console.error();


//Flow control Statements.
// control statement:
// conditional statements:
// if,if_else,if_else if_else,teranary operator,switch statement, nested if_else:

// else_if lader 

//Swith 
// switch (expression ){
//     case value :ststement;
//     break;
//     case value:statement1;
//     break;
//     default:statement;
//     break;
// }

// let trafficlight ="speed"

// switch(trafficlight){
//     case "red":console.log("stop");
//     break;
//     case "yellow":console.log("Wait");
//     break;
//     case "green":console.log("go")
//     break;
//     default:console.log("Pay fine ");
//     break;
// }

// //Fsall throw Method
// let day ="saturday";

// switch(day){
//     case "Monday":
//         case "thuesday":
//             case "thursday": console.log("Weekdays");
//             break;
//             case "saturday":
//                 case "sunday":console.log("Weekend");
//                 break;
//                 default:console.log("It's not a day");
// }

//Nested if 

// let age = 10;
// let height = 175;
// let weight = 70;

// if (age >= 18) {
//     if (height >= 155) {
//         if (weight >= 60) {
//             console.log("you are selected")
//         }
//         else {
//             console.log("Weight is not matched")
//         }
//     }
//     else {
//         console.log("Height is not matched")
//     }
// }
// else {
//     console.log("Age is not Selected")
// }

// //Terinary operator 
// //condition ? "statements1": "statment2"

// let psw_input = false;

// psw_input ? console.log("Welcome to Website"):console.log("password Incorrect");

//LOPPING STATEMENT:
// FormData,forof,forin,while,DOwhile;

// for loop

// let value = 1;

// for(let i=1; i<=10;i++){
//     if(i%2 === 0)console.log(i);
//     // if(i%2 !== 0)console.log(i);
// }

// While loop

// let value = 10;

// while(value>=1){
//     console.log(value);
//     value --;
// }

//Do While -->it prints the statement first then it checks the condition 
// let value = 10;

// do{
//     console.log(value);
//     value++;
// }
// while(value<=20);

//Break and continue 

// for(let i=1;i<=20;i++){
//     // if(i%2 == 0){
//         if(i === 10){
//             continue;
//         }
//         console.log(i);
//     // }
// }


//Function ==> Decleration,Parmeter,Argument,closureReturn & nn-Return Type;
/* <function keyword><function Name ><function parameter> */

// What is Function?
//   JavaScript Function is a Block of code  that performs a task or calculates the value

 //Function Decleration 
//  function functionName{
//     //block of code 
//  }
//  functionName()

// let person={
//     name:"Rajesh",
//     age:20
// }   

// let employeeId = "1S2346DV7B";
// let newID = employeeId ||   "UW2Q34B";
// console.log(newID);

// function Printusername(uName="rajesh",uAge=23){
//     // console.log("Hello Everyone",person.name,person.age);
//     // if(uAge<40){
//          console.log(`Hi ${uName}, Your age is ${uAge}`);
//     // }
   
// }
// Printusername("Rajesh");
// Printusername()
// Printusername(undefined,37)

// Default Perameter / Default Arguments 


//Return Type & Non-Return Type 

// function findreact(l,b){
//     // console.log("Finding Area");
//     let condition = true;
//     if(condition){
//         return l*b;
//     }
//     else{
//         return null;
//     }
//     return l*b ;//Return Does't Execute 
//     console.log("Find val");
// }
// let newvalue = findreact(20,20);
// // console.log(newvalue)
// console.log(findreact(20,20),newvalue); 

// function cubic(num){
//     // console.log(num*3);
//     return (num **3,"Eighty",true,120)  // It return last value only , the 
// }
// let newvalue = cubic(4);
// console.log(newvalue);

//Non -return type:
// function nonreturn(){
//     console.log("It is a non return");

// }
// // nonreturn()
// let non = nonreturn();
// console.log(non);

//Variable decleration ==>var,let,const
//Function Scope
// function outerfunction(){
//     if(true){
//         var name = "Am Rajesh";
//         console.log(name)
//     }
// }
// outerfunction()

// //Block Scope

// function blockScope(){
//     if(true){
//         let block = "Rajesh";
//     }
//     console.log(block); //Block is not definded.
   
// }
// blockScope()za

