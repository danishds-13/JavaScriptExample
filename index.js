// Initial command to display anything we use the console.log - POINT1
console.log("helloworld");

//to print something using an variable -POINT1
let a1=64
console.log(a)

//To show var let and const -Point-2
var a = 45;
let b ="harry";
var c = null
var d = undefined
const e = "hellowarzone"
{
    let b ='this'
    console.log(b)
}
console.log(b)
console.log(e)

// To show about primitive data types oin javascript - Point-3
let a2 = null;
let b2 = 75;
let c2 = "dan"
let d2 = Symbol("I am learning things for a better tomorrow")
let e2 = true;
let f2 = BigInt("567") + BigInt("3")
let g2 = undefined
console.log(a2 ,b2 ,c2 ,d2 ,e2 ,f2 ,g2)
console.log(typeof d2)

//Objects - POINT-3  - In python this is called dictionary then in JS its called as objects 
const team ={
    "harry" : true,
    "kiran": false,
    "lokesh": 67,
    "rohan": undefined
}
console.log(team["harry"])

//Pratice set - POINT-4 
var addnumber = function(a,b){
    return a+b;
}
console.log(addnumber(7,2))
console.log(typeof a)

//the below one is an exmample for an object to be assigned but the thing is we cannot change the variable once its assigned but we can add another attribute to this as its a reserved value in object 
//const a3 = {
   // name:"dan",
    //section: 1   
//};
//a3 = 3


//There are two ways to access any element way one is dict.keyword that is the variable mame and dot operator and another one is dict["word"] this is the variable and then we use the brackets to get it defined
const dict = {
    word: "has an meaning",
    mean: "being sensitive",
    awkward: "shy"
}
console.log(dict.awkward)

//POINT-5 Operators and expression 
console.log("Expressions:-")
let a4=10;
let b4=6;
console.log("a+b=",a4+b4)
console.log("a-b=",a4-b4)
console.log("a*b=",a4*b4)
console.log("a/b=",a4/b4)
console.log("a**b=",a4**b4)
console.log("a%b=",a4%b4)
console.log("a++b=",++a4)
console.log("a--b=",--a4)