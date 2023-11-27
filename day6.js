// task 1
// Iterate 0 to 10 using for loop, do the same using while and do while loop
// ************ using For loop ******
// for(let i = 0; i<=10; i++){
//     console.log(i);

// }
// ********** using while loop ***********
// let i = 0;

// while(i<=10){

//     console.log(i);

//     i++
// }

// ************ using do while loop

// let i =0;

// do {
//     console.log(i);
//     i++
// } while (i<= 10)

// task 2
// Iterate 10 to 0 using for loop, do the same using while and do while loop

// ************ using For loop ******
// for(let i = 10; i>=0; i--){
//     console.log(i);

// }
// ********** using while loop ***********
// let i = 10;

// while(i>=0){

//     console.log(" while loop",i);

//     i--
// }

// ************ using do while loop

// let i =10;

// do {
//     console.log(i);
//     i--
// } while (i>= 0)

// task 3

// Iterate 0 to n using for loop

// let n = 5;

// for(let i =0; i<=n;i++){

//     console.log(i);

// }


// task 4
// Use loop to print the following pattern:
// 0 x 0 = 0
// 1 x 1 = 1
// 2 x 2 = 4

// for(let i =0; i<= 10; i++){

//     console.log(i + " x " + i  + " = " + i*i);

// }
// task 5
// console.log(`i     i^2       i^3  `);
// for(let i =0; i<= 10; i++){

//     console.log(`${i}     ${i*i}        ${i*i*i}  `);

// }

// task 6
// Write a loop that makes the following pattern using console.log():
// #
// ##
// ###
// ####
// #####
// ######
// #######
// incrising
// let str = ""

// for(let i = 0; i<5; i++){
// str += "#";
// console.log(str);


// }

// task 7
// Use for loop to iterate from 0 to 100 and print only even numbers
// first
// for(let i=0; i<= 100; i+=2){

//     console.log(i);

// }

// second

// for(let i=0; i<= 100; i++){

//     if(i%2 === 0){

//         console.log(i);

//     }

// }

// task 8
// Use for loop to iterate from 0 to 100 and print only odd numbers

// first
// for(let i=1; i<= 100; i+=2){

//     console.log(i);

// }

// second

// for(let i=0; i<= 100; i++){

//     if(i%2 === 1){

//         console.log(i);

//     }

// }

// task 9
// Use for loop to iterate from 0 to 100 and print only prime numbers

// for (let i = 0; i <= 100; i++) {
//    if(i%1 === 0 && i%i === 0 && i%2 === 1 && i%3 === 1 && i%4 ===1)

//    console.log(i);

// }

// console.log(5%2);

// task 10
// Use for loop to iterate from 0 to 100 and print the sum of all numbers.

// let sum = 0;

// for(let i =0; i<=10; i++){

//     sum += i
// }
// console.log(sum);

// task 11
// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
// let odd = 0;
// let even = 0;

// for(let i = 0; i<=100; i++){

//     if(i%2 ===0){
// even += i
//     }else{
//         odd += i
//     }
// }
// let sumOfeno =[even, odd]
// console.log(odd);
// console.log(even);
// console.log(sumOfeno);

// task 12
// Develop a small script which generate array of 5 random numbers

// let random = "";
// for(let i =0; i<5; i++){
// random += Math.floor(Math.random() *11 )

// }

// console.log(random);

// task 13
// Develop a small script which generate array of 5 random numbers and the numbers must be unique

// let arr = [];

// for (let i = 0; arr.length < 5; i++) {
//     let num = Math.floor(Math.random() * 11);

//     if(arr.indexOf(num) === -1) arr.push(num);
// }

// console.log(arr);

// task 14
// Develop a small script which generate a six characters random id:5j2khz

// let ranchar = "";
// let word = "abcdefghijklmnopqrstwxyz"
// while (ranchar.length < 6) {
//     let i = Math.floor(Math.random() * 25)
//     let j = Math.floor(Math.random() * 10)
//     let c = word.slice(i, i + 1)
//     if (ranchar.length === 0 || ranchar.length === 2) {
//         ranchar += j
//     } else {
//         ranchar += c
//     }


// }
// console.log(ranchar);

// task 15
// Develop a small script which generate any number of characters random id:

// let ranchar = "";
// let word = "abcdefghijklmnopqrstwxyz"
// let i = Math.floor(Math.random() * 25)
// while (ranchar.length < i+4) {
//     let j = Math.floor(Math.random() * 25)
//     let c = word.slice(j, j + 1)
//     if (ranchar.length === 5) {
//         ranchar += j
//     } else {
//         ranchar += c
//     }
// }
// console.log(ranchar);

// task 16
// Write a script which generates a random hexadecimal number. => '#ee33df'


// let ranchar = "#";
// let word = "abcdef"
// let i = Math.floor(Math.random() * 6)
// while (ranchar.length < 7) {
//     let j = Math.floor(Math.random() * 10)
//     let c = word.slice(i, i + 1)
//     if (ranchar.length < 3) {
//         ranchar += c
//     } else if (ranchar.length >= 3 && ranchar.length < 5) {
//         ranchar += j
//     }else{

//         ranchar += (c || j)
//     }
// }

// let hexcol = `'${ranchar}'`
// console.log(hexcol);


// task 17
// Write a script which generates a random rgb color number. =>rgb(240,180,80)

// let v1 = Math.floor(Math.random() * 240);
// let v2 = Math.floor(Math.random() * 180);
// let v3 = Math.floor(Math.random() * 80);

// // let rgbnum = `rgb(${v1},${v2},${v3})`

// let a ="rgb("
// let b = ","
// let c =")"
// let d = a+ v1+b+v2+b+v3+c

// console.log(d);

// task 18
// Using the  countries array, create the following new array.
// ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]

// const countries = [
//     'Albania',
//     'Bolivia',
//     'Canada',
//     'Denmark',
//     'Ethiopia',
//     'Finland',
//     'Germany',
//     'Hungary',
//     'Ireland',
//     'Japan',
//     'Kenya'
// ]

//   let newArr = []
// for(let value of countries){

// let uppar = value.toUpperCase();
// newArr.push(uppar)

// }
// console.log(newArr);

// task 19
// Using the above countries array, create an array for countries length'.

// first way
// let conl = []
// for(let value of countries){
// let l = value.length
// conl.push(l)

// }
// second way

// for(let i =0; i<countries.length; i++){

//     let l = countries[i].length;
//     conl.push(l)
// }
// console.log("for loop:",conl);

// task 20
// Use the countries array to create the following array of arrays:

// let conArr = [];

// for(let i =0;i< countries.length; i++){
// let subArr = [];
//     let l = countries[i].length;
//     let Subcon = countries[i].slice(0, 3).toUpperCase();
//     let con = countries[i];
//     subArr.push(con,Subcon,l)
//     conArr.push(subArr)

// }

// console.log(conArr);

// task 21
// In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.
// first methood
// let land = countries.filter(v => v.includes("land"));
// second methood

// let filLand = [];

// for (let i = 0; i < countries.length; i++) {

//     if (countries[i].includes("land")) {
//         filLand.push(countries[i])
//     }

// }
// if (filLand[0].includes("lnd")) {

//     console.log(filLand);
// }else{
//     console.log("All these countries are without land");

// }

// task 22
// In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.
// first methood
// let filLand = [];

// for (let i = 0; i < countries.length; i++) {

//     if (countries[i].includes("ia")) {
//         filLand.push(countries[i])
//     }

// }
// if (filLand.length > 0) {

//     console.log(filLand);
// }else{
//     console.log("These are countries ends without ia");

// }

// second methood
// let ia = countries.filter(v=>v.includes("ia"))

// console.log(ia);

// task 23
// Using the above countries array, find the country containing the biggest number of characters.
// let arrlen = []
// for(let i = 0;i<countries.length; i++){
// let l = countries[i].length
// arrlen.push(l)
// }

// using first methood
// let max = Math.max(...arrlen)

// let inde =0;
// for(let i =0;i<arrlen.length; i++){

//     if(max === arrlen[i]) inde = i;


// }

// console.log(countries[inde]);
// using second trick
// let biggest = countries.filter(v => v.length=== max)

// console.log(biggest.join())

// task 24
// Using the above countries array, find the country containing only 5 characters.

// let fivecharCon = [];

// for(let i = 0; i<countries.length; i++){

//     if(countries[i].length === 5) fivecharCon.push(countries[i])
// }

// console.log(fivecharCon);

// task 25
// Find the longest word in the webTechs array

// const webTechs = ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node', 'MongoDB'];

// let temp = []
// for(let value of webTechs){

//     let l = value.length;
//     temp.push(l)
// }

// let max = Math.max(...temp)
// // using filter
// let longestword = webTechs.filter(v=>v.length === max)

// console.log(longestword);

// without filter
// first
// let index1 = 0;
// for(let i=0;i< webTechs.length; i++){

//     if(webTechs[i].length === max) index = i;
// }

// second..
// let index2 =0;
// for(let index in webTechs){

//     if(webTechs[index].length === max) index2 = index
// }

//   console.log(webTechs[index2]);

// task 26
// Use the webTechs array to create the following array of arrays:
// let showArr = [];
// for(let value of webTechs){
// let subarr = []
// let l = value.length
// subarr.push(value,l)
// showArr.push(subarr)
// }
// console.log(showArr);

// task 27
// An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack

// const mernStack = ['MongoDB', 'Express', 'React', 'Node'];

// let i = setTimeout(a=> console.log(a), 5000,mernStack);

// clearTimeout(i);

// let mern = [];
// for(let value of mernStack){

// let acr = value.slice(0,2).toUpperCase()
// mern.push(acr)

// }

// console.log(mern);

// task 28
// Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.

// let arr = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]

// for(let value of arr){

//     console.log(value);

// }

// for(let i = 0; i< arr.length; i++){

//     console.log(arr[i]);

// }

// task 29
// This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.

// let fruit =  ['banana', 'orange', 'mango', 'lemon']
// let revarr =[]
// for(let i = fruit.length -1; i>= 0; i--){

//  let rev = fruit.pop()

//  revarr.push(rev)

// }
// console.log(revarr);

// let fruit = ['banana', 'orange', 'mango', 'lemon',]

// for (let i = 0; i < fruit.length/2; i++) {

//     if (i === 0) {
//         let temp = fruit[i];
//         fruit[i] = fruit[fruit.length - 1]
//         fruit[fruit.length - 1] = temp
//     } else if (i > 0) {
//         let temp = fruit[i];
//         fruit[i] = fruit[fruit.length - i-1]
//         fruit[fruit.length - i-1] = temp


//     }
// }
// console.log(fruit);

// task 30
// Print all the elements of array as shown below.

// const fullStack = [
//     ['HTML', 'CSS', 'JS', 'React'],
//     ['Node', 'Express', 'MongoDB']
// ]
// using default trick
// console.log(fullStack.join().replace(/[^ A-Z a-z]/gi , " "));
// First Trick
// let arr = ""
// for (let value of fullStack){

// for(let value1 of value){

// arr += value1 + " "
// }

// }

// Second trick
// let arr = "";
// for (let i = 0; i < fullStack.length; i++) {
//     for (let j = 0; j < fullStack[i].length; j++) {

//         arr += fullStack[i][j] + " "
//     }



// }
// console.log(arr);

// task 31
// Copy countries array(Avoid mutation)
// const countries = ['Albania','Bolivia','Canada','Denmark','Ethiopia','Finland','Germany','Hungary','Ireland','Japan','Kenya']

// using predifined method
// let copy = countries.slice(0,countries.length)

// using loop
// let copyArr = [];

// for(let con of countries){
//     copyArr.push(con)

// }
// console.log("loop ",copyArr);

// task 32
// Sort the webTechs array and mernStack array
// Reverse the countries array and capitalize each country and stored it as an array

// const countries = ['Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany', 'Hungary', 'Ireland', 'Japan', 'Kenya']

// const webTechs = ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node', 'MongoDB'];
// const mernStack = ['MongoDB', 'Express', 'React', 'Node'];

// using predifined methood
// let shortweb = webTechs.sort()
// let mernsort = mernStack.sort()

// using loop
// we can't perform sorting though builtin "for..of " loop because it's not mutatate the array value, so either use traditional loop or "for..in" loop for sorting


// for (let web of webTechs) {
//     for (let i = 0; i < webTechs.length; i++) {
//         let temp = 0;
//         if (web.charCodeAt(0) < webTechs[i].charCodeAt(0)) {

//             temp = web
//             web = webTechs[i]
//             webTechs[i] = temp
//         }


//     }

// }
// console.log("for of", webTechs); does not works



// for (let web in webTechs) {
//     for (let i = 0; i < webTechs.length; i++) {
//         let temp = 0;
//         if (webTechs[web].charCodeAt(0) < webTechs[i].charCodeAt(0)) {

//             temp = webTechs[web]
//             webTechs[web] = webTechs[i]
//             webTechs[i] = temp
//         }


//     }

// }
// console.log("for of", webTechs); // it's works now in for in loop


// for (let i = 0; i < webTechs.length; i++) {
//     for (let j = 0; j < webTechs.length; j++) {
//         let temp = 0;
//         if (webTechs[i].charCodeAt(0) < webTechs[j].charCodeAt(0)) {

//             temp = webTechs[i]
//             webTechs[i] = webTechs[j]
//             webTechs[j] = temp
//         }

//     }

// }

// console.log(webTechs);

// .............task countnue

// const mernStack = ['MongoDB', 'Express', 'React', 'Node'];
// Sort the mernStack array

// using two loops

// for (let i = 0; i < mernStack.length; i++) {
//     for (let j = 0; j < mernStack.length; j++) {

//         if (mernStack[i].charCodeAt(0) < mernStack[j].charCodeAt(0)) { // if i is less from any other value of array then swap that higher val with i

//             let temp = mernStack[i]
//             mernStack[i] = mernStack[j]
//             mernStack[j] = temp
//         }


//     }

// }
// console.log(mernStack);

// using single loop but it's only works on small array and less complex sorting

// for (let i = 0; i < mernStack.length -1; i++) {

//     if (mernStack[i].charCodeAt(0) > mernStack[i + 1].charCodeAt(0)) {

//         let temp = mernStack[i];
//         mernStack[i] = mernStack[i + 1];
//         mernStack[i + 1] = temp;
//     }


// }
// console.log(mernStack);


// .............. task countinue
// Reverse the countries array and capitalize each country and stored it as an array

// const countries = ['Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany', 'Hungary', 'Ireland', 'Japan', 'Kenya']




// // reverse
// for (let i = 0; i < countries.length / 2; i++) {

//     if (i === 0) {
//         let temp = countries[i]
//         countries[i] = countries[countries.length - 1]
//         countries[countries.length - 1] = temp;
//     } else if (i > 0) {
//         let temp = countries[i]
//         countries[i] = countries[countries.length - 1 - i]
//         countries[countries.length - 1 - i] = temp;

//     }
// }

// captalize
// let caparr = []
// for (let i = 0; i < countries.length; i++) {

//     let cap = countries[i].toUpperCase()
//     caparr.push(cap)
// }

// console.log("caparr",caparr);
// console.log(countries);

// let captalize a perticular index
// first methood
// String.prototype.replaceAt=function(index, char) {
//     var a = this.split("");
//     a[index] = char;
//     return a.join("");
// }

// second methood
// function replaceAt(str, index, ch) {
//     return str.replace(/./g, (c, i) => i == index ? ch : c);
// }

// let arr = []
// for (let i = 0; i < countries.length; i++) {

//     let str = countries[i];
//     let str1 = replaceAt(str, 3, str[3].toUpperCase())

//     arr.push(str1)

// }
// console.log(arr);


// let modify countries array itself with upparcase element


// for (let i = 0; i < countries.length; i++) {

//     let cap = countries[i].toUpperCase()
//     countries.splice(i,1,cap)
// }

// console.log(countries);

// let captilize a pirticular index of countries Array.

// for (let i = 0; i < countries.length; i++) {

//     let str = countries[i];
//     let str1 = replaceAt(str, 3, str[3].toUpperCase())
//     countries.splice(i, 1, str1)
// }

// console.log(countries);


// skipped task countinue...
// Use for loop to iterate from 0 to 100 and print only prime numbers

// pending Task
// first
// for (let i = 0; i <= 100; i++) {
//     let flag = true
//     for (let j = 2; j < i; j++) {

//         if (i % j == 0) {
//             flag = false;
//             break;

//         }
//     }

//     if (flag && i > 1) console.log(i);
// }
// second

// let prime = n => {

//     if (n == 1 || n == 0) return false;
//     for (let i = 2; i < n; i++) {

//         if (n % i === 0) return false;

//     }
//     return true;
// }
// let Num = 100;

// for (let i = 2; i <= Num; i++) {

//     if (prime(i)) console.log(i);

// }

