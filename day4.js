// task 1
// If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in two ways
// using if else
// ternary operator.

// let a = 4;
// let b = 3;

// if(a>b){
//     console.log(`${a} is greater than ${b}`);

// }else{
//     console.log(`${a} is less than ${b}`);

// }

// (a>b )? console.log(`${a} isssss greater than ${b}`): console.log(`${a} is less than ${b}`);


// task 2

// Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

// let num = 8;

// (num%2 ===0) ? console.log(`${num} is an even number`): console.log(`${num} is an odd number`)

// task 3
// Write a code which can give grades to students according to theirs scores:
// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F
// let score = 58;
// using if 
// if(score>= 80 && score <= 100 ) console.log("A");
// if(score>= 70 && score <= 79 ) console.log("B");
// if(score>= 60 && score <= 69 ) console.log("C");
// if(score>= 50 && score <= 59 ) console.log("D");
// if(score>= 0 && score <= 49 ) console.log("F");

// using swith
// let score = 75;
// switch (true) {
//     case(score>= 80 && score <= 100): console.log("A");

//         break;
//     case(score>= 70 && score <= 79): console.log("B");

//         break;
//     case(score>= 60 && score <= 69): console.log("C");

//         break;
//     case(score>= 50 && score <= 59): console.log("D");

//         break;
//     case(score>= 0 && score <= 49) : console.log("F");

//         break;
//     default: console.log("Enter valid value");


// }

// task 4
// Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer
// let userInput = "February"
// using if statement
// if (userInput === "September" || userInput === "October" || userInput === "November") console.log("Autumn");
// if (userInput === "December" || userInput === "January" || userInput === "February") console.log("Winter");
// if (userInput === "March" || userInput === "April" || userInput === "May") console.log("Spring");
// if (userInput === "June" || userInput === "July" || userInput === "August") console.log("Summer");

// using swich
// switch (true) {
//     case (userInput === "September" || userInput === "October" || userInput === "November"):
//         console.log("Autumn");
//         break;
//     case (userInput === "December" || userInput === "January" || userInput === "February"):
//         console.log("Winter");
//         break;
//     case (userInput === "March" || userInput === "April" || userInput === "May"):
//         console.log("Spring");
//         break;
//     case (userInput === "June" || userInput === "July" || userInput === "August"):
//         console.log("Summer");
//         break;

//     default: console.log("Not a month");

//         break;
// }

// task 5
// Check if a day is weekend day or a working day. Your script will take day as an input.

// let day = "saturDaY"

// switch (day) {
//     case "Saturday": console.log("Saturday is a weekend.");

//         break;
//     case "saturDaY": console.log("Saturday is a weekend.");

//         break;
//     case "Friday": console.log("Friday is a working day.");

//         break;
//     case "FrIDAy": console.log("Friday is a working day.");

//         break;

//     default: console.log("not a valid day");

//         break;
// }

// task 6
// Write a program which tells the number of days in a month.
// Write a program which tells the number of days in a month, now consider leap year.


// let month = "February"
// let year = 2019

// if (month === "January" || month === "JANUARY") console.log("January has 31 days.");
// if ((month === "February" && Number.isInteger(year / 4) === false) ||
//     (month === "FEbruary" && Number.isInteger(year / 4) === false)) {
//     console.log("Feb has 28 days")
// };
// if ((month === "February" && Number.isInteger(year / 4)) ||
//     (month === "FEbruary" && Number.isInteger(year / 4))) {
//     console.log("Feb has 29 days due to leap year")
// }


// console.log(Number.isInteger(2013 / 4));

