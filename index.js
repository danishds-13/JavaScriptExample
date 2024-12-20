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
if (5 > 0){
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

// for in loop 
let obj = {
    harry: 90,
    shubh: 45,
    shiv: 22
}
for (let a in obj){
    console.log("marks of " +a+" are " +obj[a])
}
// for - of loop this is the variable iteration
for (let b2 of "harry"){
    console.log(b2)
}

//point 8- While and Do-While
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter a value of n: ", (n) => {
    n = Number.parseInt(n);

    let i = 0;
    while (i < n) {
        console.log(i + 1);  // Printing values from 1 to n
        i++;
    }

    rl.close();
});

// POINT -9 - functions:- Now this below example is a code that is without an fucntion to find the average of three numbers 
let p1 =1;
let q1 =2;
let r1 =3;

console.log("average of three numbers are :", (p1 + q1) /2)
console.log("average of three numbers are :", (q1 + r1) /2)
console.log("average of three numbers are :", (r1 + p1) /2)

// But if we use the function we can make it even more easy than having mulitple lines of code 
function avgthree(p1,q2,r3){
    (p1 + q1 ) /2;
    (q1 + r1) /2;
    (r1 + p1) /2
}

avgthree(1,2,3)

//POINT-10 :Strings
let surname = "dan"
console.log(surname.length)

//template literals: 
let boy1="Dan";
let boy2="San";
let sentence = `${boy2} is a friend of ${boy1}`
console.log(sentence)

//escape sequence 
let namesofescape = 'Dan\'s'   // here if we see there is too many single quotes and then to include it then we must be ignored using an escape sequence 
console.log(namesofescape)

// POINT-11
const sub_marks=[10,20,50,null,false,"Not written"]
console.log(sub_marks)
console.log(sub_marks[1]) // to check only one value 
console.log(sub_marks[1]) // to check only one value 
sub_marks[7]=66 //adding a new element to the array
sub_marks[1]=30  // replacing an existing element in an array
console.log(sub_marks)

//POINT-12 
//toString():
let str=[1,4,5,6]
console.log(str.toString())

//join()
let jo=[2,3,5,6]
console.log(jo.join("_"))

//pop()
str.pop()
console.log(str)

//push
str.push(8)
console.log(str)

//shift
jo.shift()
console.log(jo)

// POINT-11 {Contd}
//delete -> this method delete an element that is an array but that occupied space/block would still exist
let delmode=[4,5,6,7,8];
console.log(delmode.length);
delete delmode[0];
console.log(delmode.length);

//concat -> with this option we can add the two arrays together without changing any values 
let con1=[2,3,4,5,6];
let con2=[7,8,9,10,11];
let contotal=con1.concat(con2)       //how this works is the initial values to start the concat and then we add the other values in the brackets and also add them with a separator like commas
console.log(contotal)

//Sort 
let sor1=[551,12,255,26,33,44,587,96];
sor1.sort()      //this is for sorting the values in a given array but in js its sort done by alphabetic order that is 1,2,3,4 so any value first string and then that is arranged in alphabetic order 
console.log(sor1)
// to actual have the purpose of the sort array method we need to use the compare method
let compare = (a,b)=> {
    return a  -  b
} 
let sor12=[551,12,255,26,33,44,587,96];
sor1.sort()      
console.log(sor12)

//reverse -> this function is used to reverse any value in the opposite 
sor12.reverse()
console.log(sor12)

//POINT-13 Foreach: this is used to create an html array from an array object 
num = [2,6,58,9,5]
num.forEach((element) => {
   console.log(element * element) 
});

// for of commands we can use the for of command to list the array  in an element 
for (i of num){
    console.log(i)
}

// array from 
let name1234="harry"
let arr = Array.from(num)
console.log(arr)


