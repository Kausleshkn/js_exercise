// task 1
// Declare a function fullName and it print out your full name.
// let fullName = ()=> console.log("My Name");
// fullName()

// task 2
// Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.

// let fullName = (first, last) => first + " " + last;
// console.log(fullName("my", "Name"));

// task 3
// Declare a function addNumbers and it takes two two parameters and it returns sum.

// let addNumbers = (a,b)=> a+b;
// console.log(addNumbers(5,5));

// task 4
// An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.

// let areaOfRectangle = (l,w)=> l*w;
// console.log(areaOfRectangle(5,5));

// task 5
// A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
// let perimeterOfRectangle = (l,w)=>2*(l+w)
// console.log(perimeterOfRectangle(5,5));

// task 6
// A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.

// let volumeOfRectPrism = (l,w,h)=>(l*w*h);
// console.log(volumeOfRectPrism(2,4,6));

// task 7
// Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
// let areaOfCircle = r => {
//     let pi =3.14
// return pi*r*r
// }
// console.log(areaOfCircle(10));

// task 8
// Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
// let circumOfCircle = r => {
//     let pi = 3.14;
//     return 2 * pi * r
// }
// console.log(circumOfCircle(5));

// task 9
// Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
// let density = (m,v)=>m/v;
// console.log(density(8,2));

// task 10
// Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.

// let speed = (dis,duration)=>dis/duration;
// console.log(speed(50,2));

// task 11
// Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
// let weight = (mass,gravity)=>mass*gravity;
// console.log(weight(20,9.8));

// task 12
// Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.

// let convertCelsiusToFahrenheit = c => (c*9/5)+32;
// console.log(convertCelsiusToFahrenheit(20));

// task 13

// Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
// Underweight: BMI is less than 18.5
// Normal weight: BMI is 18.5 to 24.9
// Overweight: BMI is 25 to 29.9
// Obese: BMI is 30 or more

// let bmi = (w, h) => {
//     let mi = w / (h * h);
//     let res;
//     (mi > 18.5) ? res = "Underweight" :
//         (mi <= 18.5 || mi >= 24.9) ? res = "Normal weight" :
//             (mi <= 25 || mi >= 29.9) ? res = "Overweight" :
//                 (mi > 30) ? res = "Obese" : res = "not a valid number"

//     return res;
// }

// console.log(bmi(3000, 90));

// task 14
// Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.

// let checkSeason = userInput => {

//     if (userInput === "September" || userInput === "October" || userInput === "November") return ("Autumn");
//     if (userInput === "December" || userInput === "January" || userInput === "February") return ("Winter");
//     if (userInput === "March" || userInput === "April" || userInput === "May") return ("Spring");
//     if (userInput === "June" || userInput === "July" || userInput === "August") return ("Summer");
// }

// console.log(checkSeason("November"))

// task 15
// Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.

// let max = (a, b, c) => {

//     let arr = [a, b, c]
//     let max = 0;
//     for (let i = 0; i < arr.length; i++) {

//         if (arr[i] > max) max = arr[i]

//     }

//     return max;
// }

// console.log(max(5, 45, -5))

// task 16

// Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.

// let printArray = a => {

//     // for (let v = 0; v < a.length; v++) {

//     //   console.log(a[v]);

//     // }
//     a.forEach(element => {
//         console.log(element);

//     });

// }
// printArray([1, 5, 9, 45, 25]);

// task 17
// Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
// let showDateTime = () => {

//     let d = new Date(); let day = d.getDate(); let mon = d.getMonth() + 1; let year = d.getFullYear(); let hour = d.getHours();
//     let minute = d.getMinutes()

//     if (day.toString().length === 1) day = "0" + day
//     if (mon.toString().length === 1) mon = "0" + mon
//     if (hour.toString().length === 1) hour = "0" + hour
//     if (minute.toString().length === 1) minute = "0" + minute

//     return `${day}/${mon}/${year} ${hour}:${minute} `


// }
// console.log(showDateTime());

// task 18
// Declare a function name swapValues. This function swaps value of x to y.

// let swapValues = (x,y)=>{
//     [x,y]=[y,x]

//     console.log(`x => ${x}, y=> ${y} `);

// }

// swapValues(50,100);

// task 19
// twap two number
// let a=1,b=2; let temp =0; temp =a;
// temp = a;
// a =b;
// b = temp;
// console.log(`a => ${a}, b=> ${b}`);

// task 20
// Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).

// let reverseArray = a=>{

// for(let i =0; i<a.length/2; i++){

// let temp = a[i];
// a[i] = a[a.length-1 -i]
// a[a.length-1-i] = temp

// }
// return a;
// }
// console.log(reverseArray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]));

// task 21
// Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.

// let capitalizeArray = a=>{
// let newarr =[]
// for(let val in a){

//     let cap = a[val].toUpperCase()

//     a[val] = cap // update in same Array
//     newarr.push(cap) // update value in newarray
// }
// return newarr;
// }
// console.log(capitalizeArray(["a","b","c","d","e","f","g","h","i"]));

// task 22
// Declare a function name addItem. It takes an item parameter and it returns an array after adding the item

// let addItem = (item1,item2)=>{


// let itemarray =[];
// itemarray.push(item1,item2)
// return itemarray;
// }

// console.log(addItem("fruit","deo"));

// task 23
// Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item
// let removeItem = (index1, index2, itemarray) => {

//     let removeindex = [index1, index2-1]
//     for (let ind of removeindex) {

//         itemarray.splice(ind, 1)
//     }

//     return itemarray;
// }

// console.log(removeItem(0, 3, ["a", "b", "c", "d", "e", "f", "g", "h", "i"]));

// task 24
// Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.

// let sumOfNumbers = n=>{

//     let addrange =0;
// for(let i = 0;i<= n; i++){

//     addrange += i

// }
// return addrange;
// }
// console.log(sumOfNumbers(10));

// task 25
// Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.

// let sumOfOdds = n=>{

//     let oddrange =0;
// for(let i = 0;i<= n; i++){

//     if(i%2 ===1) oddrange += i

// }
// return oddrange;
// }
// console.log(sumOfOdds(5));

// task 26
// Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.

// let sumOfEven = n=>{

//     let evenrange =0;
// for(let i = 0;i<= n; i++){

//     if(i%2 ===0) evenrange += i

// }
// return evenrange;
// }
// console.log(sumOfEven(10));

// task 27
// Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.

// let evensAndOdds = n => {

//     let evencount = 0;
//     let oddcount = 0;
//     for (let i = 0; i <= n; i++) {

//         if (i % 2 === 0) evencount++
//         if (i % 2 === 1) oddcount++

//     }
//     return `The number of odds are ${oddcount}.
// The number of evens are ${evencount}.`;
// }
// console.log(evensAndOdds(10));

// task 28
// Write a function which takes any number of arguments and return the sum of the arguments

// function sumAllNums() {
//     let sum = 0
//     for (let i = 0; i < arguments.length; i++) {
//       sum += arguments[i]
//     }
//     return sum
//   }

//   console.log(sumAllNums(1, 2, 3,4))

// task 29
// Writ a function which generates a randomUserIp.

// let randomUserIp =()=>{

//     let a = Math.floor(Math.random() * 255);
//     let b = Math.floor(Math.random() * 255);
//     let c = Math.floor(Math.random() * 255);
//     let d = Math.floor(Math.random() * 255);

//     return `${a}.${b}.${c}.${d}`
// }
// console.log(randomUserIp());

// task 30
// Write a function which generates a randomMacAddress

// let randomMacAddress =()=>{

//     let hexnum = "ABCDEF"
//     let a = Math.floor(Math.random() * 6);
//     let sl = hexnum.slice(a,a+1)
//     let b = Math.floor(Math.random() * 16);
//     let c = Math.floor(Math.random() * 10);
//     let d = Math.floor(Math.random() * 90);

//     return `${b}${c}:${a}${sl}:${d}:${b}:${a}${sl}:${sl}${c}`
// }
// console.log(randomMacAddress());

// task 31
// Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.

// let randomHexaNumberGenerator =()=>{

//     let hexnum = "abcdefBDF"
//     let a = Math.floor(Math.random() * 6);
//     let sl = hexnum.slice(a,a+1)
//     let c = Math.floor(Math.random() * 10);
//     let sl1 = hexnum.slice(c,c+1)


//     return `'#${sl}${sl}${c}${a}${sl1}${sl}'`
// }
// console.log(randomHexaNumberGenerator());

// task 32
// Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id. => 41XTDbE

// let userIdGenerator =()=>{

//     let hexnum = "abcdefBDFdvkfjkvddkbdvGFHHVGvgjhdchhdcFRRHJSKHSYTVHJGZDHGJ"
//     let a = Math.floor(Math.random() * 10);
//     let sl = hexnum.slice(a,a+1)
//     let c = Math.floor(Math.random() * 40);
//     let sl1 = hexnum.slice(c,c+1)


//     return `${c}${a}${sl}${sl1}${sl}${sl1}${sl1}${sl}`
// }
// console.log(userIdGenerator());

// task 33
// Write a function name rgbColorGenerator and it generates rgb colors.

// let rgbColorGenerator = ()=>{

// let a = Math.floor(Math.random() *255)
// let b = Math.floor(Math.random() *255)
// let c = Math.floor(Math.random() *255)

// return `rgb(${a},${b},${c})`
// }

// console.log(rgbColorGenerator());

// task 34
// Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.

// let randomHexaNumberGenerator = () => {
//     let hexarr = []

//     for (let i = 0; i < 5; i++) {
//         let hexnum = "abcdefBDF"
//         let a = Math.floor(Math.random() * 6);
//         let sl = hexnum.slice(a, a + 1)
//         let c = Math.floor(Math.random() * 10);
//         let sl1 = hexnum.slice(c, c + 1)

//         let hexcol = `'#${sl}${sl}${c}${a}${sl1}${sl}'`
//         hexarr.push(hexcol)
//     }
//     return hexarr;
// }
// console.log(randomHexaNumberGenerator());

// task 35
// Write a function arrayOfRgbColors which return any number of RGB colors in an array.

// let arrayOfRgbColors = () => {
//     let rgbcol = []

//     for (let i = 0; i < 5; i++) {
//         let a = Math.floor(Math.random() * 255)
//         let b = Math.floor(Math.random() * 255)
//         let c = Math.floor(Math.random() * 255)

//         let rgb = `rgb(${a},${b},${c})`
//         rgbcol.push(rgb)
//     }
//     return rgbcol;
// }
// console.log(arrayOfRgbColors());

// task 36
// Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.

// let modifyArray = (a) => {

//     if (a.length > 5) {
//         a[4] = a[4].toUpperCase()

//     }else{

//         return 'item not found'
//     }

// return a;
// }

// console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon']));

// task 37
// Write a function called isPrime, which checks if a number is prime number.

// let isPrime = (n) => {

//     if (n == 1 || n == 0) return false;
//     for (let i = 2; i < n; i++) {

//         if (n % i === 0) return false;
//     }
//     return true;
// }

// console.log(isPrime(25));

// task 38
// Write a functions which checks if all items are unique in the array.

// let unique = (a) => {

//     for (let i = 0; i < a.length; i++) {
//         for (let j = i + 1; j < a.length; j++) {

//             if (a[i] === a[j]) return false;
//         }
//     }
//     return true;
// }

// console.log(unique(["a","b","b","d"]));

// task 39
// Write a function which checks if all the items of the array are the same data type.

// let unique = (a) => {

//     for (let i = 0; i < a.length; i++) {
//         for (let j = i + 1; j < a.length; j++) {

//             if (typeof(a[i]) !== typeof(a[j])) return false;
//         }
//     }
//     return true;
// }

// console.log(unique([1,2,3,4,5,6,"d"]));

// task 40
// JavaScript variable name does not support special characters or symbols except $ or _. Write a function isValidVariable which check if a variable is valid or invalid variable.

// let isValidVariable = (vari) => {

//     if (vari[0].includes("_")) {
//         return "valid";
//     } else if (vari[0].includes("$")) {
//         return "valid";
//     } else if (vari[0].match(/[A-Z a-z 0-9 ]/)) {
//         return "valid";
//     } else {

//         return "Invalid";
//     }
// }
// console.log(isValidVariable("#hello"));

// task 41
// Write a function which returns array of five random numbers in a range of 0-9. All the numbers must be unique.

// let ranUniqArr = () => {

//     let arr = [];
//     for (let i = 0; arr.length != 5; i++) {

//         let a = Math.floor(Math.random() * 10)
//         if (!(arr.includes(a)) && arr.length <= 5) arr.push(a)
//     }
//     return arr;
// }
// console.log(ranUniqArr());

// task 42
// Write a function called reverseCountries, it takes countries array and first it copy the array and returns the reverse of the original array

// let reverseCountries = (arr) => {

//     let copparr = [...arr];

//     for (let i = 0; i < arr.length / 2; i++) {

//         let temp = arr[i]
//         arr[i] = arr[arr.length - 1 - i]
//         arr[arr.length - 1 - i] = temp
//     }
//     console.log("original arr", arr);
//     return copparr;
// }
// console.log(reverseCountries([1, 2, 3, 4, 5, 6, 8, 9]));

// task 43
// Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.

// let convertHexaToRgb = (hex) => {

//     let hexarr = []
//     for (let i = 0; i < hex.length; i += 2) {
//         let hexval = parseInt(hex.slice(i, i + 2), 16)
//         hexarr.push(hexval)
//     }

//     let rgbcol = `rgb(${hexarr[0]},${hexarr[1]},${hexarr[2]})`

//     return rgbcol;
// }
// console.log(convertHexaToRgb("BAFD32"));

// task 44
// Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color.

// let convertRgbToHexa = (rgb) => {
// let convert = rgb.replace(/[A-Z a-z ,()]/gi,"")

//     let hexacol = "#"
//     for (let i = 0; i < convert.length; i += 3) {
//         let hexval = +convert.slice(i, i + 3)
//         let hexa = (hexval).toString(16)

//         hexacol += hexa
//     }

//     return hexacol;
// }
// console.log(convertRgbToHexa("rgb(170,255,34)"));

// task 45
// Write a function generateColors which can generate any number of hexa or rgb colors.

// let generateColors = (col, num) => {

//     let convertHexaToRgb = () => {

//         let a = Math.floor(Math.random() * 255)
//         let b = Math.floor(Math.random() * 255)
//         let c = Math.floor(Math.random() * 255)

//         let rgb = `rgb(${a},${b},${c})`

//         return rgb;
//     }

//     let convertRgbToHexa = () => {

//         let hexnum = "abcdefBDF"
//         let a = Math.floor(Math.random() * 6);
//         let sl = hexnum.slice(a, a + 1)
//         let c = Math.floor(Math.random() * 10);
//         let sl1 = hexnum.slice(c, c + 1)

//         let hexcol = `'#${sl}${sl}${c}${a}${sl1}${sl}'`


//         return hexcol;
//     }

//     let rgbcolor = []
//     let hexcolor = []

//     for (let i = 0; i != num; i++) {

//         if (col === "hexa") {

//             let hex = convertRgbToHexa();
//             hexcolor.push(hex)

//         } else if (col === "rgb") {

//             let rgb = convertHexaToRgb()
//             rgbcolor.push(rgb)

//         }

//     }

//     if (col === "hexa") return hexcolor;
//     if (col === "rgb") return rgbcolor;
// }
// console.log(generateColors("rgb", 5));

// task 46
// Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items. Check if all the array items are number types. If not give return reasonable feedback.

// let sumOfArrayItems = (arr) => {
//     let sum = 0;
//     for (let value of arr) {

//         if (typeof(value) !== "number") return "your input is not valid"
//         if (typeof(value) === "number") sum += value
//     }
//     return sum;
// }

// console.log(sumOfArrayItems([1,2,3,4]));

// task 47
// Write a function called average, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.

// let average = (arr) => {
//     let sum = 0;
//     for (let value of arr) {

//         if (typeof(value) !== "number") return "your input is not valid"
//         if (typeof(value) === "number") sum += value
//     }
//     return sum/arr.length;
// }

// console.log(average([1,2,3,4,5,10]));


// task 48
// Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array

// let shuffleArray = ((arr) => {

//     for (let i = 0; i < arr.length; i++) {
//         let ran = Math.floor(Math.random() * arr.length)
//         let temp = arr[i];
//         arr[i] = arr[ran];
//         arr[ran] = temp;

//     }
//     return arr;
// })([1, 2, 3, 4, 5, 6, 8, 9])

// console.log(shuffleArray);

// es6 trick

// function shuffleArray(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [array[i], array[j]] = [array[j], array[i]];
//     }
// }

// task 49
// Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number

// let factorial = (n)=>{

// if(n===1) return n
//  return n * factorial(n-1)
// }
// console.log(factorial(4));

// task 50
// Call your function isEmpty, it takes a parameter and it checks if it is empty or not

// let isEmpty = (a) => {
//     a.pop()
// if (a.length === 1) return a
//    return isEmpty(a);
// }

// let j = [1,2,3,4,5,6]
// console.log(isEmpty(j));

// task 51
// Call your function sum, it takes any number of arguments and it returns the sum.

// let sum = (...arr) => {

//     let add = 0;
//     if (arr.length === 0) return add
//     add += arr[0]
//     let a = arr.pop()

//     return add  + sum(a)
// }

// console.log(sum(1, 2, 3, 4, 5, 6)); //dont use [] with spred oprator, if no need because it's create nested array

// ******************************************

// let sum = ((...arr) => {
//     let add = 0;
//     for (let i = 0; i < arr.length; i++) {
//         add += arr[i]

//     }
//     return add;
// })(1, 2, 3, 4, 5)  // dont use [] with spred oprator of not need because it's create nested array

// console.log(sum);


// call apply and Bind



// let test = (x,y)=>{

//     let a = Math.floor(Math.random() *x)
// let b = a + y
//     return b;
// }

// let result = (x,y)=>{
// let c = x+y
// return this.c;
// }


// console.log(test.call(this,35,10));
// console.log(test.call(result,35,10));

