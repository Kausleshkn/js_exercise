// task 1
// Declare an empty array;
// Declare an array with more than 5 number of elements
// Find the length of your array
// Get the first item, the middle item and the last item of the array

// let arr = [];
// let arr1 = ["a", "b", "c", "d", "e", "f"];
// console.log(arr1.length);
// console.log(arr1[0]);
// console.log(arr1[Math.floor((arr1.length - 1)/2)]);
// console.log(arr1[arr1.length -1]);

// task 2
// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5

// let mixedDataTypes = ["abc", true, false, 45, 12.5, null, undefined, "cat"]
// console.log(mixedDataTypes.length);

// task 3
// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
// Print the array using console.log()
// Print the number of companies in the array
// Print the first company, middle and last company
// Print out each company
// Change each company name to uppercase one by one and print them out
// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found


// let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle" , "Amazon"]

// console.log(itCompanies);
// console.log(itCompanies.length);
// console.log(itCompanies[0]);
// console.log(itCompanies[Math.floor((itCompanies.length - 1)/2)]);
// console.log(itCompanies[itCompanies.length -1 ]);
// itCompanies.forEach(v=> console.log(v));
// itCompanies.forEach((v, i, a)=> console.log(a.join(" ").toUpperCase()));
// let Ucase = itCompanies.toString()
// console.log(Ucase.toUpperCase());
// console.log("Sentence:" + " " + Ucase + " are big IT companies.");

// let cName = itCompanies.indexOf("Microsof");

// if(cName >= 0) {
//     console.log(itCompanies[cName])
// }else{
//     console.log("company is not found");

// }

// ....task countinue
// Filter out companies which have more than one 'o' without the filter method
// first methood
// let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle" , "Amazon"]
// let filCom = [];

// for(let i = 0; i< itCompanies.length; i++){

//     if(itCompanies[i].includes("oo")) filCom.push(itCompanies[i])

// }
// console.log(filCom);
// second methood
// let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
// let filCom = [];

// let it0 = itCompanies[0].includes("oo");
// let it1 = itCompanies[1].includes("oo");
// let it2 = itCompanies[2].includes("oo");
// let it3 = itCompanies[3].includes("oo");
// let it4 = itCompanies[4].includes("oo");
// let it5 = itCompanies[5].includes("oo");
// let it6 = itCompanies[6].includes("oo");

// (it0 === true) ? filCom.push(itCompanies[0]) : filCom;
// (it1 === true) ? filCom.push(itCompanies[1]) : filCom;
// (it2 === true) ? filCom.push(itCompanies[2]) : filCom;
// (it3 === true) ? filCom.push(itCompanies[3]) : filCom;
// (it4 === true) ? filCom.push(itCompanies[4]) : filCom;
// (it5 === true) ? filCom.push(itCompanies[5]) : filCom;
// (it6 === true) ? filCom.push(itCompanies[6]) : filCom;
// console.log("second methood", filCom); 

// if(it0) filCom.push(itCompanies[0])
// if(it1) filCom.push(itCompanies[1])
// if(it2) filCom.push(itCompanies[2])
// if(it3) filCom.push(itCompanies[3])
// if(it4) filCom.push(itCompanies[4])
// if(it5) filCom.push(itCompanies[5])
// if(it6) filCom.push(itCompanies[6])

// console.log("thired methood", filCom);

// with Filter mettod
// let fC = itCompanies.filter((v) => v.includes("oo"))
// console.log(fC);

// ...... task countinue
// Sort the array using sort() method
// Reverse the array using reverse() method
// Slice out the first 3 companies from the array
// Slice out the last 3 companies from the array
// Slice out the middle IT company or companies from the array


// let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];

// let SnRarray = itCompanies.sort().reverse()
// console.log(SnRarray);

// let scom = itCompanies.slice(0,3)
// let scoml = itCompanies.slice(itCompanies.length -3, itCompanies.length)
// let scoml1 = itCompanies.slice(itCompanies.length -3)
// let scomlm = itCompanies.slice(Math.floor(itCompanies.length - 1)/2 , (Math.floor(itCompanies.length - 1)/2) +2 )
// console.log(scom);
// console.log(scoml);
// console.log(scoml1);
// console.log(scomlm);

// ..... task countnue 
// Remove the first IT company from the array
// Remove the middle IT company or companies from the array
// Remove the last IT company from the array
// Remove all IT companies

// let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];

// itCompanies.shift();
// console.log(itCompanies);
// let rmit = itCompanies.splice(Math.floor(itCompanies.length - 1)/2, 1)

// console.log(rmit);
// console.log(itCompanies);

// itCompanies.pop()
// console.log(itCompanies);

// itCompanies.splice(0,itCompanies.length)
// console.log(itCompanies);

// task 4
// First remove all the punctuations and change the string to array and count the number of words in the array

// let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

// let rem = text.replace(/[^a-zA-Z0-9 ]/g , "").split(" ")

// console.log(rem);
// console.log(rem.length);

// task 5
// In the following shopping cart add, remove, edit items
// add 'food' in the beginning of your shopping cart if it has not been already added
// add Sugar at the end of you shopping cart if it has not been already added
// remove 'Honey' if you are allergic to honey
// modify Tea to 'Green Tea'


// const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

// shoppingCart.unshift("food")
// shoppingCart.push("Sugar")
// shoppingCart.splice(4,1)
// shoppingCart[shoppingCart.length -2] = "Green Tea";
// console.log(shoppingCart);


// task 6

// Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file

// complited

// task 7
// Concatenate the following two variables and store it in a fullStack variable.

// const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
// const backEnd = ['Node', 'Express', 'MongoDB']

// let arr = frontEnd.concat(backEnd)

// let fullStack = [...arr]

// console.log(fullStack)

// task 8
// The following is an array of 10 students ages:
// Sort the array and find the min and max age
// Find the median age(one middle item or two middle items divided by two)
// Find the average age(all items divided by number of items)
// Find the range of the ages(max minus min)
// Compare the value of (min - average) and (max - average), use abs() method 

// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

// let Sarr = ages.sort((a,b)=>a-b)

// let max = Math.max(...Sarr);
// let min = Math.min(...Sarr);

// let median = (Sarr[Math.floor(Sarr.length/2)] + Sarr[Math.floor(Sarr.length/2)] +1)/2;

// let avg = 0;
// let avgAge = avg/Sarr.length;
// for(let i =0; i<Sarr.length; i++){
// avg += Sarr[i]
// }
// let range = max -min;

// let v1 = Math.abs(min - avgAge);
// let v2 = Math.abs(max - avgAge);
// let cam = (v1 === v2)












