// Initial command to display anything we use the console.log - POINT1
console.log("helloworld");

//POINT1 - to print something using an variable 
let a1=64
console.log(a)

//-Point-2 -To show var let and const 
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

//- Point-3- To show about primitive data types oin javascript 
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

//- POINT-4 -Pratice set 
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

//Compression operator:
let comp1 = 6;
let comp2 = 7;
console.log("comp1 == comp2 is:", comp1 == comp2)
console.log("comp1 != comp2 is:", comp1 != comp2)
console.log("comp1 === comp2 is:", comp1 === comp2)
console.log("comp1 !== comp2 is:", comp1 !== comp2)
console.log("comp1 > comp2 is:", comp1 > comp2)

//Logical operators:
let xy=6;
let xz=7;
console.log(xy>xz && xz==7) // both should be the same value then will return the result 
console.log(xy<xz && xz==5) // if any value is true then it will return me as true
console.log(!true)

//POINT-6 Conditional operators 
// let a3=prompt("hey whats your age!")
// console.log(typeof a3)
// a3=Number.parseInt(a3) // convert string to number this is called as parse int

//if statement: 
let age=5;
if (age > 0){
    console.log("This is a valid age")
}

// if -else statement:
if (age > 0){
    console.log("This is a valid age")
}
else{
    console.log("invalid age")
}

//if-else-if statement:
if (age < 0){
    console.log("This is a valid age")
}
else if(age<15){
    console.log("kid age is not for driving at all")
}
else {
    console.log("kid age is for driving only man!!")
}

//Example for Switch statement:
const expr= 'banana'
switch(expr){
    case 'orange':
        console.log('oranges are not that tasty');
        break;
    case 'mangoes':
    case 'banana':
        console.log('banana and mangoes are yummy man');
        break;
    default:
        console.log('looks like fruits aint that great');
}

//Example for trenary operator: 
console.log("you can now" , age<18? "drive man":"Not at all")

// POINT - 7 : Loops
for (let z=0;z<5;z++){              //initialiser:condition:increament/decreament.
    console.log(z)
}
