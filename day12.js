// task 1
// Calculate the total annual income of the person from the following text. ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’

// let text = "He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month."
// let cap = text.match(/\d+/g)
// let cap = text.match(/[0-9]+/g)
// let cap = text.match(/[^A-Z a-z,.]+/g)
// console.log(cap.reduce((s,v)=>s += +v,0))
// console.log(cap);


// task 2
// The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles.


// let str = "The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction."

// let rejex = str.match(/(\-*\d+)/g).map(Number)
// console.log(rejex);

// task 3
// Write a pattern which identify if a string is a valid JavaScript variable
// is_valid_variable('first_name') # True
// is_valid_variable('first-name') # False
// is_valid_variable('1first_name') # False
// is_valid_variable('firstname') # True

// let is_valid_variable = (str) => {
//     let patern = /^[A-Za-z_$]\w+(\$)*\w+$/
//     let x = patern.test(str)

//     return x;
// }
// console.log(is_valid_variable('firstname'));

// task 4
// Write a function called tenMostFrequentWords which get the ten most frequent word from a string?

// let paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`


// first Trick

// let tenMostFrequentWords = (para, num) => {
//     let arr = []
//     let temp = []
//     let x = para.match(/\w+/g)

//     x.forEach(e => {
//         let cn = 0
//         x.forEach(v => {

//             if (v === e) cn++

//         })
//         if(temp.includes(e) === false){
//             temp.push(e)
//             arr.push({word: e, count:cn })
//         }
//     });

//     arr.sort((a,b)=>b.count- a.count)
//     return arr.slice(0,num)
// }
// console.log(tenMostFrequentWords(paragraph,10))

// second trick

// let tenMostFrequentWords = (para, num) => {
//     let arr = []
//     let temp = []
//     let x = para.match(/\w+/g)

//     x.forEach(v => {

//         let pattern = `\\b${v}\\b`// also works
//         let regEx = new RegExp(`\\b${v}\\b`, 'g')
//         let y = para.match(regEx)

//         if (temp.includes(v) === false) {
//             temp.push(v)
//             arr.push({ word: v, count: y.length })
//         }
//     });

//     arr.sort((a, b) => b.count - a.count)
//     return arr.slice(0, num)
// }
// console.log(tenMostFrequentWords(paragraph,10))

// task 5
// Writ a function which cleans text. Clean the following text. After cleaning, count three most frequent words in the string.

// let sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`

// let cleanText = (sen) => {

//     // First trick
//     // let x = sen.match(/[^A-Z ]/gi)
//     // let filte = x.filter((v,i)=>x.indexOf(v) ===i).join("")
//     // let re = new RegExp(`[${filte}]`,"g")
//     // let c = sen.replace(re, "")

//     // second trick
//     let x = sen.match(/[^A-Z ]/gi)
//     let filte = x.filter((v, i) => x.indexOf(v) === i).join("")
//     let re = new RegExp(`[^${filte} ]+`, "g")
//     let c = sen.match(re)
//     // or use this one line
//     // let y = sen.match(/[(A-Z)]*[(A-Z)]+/gi)
//     let y = sen.replace(/[^\w\s]/g,"")


//     return y;
// }

// let tenMostFrequentWords = (fun) => {
//     let para = fun
//     console.log(para);
    
//     let arr = []
//     let temp = []
//     let x = para.match(/\w+/g)

//     x.forEach(v => {

//         let pattern = `\\b${v}\\b`// also works
//         let regEx = new RegExp(`\\b${v}\\b`, 'g')
//         let y = para.match(regEx)

//         if (temp.includes(v) === false) {
//             temp.push(v)
//             arr.push({ word: v, count: y.length })
//         }
//     });

//     arr.sort((a, b) => b.count - a.count)
//     return arr.slice(0, 5)
// }
// console.log(tenMostFrequentWords(cleanText(sentence)))

// let tenMostFrequentWords = (fun,sen) => {
//     let para = fun(sen)
//     console.log(para);
    
//     let arr = []
//     let temp = []
//     let x = para.match(/\w+/g)

//     x.forEach(v => {

//         let pattern = `\\b${v}\\b`// also works
//         let regEx = new RegExp(`\\b${v}\\b`, 'g')
//         let y = para.match(regEx)

//         if (temp.includes(v) === false) {
//             temp.push(v)
//             arr.push({ word: v, count: y.length })
//         }
//     });

//     arr.sort((a, b) => b.count - a.count)
//     return arr.slice(0, 5)
// }
// console.log(tenMostFrequentWords(cleanText,sentence))


// testing

// let sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`

//  let tenMostFrequentWords = (sen) => {
//     let para = sen.replace(/[^\w\s]/g,"")
//     console.log(para);
    
//     let arr = []
//     let temp = []
//     let x = para.match(/\w+/g)

//     x.forEach(v => {

//         let pattern = `\\b${v}\\b`// also works
//         let regEx = new RegExp(`\\b${v}\\b`, 'g')
//         let y = para.match(regEx)

//         if (temp.includes(v) === false) {
//             temp.push(v)
//             arr.push({ word: v, count: y.length })
//         }
//     });

//     arr.sort((a, b) => b.count - a.count)
//     return arr.slice(0, 5)
// }
// console.log(tenMostFrequentWords(sentence))

