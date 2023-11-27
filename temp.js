// let score = 85;
// let a = (score>= 80 && score <= 100)
// let b = (score>= 70 && score <= 79)
// let c = (score>= 60 && score <= 69)
// let d = (score>= 50 && score <= 59)
// let f = (score>= 0 && score <= 49)


// switch (true) {
//     case a: console.log("A");

//         break;
//     case b: console.log("B");

//         break;
//     case c: console.log("C");

//         break;
//     case d: console.log("D");

//         break;
//     case f: console.log("F");

//         break;
//     default: console.log("Enter valid value");


// }


// ************************************

// let userInput = "February"

// let a = (userInput === "September" || userInput === "October" || userInput === "November")
// let b = (userInput === "December" || userInput === "January" || userInput === "February")
// let c = (userInput === "March" || userInput === "April" || userInput === "May")
// let d = (userInput === "June" || userInput === "July" || userInput === "August")

// switch (true) {
//     case a :
//         console.log("Autumn");
//         break;
//     case b:
//         console.log("Winter");
//         break;
//     case c:
//         console.log("Spring");
//         break;
//     case d:
//         console.log("Summer");
//         break;

//     default: console.log("Not a month");

//         break;
// }


// **********************************************

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

// ******************************** rough work
// let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'


// console.log(text.indexOf("."));
// console.log(text.indexOf(","));
// console.log(text.length);

// let rem1 = text.substring(37,51);
// let rem2 = text.substr(37,51);
// let rem3 = text.slice(37,51);

// console.log(rem1);
// console.log(rem2);
// console.log(rem3);
// console.log(text);


// here shorting pattern is we replaced our i  with highest value till end and during this process other smaller value autometicallly pushing left side 
// let j = [5, 2, 6, 8, 3, 9, 1, 4, 10]

// for (let i = 0; i < j.length; i++) {
//     for (let k = 0; k < j.length; k++) {
//         let temp = 0;

//         if (j[i] < j[k]) {
//             temp = j[k]
//             j[k] = j[i]
//             j[i] = temp
//         }
//     }
// }
// console.log(j);

// we can't perform sorting though builtin "for..of " loop because it's not mutatate the array value

// let arr = [1, 5, 4, 6]

// for (let v of arr) {

//     console.log(v)
//     v = 2
//     console.log(v);


// }

// sorting though single loop

// let mernStack =[5,7,2,8,9,1,3,6,4,25,15,4,45,20,3,10]
// let mernStack =[5,7,2,8,9,1,3,]

// for (let i = 0; i < mernStack.length -1; i++) {

//     if (mernStack[i] > mernStack[i + 1]) {

//         let temp = mernStack[i];
//         mernStack[i] = mernStack[i + 1];
//         mernStack[i + 1] = temp;

//         i = -1;
//     }


// }
// console.log(mernStack);




// for (let i = 0; i < mernStack.length; i++) {
//     for (let j = 0; j < mernStack.length; j++) {

//         if (mernStack[i] < mernStack[j]) { // if i is less from any other value of array then swap that higher val with i

//             let temp = mernStack[i]
//             mernStack[i] = mernStack[j]
//             mernStack[j] = temp
//         }


//     }

// }
// console.log(mernStack);

//  string replacer methood **********IMPORTANT ***************
// String.prototype.replaceAt=function(index, char) {
//     var a = this.split("");
//     a[index] = char;
//     return a.join("");
// }

// function replaceAt(str, index, ch) {
//     return str.replace(/./g, (c, i) => i == index ? ch : c);
// }

// let pop push opration in same array

// let arr = [1, 2, 3, 4, 5]

// for (let i = 0; i < arr.length; i++) {

//     let sq = arr[i] * arr[i]
//     arr.splice(i, 1, sq)
// }

// console.log(arr);

// let prime = n => {

//     if (n == 1 || n == 0) return false;
//     for (let i = 2; i < n; i++) {

//         if (n % i === 0) return false;

//     }
//     return true;
// }

// console.log(prime(4));
// console.log(2%2,3%2,4%2);


// let pop push opration in same array without splice

// let arr = [1, 2, 3, 4, 5]

// for (let i = 0; i < arr.length; i++) {

//     let sq = arr[i] * arr[i]
//     // let temp = arr[i]
//     arr[i] = sq
// }

// console.log(arr);


// let captilize a pirticular index of countries Array without splice medhood

// let countries = ['Avocado', 'Tomato', 'Potato','Mango', 'LEMON', 'Carrot']

// for (let i = 0; i < countries.length; i++) {

//     let str = countries[i];
//      let str1 = str.replace(str[3], str[3].toUpperCase())
//     countries[i] =str1
// }

// console.log(countries);


// let score = 24
// let grade;
// score <= 30 && score > 25 ? grade = 'A' :
//     score <= 25 && score > 20 ? grade = 'B' :
//         score <= 20 && score > 15 ? grade = 'C' :
//             score <= 15 && score > 10 ? grade = 'D' :
//                 score <= 10 && score > 5 ? grade = 'E' :
//                     grade = 'F'


// console.log(grade);

// console.log(typeof(15));
// console.log([].length);


// let arr = [
//     { Pashto: 1 }, { Swedish: 3 },
//     { Albanian: 3 }, { Arabic: 25 },
//     { English: 91 }, { Catalan: 1 },
//     { Portuguese: 10 }, { Spanish: 24 },
//     { Armenian: 2 }, { Dutch: 8 },
//     { German: 7 }, { Azerbaijani: 1 },
//     { Bengali: 1 }, { Belarusian: 1 },
//     { French: 45 }
// ]
// let temp = []
// for (let val of arr) {

//     let x = Object.values(val)
//     for (let key of x)
//         temp.push(key)
// }

// for (let i = 0; i < temp.length; i++) {
//     for (let j = i; j < temp.length; j++) {

//         if(temp[i]<temp[j]){

//             let tem = temp[i]
//             temp[i]= temp[j]
//             temp[j]= tem

//             let temv = arr[i]
//             arr[i]= arr[j]
//             arr[j]= temv
//         }
//     }
// }
// console.log(temp);
// console.log(arr);


