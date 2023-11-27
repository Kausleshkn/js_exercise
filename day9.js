// task 1
// Define a callback function before you use it in forEach, map, filter or reduce.
// let myFunc = (val, ind, arr) => {

//     // console.log(val.toUpperCase());
//    return val.toUpperCase();

// }
// task 2
// Use forEach to console.log each country in the countries array.
// const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']

// countries.forEach(v=>console.log(v));
// countries.forEach(myFunc)

// task 3
// Use forEach to console.log each name in the names array.
// const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']

// names.forEach(v=>console.log(v));
// names.forEach(myFunc)

// task 4
// Use forEach to console.log each number in the numbers array.
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// numbers.forEach(v => console.log(v));
// numbers.forEach(myFunc)

// task 5
// Use map to create a new array by changing each country to uppercase in the countries array.
// const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']

// let nearr = countries.map(v=>v.toUpperCase())
// let nearr = countries.map(myFunc)
// console.log(nearr);

// task 6
// Use map to create an array of countries length from countries array.

// let conlen = countries.map(v=>v.length)

// console.log(conlen);

// task 7
// Use map to create a new array by changing each number to square in the numbers array

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let sqnum = numbers.map(v=>v*v)
// console.log(sqnum);

// task 8
// Use map to change to each name to uppercase in the names array

// const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']

// first trick
// let Upparname = names.map(v=>v.toUpperCase())
// console.log(Upparname);

// let callbackfun = (v,i,a)=> v.toUpperCase()
// let Upparname = names.map(callbackfun)
// console.log(Upparname);


// let callbackfun = (v,i,a)=> console.log(v.toUpperCase());
//  names.map(callbackfun)

// task 9
// Use map to map the products array to its corresponding prices.
// const products = [
//     { product: 'banana', price: 3 },
//     { product: 'mango', price: 6 },
//     { product: 'potato', price: ' ' },
//     { product: 'avocado', price: 8 },
//     { product: 'coffee', price: 10 },
//     { product: 'tea', price: '' },
//   ]


// let prices = products.map(v=>v.product + ":" + v.price)
// let prices = products.map(v=>{
//      return [v.product,v.price];
// })

// task 10
// Use filter to filter out countries containing land.

// const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']

// let filcon = countries.filter(x=> x.includes("land"))
// console.log(filcon);

// task 11
// Use filter to filter out countries having six character.

// let filcon = countries.filter(x=> x.length === 6)

// console.log(filcon);

// task 12
// Use filter to filter out countries containing six letters and more in the country array.

// let filcon = countries.filter(x=> x.length >= 6)

// console.log(filcon);

// task 13
// Use filter to filter out country start with 'E';

// let filcon = countries.filter(x=> x[0] === "E")

// console.log(filcon);

// task 14
// Use filter to filter out only prices with values.
// const products = [
//     { product: 'banana', price: 3 },
//     { product: 'mango', price: 6 },
//     { product: 'potato', price: ' ' },
//     { product: 'avocado', price: 8 },
//     { product: 'coffee', price: 10 },
//     { product: 'tea', price: '' },
//   ]

//   let filprice = products.filter(v=> typeof(v.price) === "number")
//   console.log(filprice);

// task 15
// Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.

// let getStringLists =(arr)=>{

//     let strarray = arr.filter(v=> typeof(v) === "string")

//     return strarray;
// }

// console.log(getStringLists(["h",4,5,"e",8,"i",6,"o"]));

// task  16
// Use reduce to sum all the numbers in the numbers array.

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let sum = numbers.reduce((add,val)=> add+val)

// console.log(sum);

// task 17
// Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries

// const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']

// let con = countries.reduce((sumup, val, ind) => {

//     if (ind < countries.length - 1) sumup += "," + val
//     if (ind === countries.length - 1) sumup += ", and " + countries[countries.length - 1] + " are north European countries"

//     return sumup
// }, "Estonia")

// console.log(con);

// task 18
// Use some to check if some names' length greater than seven in names array
// const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']

// let check = names.some((v)=>v.length>8)

// console.log(check);

// task 19
// Use every to check if all the countries contain the word land

// const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']

// let check = countries.every(v=>v.includes("land"))

// console.log(check);

// task 20
// Use find to find the first country containing only six letters in the countries array

// let check = countries.find(v=>v.length ===6)

// console.log(check);

// task 21
// Use findIndex to find the position of the first country containing only six letters in the countries array

// let check = countries.findIndex(v=>v.length ===6)

// console.log(check);

// task 22
// Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.

// let check = countries.findIndex(v=>v ==="Norway")
// console.log(check);

// task 23
// Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.

// let check = countries.findIndex(v=>v ==="Russia")
// console.log(check);

// task 24
// Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))

// const products = [
//     { product: 'banana', price: 3 },
//     { product: 'mango', price: 6 },
//     { product: 'potato', price: ' ' },
//     { product: 'avocado', price: 8 },
//     { product: 'coffee', price: 10 },
//     { product: 'tea', price: '' },
// ]

// let sumpric = products.filter(v => typeof (v.price) === "number").map(v => v.price).reduce((sum, v) => sum + v)
// console.log(sumpric);

// task 25
// Find the sum of price of products using only reduce reduce(callback))
// let sumpric = products.reduce((sum,v)=> {

// if(typeof(v.price) ==="number") sum += v.price

// return sum
// } ,0)
// console.log(sumpric);

// task 26
// Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).

// const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand', "ethopia"]

// let categorizeCountries = countries.filter(v=>v.includes("ia"))
// let categorizeCountries = countries.find(v=>v.includes("ia"))

// console.log(categorizeCountries);

// task 27
// Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.

// const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand', "Ethopia", "Nd", "Delhi"]

// let crobj = countries.map(v => {
//     let cn = 0;
//     countries.map(val => {

//         if (val.includes(v[0])) cn++


//     })

//     return ({ [v[0]]: cn })
// })
// console.log(crobj);

// let temp = []
// crobj.forEach(v => {

//     for (let key in v) {

//         temp.push(key)
//     }
// })

// for (let i = 0; i < temp.length; i++) {
//     for (let j = i + 1; j < temp.length; j++) {

//         if (temp[i] === temp[j]) crobj.splice(j, 1)

//     }
// }

// console.log(crobj);

// task 28
// Declare a getFirstTenCountries function and return an array of ten countries. Use different functional programming to work on the countries.js array

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

// let getFirstTenCountries = countries.filter((v, i) => i < 10)
// console.log(getFirstTenCountries);

// using second methood
// let arr =[]
// for (let i=0; i<countries.length;i++){

// if(i<10) arr.push(countries[i])

// }

// console.log(arr);

// task 29
// Declare a getLastTenCountries function which which returns the last ten countries in the countries array.

// let getLastTenCountries = countries.filter((v,i,arr)=> i>arr.length - 11)
// console.log(getLastTenCountries);

// using second methood

// let arr = []

// for (let i = 0; i < countries.length; i++) {


//     if (i > countries.length - 11) arr.push(countries[i])
// }

// console.log(arr);










