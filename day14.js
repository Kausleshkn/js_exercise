// task 1
// Create an Animal class. The class will have name, age, color, legs properties and create different methods

// class Animal {
//     #age;
//     constructor(name, age, color, legs, bark) {
//         this.name = name;
//         this.#age = age;
//         this.color = color;
//         this.legs = legs;
//         this.bark = bark;
//         this.Info = () => { return this.name }
//     }
//     set updateName(val) { this.name = `${this.name} ${val}` }
//     get fullName() { return this.name }
//     run(c) { return `${c}!Ofcourse` }
//     #type() { return this.color }
//     getage() { return this.#age }
//     animalInfo() { return `Color: ${this.#type()} And Bark ${this.bark}` }
// }
// let tommy = new Animal("tommy", 8, "black", "four", "Quite")
// let jack = new Animal("jack", 10, "white", "four", "Noicy")

// tommy.updateName = "Nice"
// jack.updateName = "awesome"

// console.log(tommy.Info());

// task 2
// Create a Dog and Cat child class from the Animal Class.

// class Dog extends Animal {


// }

// let tommy = new Dog("tommy", 8, "black", "four", "Quite")
// let jack = new Dog("jack", 10, "white", "four", "Noicy")

// tommy.updateName = "Nice"
// jack.updateName = "awesome"

// class Cat extends Animal {

//     // when you not need to inslize cunstructor and add some methood or override some then use below approch
//     // speak = "mewww"
//     // color = "undifained"
//     // eat = "no"
//     // sound() {return this.speak }
//     // run() { return this.eat }

//     // using cunstroctor
//     constructor(name, age, color, legs, bark, sound, eat, walk) {
//         super(name, age, color, legs, bark)
//         this.sound = sound
//         this.eat = eat
//         this.walk = walk
//         this.Info = () => this.eat
//         this.travel = () => this.walk
//     }
//     animalInfo() { return this.sound + " " + this.eat}
//     catInfo() { return `${super.animalInfo()}`}
//     run() { return this.travel() }

// }
// let wildcat = new Cat("WildCat", 8, "black", "four", "Quite", "wild", "bread", "slow")
// let Citycat = new Cat("Citycat", 10, "white", "four", "Noicy", "decent", "food", "fast")

// wildcat.updateName = "Nice"
// Citycat.updateName = "awesome"

// console.log(wildcat.catInfo());

// task 3
// Let's try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create a class called Statistics and create all the functions which do statistical calculations as method for the Statistics class. Check the output below.

// let ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

// class Statistics {

// static count(){ return `Count: ${ages.length}` }

// static sum() {return ages.reduce((sum,val)=> sum+val)}

// static min() {return Math.min(...ages)}

// static max() {return Math.max(...ages)}

// static describe() {return ` ${Statistics.count()} \n Sum:  ${Statistics.sum()} \n Min:  ${Statistics.min()} \n Max:  ${Statistics.max()}`}

// }
// console.log(Statistics.describe());

// task 4
// Create a class called PersonAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.

// class PersonAccount {
//     #incomes
//     #expenses
//     constructor(firstname, lastname, incomes, expenses) {
//         this.firstname = firstname
//         this.lastname = lastname
//         this.#incomes = incomes
//         this.#expenses = expenses
//     }
//     #totalIncome = () => this.#incomes
//     #totalExpense = () => this.#expenses
//     accountInfo() { return ` Firstname : ${this.firstname} \n Lastname : ${this.lastname} \n AccountBalance : ${this.#accountBalance()} ` }
//     set addIncome(mon) { return this.#incomes += mon }
//     set addExpense(exp) { return this.#expenses += exp }
//     #accountBalance() { return this.#totalIncome() - this.#totalExpense() }
// }

// class newFeature extends PersonAccount {
//     constructor(firstname, lastname, incomes, expenses,points) {
//         super(firstname, lastname, incomes, expenses)
//         this.points = points;
//         this.addpoints =  function() { return this.points + 5 }
//     }
//     accountInfo(){ return `${super.accountInfo()} \n Points : ${this.addpoints()}`}
// }

// let dumb = new newFeature("dumb", "stupid", 5000, 2000,5)
// let chutiya = new newFeature("chutiya", "fool", 8000, 5000,10)

// dumb.addIncome = 10000
// chutiya.addIncome = 20000
// dumb.addExpense = 5000
// chutiya.addExpense = 1000

// console.log(chutiya.accountInfo());

// task 5

// calculator app

// class calculator {
//     constructor(a, b) {
//         this.a = a
//         this.b = b
//     }
//     sum() { return this.a + this.b }
//     mul() { return this.a * this.b }
//     sub() { return this.a - this.b }
//     div() { return this.a / this.b }
// }
// let input = new calculator(10, 5)
// console.log(input.sum());
// console.log(input.mul());
// console.log(input.sub());
// console.log(input.div());



