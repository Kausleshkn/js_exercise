// task 1
// Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
// Print the string on the browser console using console.log()
// Print the length of the string on the browser console using console.log()
// Change all the string characters to capital letters using toUpperCase() method
// Change all the string characters to lowercase letters using toLowerCase() method
// Cut (slice) out the first word of the string using substr() or substring() method
// Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
// Check if the string contains a word Script using includes() method
// Split the string into an array using split() method
// Split the string 30 Days Of JavaScript at the space using split() method
// Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
// What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
// What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
// Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
// Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.

// let challenge = "30 Days Of JavaScript";
// console.log(challenge);
// console.log(challenge.length);
// console.log(challenge.toUpperCase());
// console.log(challenge.toLowerCase());
// console.log(challenge.substring(0,2));
// console.log(challenge.substr(0,2));
// console.log(challenge.slice(2,challenge.length));
// console.log(challenge.includes("Script"));
// console.log(challenge.split(""));
// console.log(challenge.split(" "));
// console.log(challenge.replace("JavaScript","Python"));
// console.log(challenge.charAt("15"));
// console.log(challenge.charCodeAt("J"));
// console.log(challenge.indexOf("a"));
// console.log(challenge.lastIndexOf("a"));


// task 2
// 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.

// let str = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
// console.log(str.split(" ,"));

// task 3
// Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
// Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
// Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

// let sen = "You cannot end a sentence with because because because is a conjunction";
// console.log(sen.indexOf("because"));
// console.log(sen.lastIndexOf("because"));
// console.log(sen.search("because"));

// task 4
// Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
// Use startsWith() method with the string 30 Days Of JavaScript and make the result true
// Use endsWith() method with the string 30 Days Of JavaScript and make the result true
// Use match() method to find all the a’s in 30 Days Of JavaScript
// Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
// Use repeat() method to print 30 Days Of JavaScript 2 times

// let str1 = '30 Days Of';
// let str2 = 'JavaScript';
// let str3 = "30 Days Of JavaScript ";
// console.log(str1.trim());
// console.log(str1.startsWith("3"));
// console.log(str1.endsWith("t"));
// console.log(str1.match(/a/gi));
// console.log(str1.concat("JavaScript"));
// console.log(str1.concat(str2));
// console.log(str3.repeat(2));

// task 5

// console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to /'help'/ one another.");

// console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.");


// task 6
// Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
// Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
// Check if 'on' is found in both python and jargon

// console.log(typeof(+"10") === typeof(10));
// console.log(+("10") ===10);

// console.log(typeof( Math.floor( parseFloat('9.8')))=== typeof(10));
// console.log(parseFloat('9.8'));

// let str = "python and jargon";
// console.log(str.match(/on/g));

// task 7
// I hope this course is not full of jargon. Check if jargon is in the sentence.

// let sen = "I hope this course is not full of jargon";
// console.log(sen.includes("jargon"));

// task 8
// Generate a random number between 0 and 100 inclusively.
// Generate a random number between 50 and 100 inclusively.
// Generate a random number between 0 and 255 inclusively.

// console.log( Math.floor (Math.random() * 100));
// console.log( (Math.floor (Math.random() *50) +50 ) );
// console.log( (Math.floor (Math.random() *256)  ) );

// task 9
// Access the 'JavaScript' string characters using a random number.

// let word = 'JavaScript';
// let rNum =  Math.floor (Math.random() * 11);

// console.log(word.charAt(rNum));

// task 11

// Use console.log() and escape characters to print the following pattern.
// 1 1 1 1 1
// 2 1 2 4 8
// 3 1 3 9 27
// 4 1 4 16 64
// 5 1 5 25 125

// console.log("1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125");

// task 12
// Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'

// let sen = 'You cannot end a sentence with because because because is a conjunction'
// let f = sen.indexOf("b")
// let la = sen.lastIndexOf("e");
// let s = la-f

// console.log(sen.substr(f,s+2));

// task 13
// 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.

// Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'



// let sen = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
// let l = sen.match(/Love/gi).length

// console.log(l)

// let sen1 = 'You cannot end a sentence with because because because is a conjunction'

// let l = sen1.match(/because/gi).length

// console.log(l)

// task 14
// Clean the following text and find the most frequent word (hint, use replace and regular expressions)

// const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

// // let t = sentence.match(/[^A-Z a-z]/gi);
// console.log(sentence.replace(/[^A-Z a-z]/gi, ""));

// task 15
// Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

// let str =  'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

// let inc = str.match(/\d+/g);

// let total = inc.map(a=> +a);
// let to = 0;
// for(let i =0; i< total.length; i++ ){
// to += total[i];
// }
// console.log(to);

// task 16
// sample
// let str =  'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
// let k = 0;
// for(let i =0;i<str.length; i++){
// if(Number.isInteger(+str[i])){
// k+= str[i]

// }

// }
// console.log(k);














