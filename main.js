

import { countries } from "./countries.js";

import { webTechs } from "./web_techs.js";


// task 1
// In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

// let check = countries.indexOf("Ethiopia");

// if(check>=0) {
//     console.log(countries[check].toString().toUpperCase());
// }else{
//     countries.push("Ethiopia")
// }

// task 2
// In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.

// let check = webTechs.indexOf("Sass");

// if(check>=0) {
//         console.log("Sass is a CSS preprocess");
//     }else{
//         webTechs.push("Sass");
//     console.log(webTechs);

//     }

// task 3
// Slice the first ten countries from the countries array
// Find the middle country(ies) in the countries array

// let sli = countries.slice(0,10)
// console.log(sli);

// let midNum = Math.floor(countries.length/2)
// let midCon = [];

// for(let i =0; i<midNum;i++){

//     midCon.push(countries[midNum+i])
// }
// console.log(midCon);

// task 4
// Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
// let Farray = [];
// let SArray = [];

// for (let i = 0; i < countries.length; i++) {

//     if ((countries.length % 2) === 0 && i <= Math.floor(countries.length / 2)) {

//         Farray.push(countries[i])
//     } else if ((countries.length % 2) === 1 && i <= Math.floor(countries.length / 2)) {
//         Farray.push(countries[i])

//     }

//     if ((countries.length % 2) === 1 && i < Math.floor(countries.length / 2)) {

//         SArray.push(countries[Math.round(countries.length / 2) + i])

//     }
// }

// console.log(Farray);
// console.log(SArray);




