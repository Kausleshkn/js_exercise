// task 1
// Create a closure which has one inner function

// let closure = (a) => {
//     let b = 10;
//     return () => {

//         return a + b
//     }
// }
// let fun = closure(10)

// console.log(fun());

// task 2
// Create a closure which has three inner functions

// function a(x) {

//     function b(y) {

//         function c(z) {
//             return x + y + z + 5
//         }
//         return c
//     }

//     return b
// }
// let fun1 = a(5)
// let fun2 = fun1(5)
// console.log(fun2(5));

// ***** testing 1 ***********

// function a(x) {

//     function b(y) {

//         return x += y
//     }
//     function c() {

//         return ++x
//     }

//     function d() {

//         return x -= 2
//     }

//     function e() {

//         return --x
//     }

//     return { temp: b(4), c: c(), d: d(), e: e() }
// }

// let fun1 = a(5)
// console.log(fun1.temp);
// console.log(fun1);

// *********** Testing 2 *************

// function a(x) {

//     function b(y) {

//         function c(z) {

//             return x + y + z
//         }
//         return c
//     }
//     function d(sub) {
//         let ch = b(5)
//         return x - sub + ch(5)
//     }
//     return { temp: b, temp1: d }
// }

// let fun1 = a(5)
// let fun2 = fun1.temp(5)
// let fun3 = fun2(5)

// console.log(fun1.temp1(4));
// console.log(fun3);


// task 3
// Create a personAccount out function. It has firstname, lastname, incomes, expenses inner variables. It has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance inner functions. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.

//  using constructor funstion 

// function personAccount(first, last, income, expens) {

//     this.firstname = first
//     this.lastname = last
//     this.incomes = income
//     this.expenses = expens

//     this.totalIncome = () => { return this.incomes }
//     this.totalExpense = () => { return this.expenses }
//     this.accountInfo = () => { return ` Name : ${this.firstname} ${this.lastname} \n Ac Balance : ${this.accountBalance()}` }
//     this.addIncome = (man) => { return this.incomes += man }
//     this.addExpense = (Exp) => { return this.expenses += Exp }
//     this.accountBalance = () => { return this.totalIncome() - this.totalExpense() }
// }
// let Kauslesh = new personAccount("Kauslesh", "Mishra", 15000, 5000)
// let Stupid = new personAccount("Stupid", "Fool", 20000, 8000)

// console.log(Kauslesh.addIncome(1000));
// console.log(Kauslesh.addExpense(500));
// console.log(Kauslesh.totalIncome());
// console.log(Kauslesh.totalExpense());
// console.log(Kauslesh.accountInfo());

// console.log(Stupid.addIncome(2000));
// console.log(Stupid.addExpense(1000));
// console.log(Stupid.totalIncome());
// console.log(Stupid.totalExpense());
// console.log(Stupid.accountInfo());

// using Factory funstion & closure => Not possible to update outer variable and get expected result

// let personAccount = (first, last, income, expens) => {

//     let firstname = first
//     let lastname = last
//     let incomes = income
//     let expenses = expens

//     let totalIncome = () => incomes
//     let totalExpense = () => expenses
//     let accountInfo = () => { return ` Name : ${firstname} ${lastname} \n Ac Balance : ${accountBalance()}` }
//     let addIncome = (add) => incomes += add
//     let addExpense = (exp) => expenses += exp
//     let accountBalance = () => totalIncome() - totalExpense()
   
//     return {
//         totalIncome: totalIncome(),
//         totalExpense: totalExpense(),
//         accountInfo: accountInfo(),
//         addIncome: addIncome,
//         addExpense: addExpense,
//         accountBalance: accountBalance()
//     }
// }

// let Kauslesh = personAccount("Kauslesh", "Mishra", 15000, 5000)
// let Stupid = personAccount("Stupid", "Fool", 20000, 8000)

// console.log(Kauslesh.addIncome(1000));
// console.log(Kauslesh.addExpense(500));
// console.log(Kauslesh.totalIncome);
// console.log(Kauslesh.totalExpense);
// console.log(Kauslesh.accountInfo);


// console.log(Stupid.addIncome(2000));
// console.log(Stupid.addExpense(1000));
// console.log(Stupid.totalIncome);
// console.log(Stupid.totalExpense);
// console.log(Stupid.accountInfo);

// ******* Hoisiting *********

// let x = ()=>{
//     let y = ()=>  z()
//     let z = ()=> "Hello World"
//     return y;
    
// }
// let fun = x()
// console.log(fun()); // Here fun y is calling and returning z and z is defined above so it's working fine but in below case this will return undifained with "var" declaration and return Error on "let" keyword declaration

// let x = ()=>{
//     let y = ()=> z
//     return y;   
// }
// let fun = x()
// console.log(fun());
// let z = ()=> "Hello World" // return error
// var z = ()=> "Hello World" // return undifained


