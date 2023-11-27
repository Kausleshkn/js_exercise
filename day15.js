// task 1
// Change skills array to JSON using JSON.stringify()
// const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python']

// let arr = JSON.stringify(skills)
// console.log(arr);

// task 2
// Stringify the age variable
// let age = 250;
//  let num = JSON.stringify(age)
// console.log(num);
// console.log(age);

// task 3
// Stringify the isMarried variable
// let isMarried = true
//  let bool = JSON.stringify(isMarried)
// console.log(bool);
// console.log(isMarried);

// task 4
// Stringify the student object

// const student = {
//     firstName:'Asabeneh',
//     lastName:'Yetayehe',
//     age:250,
//     isMarried:true,
//     skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
//   }

//   let obj = JSON.stringify(student)
//   console.log(obj);
//   console.log(student);

// task 5
// Stringify the students object with only firstName, lastName and skills properties

// const student = {
//     firstName:'Asabeneh',
//     lastName:'Yetayehe',
//     age:250,
//     isMarried:true,
//     skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
//   }

// let obj = JSON.stringify(student,["firstName", "lastName", "skills"],5)
// console.log(obj);

// task 6
// Parse the txt JSON to object.
// const txt = `{
//     "Alex": {
//         "email": "alex@alex.com",
//         "skills": [
//             "HTML",
//             "CSS",
//             "JavaScript"
//         ],
//         "age": 20,
//         "isLoggedIn": false,
//         "points": 30
//     },
//     "Asab": {
//         "email": "asab@asab.com",
//         "skills": [
//             "HTML",
//             "CSS",
//             "JavaScript",
//             "Redux",
//             "MongoDB",
//             "Express",
//             "React",
//             "Node"
//         ],
//         "age": 25,
//         "isLoggedIn": false,
//         "points": 50
//     },
//     "Brook": {
//         "email": "daniel@daniel.com",
//         "skills": [
//             "HTML",
//             "CSS",
//             "JavaScript",
//             "React",
//             "Redux"
//         ],
//         "age": 30,
//         "isLoggedIn": true,
//         "points": 50
//     },
//     "Daniel": {
//         "email": "daniel@alex.com",
//         "skills": [
//             "HTML",
//             "CSS",
//             "JavaScript",
//             "Python"
//         ],
//         "age": 20,
//         "isLoggedIn": false,
//         "points": 40
//     },
//     "John": {
//         "email": "john@john.com",
//         "skills": [
//             "HTML",
//             "CSS",
//             "JavaScript",
//             "React",
//             "Redux",
//             "Node.js"
//         ],
//         "age": 20,
//         "isLoggedIn": true,
//         "points": 50
//     },
//     "Thomas": {
//         "email": "thomas@thomas.com",
//         "skills": [
//             "HTML",
//             "CSS",
//             "JavaScript",
//             "React"
//         ],
//         "age": 20,
//         "isLoggedIn": false,
//         "points": 40
//     },
//     "Paul": {
//         "email": "paul@paul.com",
//         "skills": [
//             "HTML",
//             "CSS",
//             "JavaScript",
//             "MongoDB",
//             "Express",
//             "React",
//             "Node"
//         ],
//         "age": 20,
//         "isLoggedIn": false,
//         "points": 40
//     }
// }
// `

// let obj = JSON.parse(txt)
// console.log(obj);
// Find the user who has many skills from the variable stored in txt.
// for (let key in obj) {
    
//     console.log(obj[key].skills.length);
//     if (obj[key].skills.length > 4) console.log(key);
// }

// const usersText = `{
//     "users":[
//       {
//         "firstName":"Asabeneh",
//         "lastName":"Yetayeh",
//         "age":250,
//         "email":"asab@asb.com"
//       },
//       {
//         "firstName":"Alex",
//         "lastName":"James",
//         "age":25,
//         "email":"alex@alex.com"
//       },
//       {
//       "firstName":"Lidiya",
//       "lastName":"Tekle",
//       "age":28,
//       "email":"lidiya@lidiya.com"
//       }
//     ]
//     }`
    
//     const usersObj = JSON.parse(usersText, (key, value) => {
//       let newValue =
//         typeof value == 'string' && key != 'email' ? value.toUpperCase() : value
//       return newValue
//     })
//     console.log(usersObj)
