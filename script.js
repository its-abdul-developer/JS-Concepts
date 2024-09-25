// JavaScript all important Basic Concepts

alert("hello sir");
prompt();

// if and else statement
let a =10;

if(a == 10){
console.log("hello")  //true
}else if(a >5){  //true
    console.log("a greater than 5");
}else if(a<20){   //true
    console.log("a less than 20");
}else{
    console.log("ho gaya check")
}


// loops
// FORLOOP
let z = 20;
for(let z = 20; z>10; z--){
   console.log(z)
}

// forEach
let arr = [1,2,3,4,5,6,7,8,9,];

arr.forEach(()=>{
    console.log(arr);
})


// functions

function abcd(){
    console.log("function check ho gaya")
}

abcd();

function abc(name){
console.log("hello," +name);
}

abc("abdul");

// function parameters
function abcde(a,b){
    console.log(a+b);
}
abcde(10,5);

// function return
function rturn(e, f){
    return e*f;
    
}

console.log(rturn(3, 4));

// Arrays
let aray = ["abdul", "wahab", "cheema"];

console.log(aray);


// Objects

let obj = {
    name: "abdul wahab",
    age: 22,
    city: "wazirabad",
    fatherName: "Muhammad Bashir",
    address: {
        post: "khas khasra",
        city: "wazirabad",
        state: "punjab",
    }
}
console.log(obj.fatherName);


// closures

function outer(){
    let d = 20;
    let g = 5;
    return function(){
        console.log(d*g);
    }
}

let closures = outer();

closures();


// callbacks

function callbacks(obj, callbacks){
console.log(obj);
    callbacks(obj);
}

function callcheck(){
  Object =  {
        name: "qasim",
        age: 51,}
        console.log(Object);
}

callbacks({
    name: "nabeel",
    age: 55,}, callcheck);

    
// Promise

    let promises = new Promise((resolve, reject) => {
        let badar = 10;
        if (badar < 20){
             resolve();
        }else if(badar > 20){

            reject();
        }
        }
    )

    promises.then(()=>{
        console.log("resolve hai");
    })

    promises.catch(()=>{
        console.log("reject hai");
    })

//  fetch API

fetch('https://randomuser.me/api/')
.then(raw => raw.json())
.then(res => {
    console.log(res.results[0].email)
})


// Modules

import {check} from "./module.js"

check();

import {js} from "./module.js"

js();

// ES6+Fextures
// arrow function
let add = (x, y)=> x+y;
console.log(add(12,12));

// template litterals

let name = "abdul";
let age = 22;

console.log(`hello! ${name}`);

// distructuring 
let person = {name: "qasim", age: 22, city: "faisalbad", address: "post khas"}

let {name1, age2, city, address} = person;

console.log(address);
console.log(city);

// parameters

function defaultParameters(brotherName = "adeel qasim"){
    let para = `heloo, ${brotherName}`;
    console.log(para);
}

defaultParameters();


// map
// Concept: map function array ke har element par ek function apply karta hai aur ek nayi array return karta hai jisme har element transformed hota hai.
let arr1 = [23,45,68,24,78,]

let arr2 = arr1.map((value, index, Array )=>{
    console.log(value, index, Array);
return value + 1;
});

console.log(arr2);

// filter condition
// Concept: filter function array ke elements ko ek condition ke basis par filter karta hai aur ek nayi array return karta hai jo sirf un elements ko contain karti hai jo condition ko satisfy karte hain.

let arr3 = [24,56, 1,3,5,7]
let newarr3 = arr3.filter((value, index)=>{
    console.log(value, index);
    return value<20 ;
})

console.log(newarr3);

reduce
// Concept: reduce function array ke elements ko ek single value mein reduce karta hai, typically by applying a function that combines each element into a single result.

let arr4 = [1,2,5,6,7,0,3,]

let newarr4 = arr4.reduce((value1, value2)=>{
return value1 + value2;
// value1 me 1 lay ga phir value2 me 2 lay ga jo answer aye ga phir osy next one by one kay sath add karta jaye ga.
})

console.log(newarr4);

