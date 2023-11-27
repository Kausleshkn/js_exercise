// task 1
// Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.

// let firstName = "kauslesh";
// let lastName = "Mishra";
// let country = "abc";
// let city = "xyz";
// let age = 28;
// let isMarried = false;
// let year = 2023;

// console.log(typeof(firstName));
// console.log(typeof(lastName));
// console.log(typeof(country));
// console.log(typeof(city));
// console.log(typeof(age));
// console.log(typeof(isMarried));
// console.log(typeof(year));

// task 2
// Check if type of '10' is equal to 10
// Check if parseInt('9.8') is equal to 10

// console.log(typeof("10") === typeof(10));
// console.log(typeof(parseInt('9.8')) === typeof(10));
// console.log(typeof(parseInt('9.8')) === 10);
// console.log(typeof("10") === 10);

// task 3

// Boolean value is either true or false.

// Write three JavaScript statement which provide truthy value.
// Write three JavaScript statement which provide falsy value.

// let a = true; let b = true; let c = true;
// let d = false; let e = false; let f = false;

// task 4

// figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

// 4 > 3 
// 4 >= 3 
// 4 < 3
// 4 <= 3
// 4 == 4
// 4 === 4
// 4 != 4 
// 4 !== 4 
// 4 != '4' 
// 4 == '4' 
// 4 === '4'
// Find the length of python and jargon and make a falsy comparison statement.

// let p = "python";
// let j = "jargon";

// console.log(p.length !== j.length);

// task 5

// Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

// 4 > 3 && 10 < 12 = true
// 4 > 3 && 10 > 12 = false
// 4 > 3 || 10 < 12 = true
// 4 > 3 || 10 > 12 = true
// !(4 > 3) = false
// !(4 < 3) = true
// !(false) = true
// !(4 > 3 && 10 < 12) = false
// !(4 > 3 && 10 > 12) = true
// !(4 === '4') = true
// There is no 'on' in both dragon and python
// let d = "dragon";
// let p = "python"
// console.log(!(d.includes("on") && p.includes("on")));

// task 6

// Use the Date object to do the following activities

// What is the year today?
// What is the month today as a number?
// What is the date today?
// What is the day today as a number?
// What is the hours now?
// What is the minutes now?
// Find out the numbers of seconds elapsed from January 1, 1970 to now.

// const now = new Date()
// console.log(now.getFullYear())
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getDay());
// console.log(now.getHours());
// console.log(now.getMinutes());
// console.log(now.getTime());
// let a = now.getTime()
// console.log(a/1000);


// task 7

// Compare your first name length and your family name length and you should get this output.
// Your first name, Asabeneh is longer than your family name, Yetayeh

// let firstName = 'kauslesh'
// let lastName = 'mishra'

// let msg1 = `Your first name, ${firstName} is longer than your last name, ${lastName}`
// let msg2 = `Your first name, ${firstName} is shorter than your last name, ${lastName}`

// let res = (firstName.length === lastName.length)? msg2: msg1;

// console.log(res)

// task 8
// Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.

// let myAge = 28;
// let yourAge = 25;

// let msg1 = `I am ${myAge - yourAge} years older than you.`;
// let msg2 = `I am ${yourAge - myAge} years lesser than you.`;

// let res = myAge > yourAge ? msg1: msg2;

// console.log(res);


