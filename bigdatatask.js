import { countries_data } from "./condata.js"
import { countries } from "./countries.js"

// task 1
// Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))

// const products = [
//     { product: 'banana', price: 3 },
//     { product: 'mango', price: 6 },
//     { product: 'potato', price: ' ' },
//     { product: 'avocado', price: 8 },
//     { product: 'coffee', price: 10 },
//     { product: 'tea', price: '' },
//   ]

//   let total = products.map(v=> v.price).filter(v=>typeof(v)==="number").reduce((s,v)=>s+v)

//   console.log(total);

// task 2
// Find the sum of price of products using only reduce reduce(callback))

// let total = products.reduce((s,v)=>{

// let x = +v.price
// return s += x

// },0)
// console.log(total);

// task 3
// Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).

// let categorizeCountries = countries.filter(v => {


//       return v.includes("ia" ) || v.includes("land") || v.includes("island") || v.includes("stan") // works
//    // return v.includes("ia" || "land" || "stan" || "island") // not works
// //    return v.includes('land', 'ia', 'island','stan') // not works
// })

// console.log(categorizeCountries)

// let arr = []
// for(let con of countries){

//     if(con.includes("ia" )) arr.push(con)
// }
// let co = ["ia", [...arr]]
// console.log(co);

// task 4

// Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.

// let tempa = []
// let tempb =[]

// let arrobj = countries.map((v, i, arr) => {
//     let count = 0
//     countries.forEach(val => {

//         if (val[0].includes(v[0])) count++
//     })

//     if(tempa.includes(v[0])=== false) {
//         tempa.push(v[0])
//         // tempb.push({ [v[0]]: count })
//         return { [v[0]]: count }
//     }

// })
// console.log(tempb);

// for(let x of arrobj){

//     for(let y in arrobj){

//         if(arrobj[y] === undefined) arrobj.splice(y,1)
//     }
// }
// console.log(arrobj);
// console.log(new Set(arrobj));

// let fil = arrobj.filter(v=> v !== undefined)
// console.log(fil);

// task 5
// Declare a getFirstTenCountries function and return an array of ten countries. Use different functional programming to work on the countries.js array

// let getFirstTenCountries = countries.filter((v,i)=> i<10)

// console.log(getFirstTenCountries);

// task 6
// Declare a getLastTenCountries function which which returns the last ten countries in the countries array.

// let getLastTenCountries = countries.filter((v, i) => i > countries.length - 11)

// console.log(getLastTenCountries);

// task 7
// Find out which letter is used many times as initial for a country name from the countries array (eg. Finland, Fiji, France etc)


// let filcon = countries.filter(v => {

//     let cn = 0
//     countries.forEach(val => {

//         if (val[0].includes(v[0])) cn++
//     })

// if(cn>15) return v
// })
// console.log(filcon);

// task 8

// Use the countries information, in the data folder. Sort countries by name, by capital, by population

// by capital

// let arr = []
// for (let i = 0; i < countries_data.length; i++) {

//     for (let j = i; j < countries_data.length; j++) {

//         if (countries_data[i].capital !== undefined && countries_data[j].capital !== undefined) {

//             if (countries_data[i].capital.charCodeAt(0) > countries_data[j].capital.charCodeAt(0)) {

//                 let temp = countries_data[i]
//                 countries_data[i] = countries_data[j]
//                 countries_data[j] = temp

//             }
//         }
//     }
//     arr.push(countries_data[i].capital)
// }

// console.log(arr);

// by population

// let arr = []
// for (let i = 0; i < countries_data.length; i++) {

//     for (let j = i; j < countries_data.length; j++) {

//         if (countries_data[i].population !== undefined && countries_data[j].population !== undefined) {

//             if (countries_data[i].population > countries_data[j].population) {

//                 let temp = countries_data[i]
//                 countries_data[i] = countries_data[j]
//                 countries_data[j] = temp

//             }
//         }
//     }
//     arr.push(countries_data[i].population)
// }

// console.log(arr);

// let arr = [5,2,8,6,9,3,7,4,1,10]
// let arr1 = ["c", 'x','e','m','a','d','b','i']

// let x = arr.sort((a,b)=>b-a)
// let x1 = arr1.sort()

// console.log(x1);

// task 9
// Find the n most spoken languages: like below

// console.log(mostSpokenLanguages(countries, n))
// [
//     {country: 'English',count:91},
//     {country: 'French',count:45},
//     {country: 'Arabic',count:25},
// ]

// let mostSpokenLanguages = (country, num) => {
//     let temp = []
//     let arr = []
//     country.forEach(v => {
//         let count = 0
//         country.forEach(e => {

//             if (e.languages.includes(v.languages[0])) count++

//         });
//         if (temp.includes(v.languages[0]) === false) {
//             temp.push(v.languages[0])
//             arr.push({ "country": v.languages[0], "count": count })
//         }
//     })

//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i; j < arr.length; j++) {
//             if (arr[i].count < arr[j].count) {

//                 let temp = arr[i]
//                 arr[i] = arr[j]
//                 arr[j] = temp
//             }
//         }
//     }
//     return arr.slice(0, num);
// }

// console.log(mostSpokenLanguages(countries_data, 5));

// task 10

// *** Use countries_data.js file create a function which create the ten most populated countries

// let mostPopulatedCountries = (country, num) => {
//     let arr = []
//     country.forEach(v => {

//             arr.push({ "country": v.name, "population": v.population })

//     })
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i; j < arr.length; j++) {
//             if (arr[i].population < arr[j].population) {

//                 let temp = arr[i]
//                 arr[i] = arr[j]
//                 arr[j] = temp
//             }
//         }
//     }
//     return arr.slice(0, num);
// }

// console.log(mostPopulatedCountries(countries_data, 5));

// task 11

//  Try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create an object called statistics and create all the functions which do statistical calculations as method for the statistics object. Check the output below.


// const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

// let statistics = {

//     count() { return ` Count: ${ages.length} ` },
//     sum() { return ages.reduce((s, v) => s + v) },
//     min() { return Math.min(...ages) },
//     max() { return Math.max(...ages) },
//     describe() {
//         return `${this.count()}
//  Sum:  ${this.sum()}
//  Min:  ${this.min()}
//  Max:  ${this.max()}`
//     },
//     // describ:()=>{return this.count()} arrow fn will not access this
// }

// console.log(statistics.describe());

// task 12

// How many languages are there in the countries object file. use Set

// let myset = new Set()

// for (let i = 0; i < countries_data.length; i++) {

//     let x = countries_data[i].languages
//     if (x.length > 0) x.forEach(v => myset.add(v))

// }
// console.log(myset);
// console.log(myset.size);


// task 13

// Use the countries data to find the 10 most spoken languages:


// let mostSpokenLanguages = (country, num) => {
//     let temp = []
//     let arr = []
//     country.forEach(v => {
//         let count = 0
//         country.forEach(e => {

//             if (e.languages.includes(v.languages[0])) count++

//         });
//         if (temp.includes(v.languages[0]) === false) {
//             temp.push(v.languages[0])
//             arr.push({ [v.languages[0]]: count })
//         }
//     })

//     let tem = []
//     for (let val of arr) {

//         let x = Object.values(val)
//         for (let key of x)
//             tem.push(key)
//     }

//     for (let i = 0; i < tem.length; i++) {
//         for (let j = i; j < tem.length; j++) {

//             if (tem[i] < tem[j]) {

//                 let temt = tem[i]
//                 tem[i] = tem[j]
//                 tem[j] = temt

//                 let temv = arr[i]
//                 arr[i] = arr[j]
//                 arr[j] = temv
//             }
//         }
//     }
//     return arr.slice(0, num);
// }
// console.log(mostSpokenLanguages(countries_data, 5));

// Destructure the countries object print name, capital, population and languages of all countries

// for(let {name,capital,population,languages} of countries_data){


//     console.log(name,capital,population,languages);
    
// }

// for(let {name:n,capital:c,population:p,languages:l} of countries_data){


//     console.log(n,c,p,l);
    
// }

































