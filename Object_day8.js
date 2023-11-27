// task1
// Create an empty object called dog
// Print the the dog object on the console
// Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
// Get name, legs, color, age and bark value from the dog object
// Set new properties the dog object: breed, getDogInfo

// let dog = {

//     name : "Tommy",
//     color : "good",
//     legs : "normally what's dog have",
//     age : "not known",
//     bark(){
//         return "woof woof"
//     }
// };

// let dogname = dog.name
// let legs = dog.legs
// let color = dog.color
// let age = dog.age
// let bark = dog.bark()

// dog.breed = undefined;
// dog.getDogInfo = "currenly not happy "

// console.log(dog);

// task 2
// Find the person who has many skills in the users object.

// const users = {
//     Alex: {
//         email: 'alex@alex.com',
//         skills: ['HTML', 'CSS', 'JavaScript'],
//         age: 20,
//         isLoggedIn: false,
//         points: 30
//     },
//     Asab: {
//         email: 'asab@asab.com',
//         skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
//         age: 25,
//         isLoggedIn: false,
//         points: 50
//     },
//     Brook: {
//         email: 'daniel@daniel.com',
//         skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
//         age: 30,
//         isLoggedIn: true,
//         points: 50
//     },
//     Daniel: {
//         email: 'daniel@alex.com',
//         skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
//         age: 20,
//         isLoggedIn: false,
//         points: 40
//     },
//     John: {
//         email: 'john@john.com',
//         skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
//         age: 20,
//         isLoggedIn: true,
//         points: 50
//     },
//     Thomas: {
//         email: 'thomas@thomas.com',
//         skills: ['HTML', 'CSS', 'JavaScript', 'React'],
//         age: 20,
//         isLoggedIn: false,
//         points: 40
//     },
//     Paul: {
//         email: 'paul@paul.com',
//         skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
//         age: 20,
//         isLoggedIn: false,
//         points: 40
//     }
// }
// Find the person who has many skills in the users object.
// for (let key in users) {

//     if (users[key].hasOwnProperty("skills") === true) {

//         if (users[key].skills.length > 2) console.log(users[key].skills);

//     }
// }

// Count logged in users, count users having greater than equal to 50 points from the following object.

// for (let key in users) {

//     if (users[key].hasOwnProperty("points") === true) {

//         if (users[key].points >= 50) console.log(users[key].points + "   " + key );

//     }
// }

// Find people who are MERN stack developer from the users object

// for (let key in users) {

//     if (users[key].skills.includes("MongoDB", "Express", "React", "Node") === true) console.log(users[key].skills+ "  ",key);

// }

// Set your name in the users object without modifying the original users object

// let cloneobj = Object.assign({}, users);

// cloneobj.kauslesh = {isgoingmad: true}

// console.log(cloneobj);

// Get all keys or properties of users object
// first way
// for(let key in users ){

//     // console.log(key);

// }
// secand way
// console.log(users["John"]);
// let nestedkey = users["John"];
// let johnkey = Object.keys(nestedkey)
// console.log(johnkey);

// or

// for(let val in nestedkey){

//     console.log(val); 
// }

// Get all the values of users object

// first way 

// for(let val in users){

//     // console.log(users[val]);

// }

// second way 

// let userval = Object.values(users)
// console.log(userval);

// Use the countries object to print a country name, capital, populations and languages.

// let countries ={name:"xyz",capital :"ABC",populations : 452554,languages:false }

// console.log(countries.name,countries.capital,countries.populations,countries.languages);

// task 3

// Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.

// let personAccount = {
//     firstName: "xyz", lastName: "abc", incomes: 50, expenses: 5, properties: undefined,
//     totalIncome() { return this.incomes }, totalExpense() { return this.expenses },
//     accountInfo(def) { return this.incomes +50 +def }, addIncome(add) { return this.incomes +add },
//     addExpense(dumy) { return this.expenses + dumy }, accountBalance:()=> { return this.accountInfo() }

// }
// let totalin = personAccount.accountInfo(200);
// let totalin1 = personAccount.accountBalance();
// let totalin3 = personAccount.addIncome(500);
// let totalin4 = personAccount.incomes;

// console.log(totalin);
// console.log(totalin1);
// console.log(totalin3);
// console.log(totalin4);

// task 4
// const users = [
//     {
//         _id: 'ab12ex',
//         username: 'Alex',
//         email: 'alex@alex.com',
//         password: '123123',
//         createdAt: '08/01/2020 9:00 AM',
//         isLoggedIn: false
//     },
//     {
//         _id: 'fg12cy',
//         username: 'Asab',
//         email: 'asab@asab.com',
//         password: '123456',
//         createdAt: '08/01/2020 9:30 AM',
//         isLoggedIn: true
//     },
//     {
//         _id: 'zwf8md',
//         username: 'Brook',
//         email: 'brook@brook.com',
//         password: '123111',
//         createdAt: '08/01/2020 9:45 AM',
//         isLoggedIn: true
//     },
//     {
//         _id: 'eefamr',
//         username: 'Martha',
//         email: 'martha@martha.com',
//         password: '123222',
//         createdAt: '08/01/2020 9:50 AM',
//         isLoggedIn: false
//     },
//     {
//         _id: 'ghderc',
//         username: 'Thomas',
//         email: 'thomas@thomas.com',
//         password: '123333',
//         createdAt: '08/01/2020 10:00 AM',
//         isLoggedIn: false
//     }
// ];

// const products = [
//     {
//         _id: 'eedfcf',
//         name: 'mobile phone',
//         description: 'Huawei Honor',
//         price: 200,
//         ratings: [
//             { userId: 'fg12cy', rate: 5 },
//             { userId: 'zwf8md', rate: 4.5 }
//         ],
//         likes: []
//     },
//     {
//         _id: 'aegfal',
//         name: 'Laptop',
//         description: 'MacPro: System Darwin',
//         price: 2500,
//         ratings: [],
//         likes: ['fg12cy']
//     },
//     {
//         _id: 'hedfcg',
//         name: 'TV',
//         description: 'Smart TV:Procaster',
//         price: 400,
//         ratings: [{ userId: 'fg12cy', rate: 5 }],
//         likes: ['fg12cy']
//     }
// ]

// Imagine you are getting the above users collection from a MongoDB database. a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.
// b. Create a function called signIn which allows user to sign in to the application

// let getname = "abv"
// let userId = "th@hello"
// let useremail = "test@newuser.com"
// let pass = "123456"

// let userinfo = () => {

//    return {
//         _id: userId,
//         username: getname,
//         email: useremail,
//         password: pass,
//         createdAt: new Date().toLocaleString().slice(0, 14),
//         isLoggedIn: true
//     }


// }
// let tempserver = [];

// let signUp = () => {

//     for (let key in users) {
//         if (users[key].username === getname) return "he has already an account."

//     }

//    tempserver.push(userinfo())

//    return tempserver

// }

// console.log(signUp());

// b=> Create a function called signIn which allows user to sign in to the application

// let getname = "ghy"

// let signin = () => {

//     for (let key in users) {
//         if (users[key].username === getname) {

//             return users[key];
//         }
//     }
//     return "Invalid Details"

// }

// console.log(signin());

// task 5
// The products array has three elements and each of them has six properties. a. Create a function called rateProduct which rates the product b. Create a function called averageRating which calculate the average rating of a product

// let userrating = "4"
// let productname = "TV"

// let rateProduct = ()=>{

//     for(let key in products ){

//         if(products[key].ratings && products[key].name === productname) {

//             products[key].ratings.push({userId: undefined, rate: parseInt(userrating) }) 

//             return (products[key].ratings);
//         }

//     }

// }

// console.log(rateProduct());

// b. Create a function called averageRating which calculate the average rating of a product

// let productName = "Laptop"


// let averageRating = () => {

//     for (let key in products) {

//         if (products[key].name === productName) {

//             let x = products[key].ratings;
//             let sum = 0;
//             for (let index in x) {

//                 sum += x[index].rate;
//             }
//             return sum / x.length;
//         }
//     }
// }

// console.log(averageRating());

// avarage rating of whole products

// let averageRating = () => {

//     let sum = 0;
//     let count = 0;

//     for (let key in products) {

//         if (products[key].ratings.length >0) {

//             let x = products[key].ratings

//             for (let val in x) {

//                 sum += x[val].rate
//                 count++
//             }
//         }
//     }
//     return sum/count;
// }
// console.log(averageRating());

// task 6
// Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.

// let productName = "mobile phone"
// let user = "random"

// let likeProduct = () => {

//     for (let ind in products) {

//         if (products[ind].name === productName) {

//             if (products[ind].likes.length > 0) {

//                 products[ind].likes.pop()
//                 return products[ind].likes
//             }
//             if (products[ind].likes.length === 0) products[ind].likes.push(user)

//         }
//         return products[ind].likes
//     }
// }

// console.log(likeProduct());







