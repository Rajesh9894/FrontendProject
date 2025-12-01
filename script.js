// // var a=10
// // var b = 20
// // console.log(a+b)

// function abc(){
//     console.log("hello world")
// }
// abc()

// function samsung(){
//     console.log("this is samsung")
// }
// samsung()

// function iphone(){
//     console.log("this is iphone")
// }
// iphone()

// function redmi(){
//     console.log("this is redmoi")
// }
// redmi()

// function oppo(){
//     console.log("this is oppo")
// }
// oppo()

// Exercise 

// var a = 10
// var b = 20 
// function add(){
//     console.log(a+b)
// }
// add()

// var factor = "kamal"
// var fmovie = "anbea sivam"
// var fplayer ="dohni"
// function favourite(){
//     console.log("favourite actor :"+"factor")
//     console.log("favourite player :"+"fplayer")
//     console.log("favourite movie :"+"fmovie")
// }
// favourite()

// using parameters
// function add(a,b){
//     console.log(a+b)
// }
// add(10+20)

// function area(l,b){
//     var a = a * b
//     // console.log("Area is:"+l+b)
//     console.log("Area is :"+a)
// }
// var l = 10
// var b = 20
// area(10,20)
// // ------------------------------------------
// function area(l, b) {
//     var a = l * b;  // Correct calculation
//     console.log("Area is : " + a);
// }

// var l = 10;
// var b = 20;

// area(l, b);

//RETURN TYPE

// function myname(){
//     return "Raje"
// }
// var a = myname()
// console.log(a)


// function add(a,b){
//     return a+b
// }
// var total = add(5,5)
// console.log(total)

//Using condition looping in javaScript to print even numbers

for(var i=1; i<50; i++){
    if (i%2==0){
        console.log(i)
    }
}

//Using condition looping in javaScript to print odd numbers

for(var i=1; i<20; i++){
    if(i%2!==0){
        console.log(i)
    }
}

//Using function to print prime numbers between 1 to 50
for (let num = 2; num <= 50; num++) {

    let isPrime = true;

    for (let i = 2; i < num; i++) {  
        if (num % i === 0) {       
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(num);
    }
}





