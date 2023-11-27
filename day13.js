// import { countries } from './countries.js';
// import { countries_data } from './condata.js';

// task 1
// Display the countries array as a table

// console.table(countries)

// task 2
// Display the countries object as a table
// console.table(countries_data)

// task 3
// Use console.group() to group logs

// console.group('countries_data')
// console.log(countries_data)
// console.groupEnd()

// console.group('you can use any name here')
// console.log(countries)
// console.groupEnd()

// task 4
// 10 > 2 * 10 use console.assert()

// console.assert(10 > 2 * 10, "it's wrong")

// task 5
// Write a warning message using console.warn()
// Write an error message using console.error()

// console.warn("hey! wake up")
// console.error("you make this error!")

// task 6
// Check the speed difference among the following loops: while, for, for of, forEach

// const countries = [
//     ['Finland', 'Helsinki'],
//     ['Sweden', 'Stockholm'],
//     ['Norway', 'Oslo']
// ]

// console.time("while loop")
// let i = 0
// while (i < countries.length) {
// console.log(countries[i][0],countries[i][1]);
// i++
// }
// console.timeEnd('while loop')

// console.time('Regular for loop')
// for (let i = 0; i < countries.length; i++) {
//     console.log(countries[i][0], countries[i][1])
// }
// console.timeEnd('Regular for loop')

// console.time('for of loop')
// for (const [name, city] of countries) {
//     console.log(name, city)
// }
// console.timeEnd('for of loop')

// console.time('forEach loop')
// countries.forEach(([name, city]) => {
//     console.log(name, city)
// })
// console.timeEnd('forEach loop')

