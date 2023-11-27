//  task 1
// Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.

// const constants = [2.72, 3.14, 9.81, 37, 100]
// let [e,pi,gravity,humanBodyTemp,waterBoilingTemp] = constants
// console.log(` ${e} \n ${pi} \n ${gravity} \n ${humanBodyTemp} \n ${waterBoilingTemp}`);

// task 2
// Destructure and assign the elements of countries array to fin, est, sw, den, nor
// const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
// let [fin,est,sw,den,nor] = countries
// console.log(` ${fin} \n ${est} \n ${sw} \n ${den} \n ${nor}`);

// task 3
// Destructure the rectangle object by its properties or keys.

// const rectangle = {
//     width: 20,
//     height: 10,
//     area: 200,
//     perimeter: 60
// }

// let { width: wid, height: heig, area: are, perimeter: p } = rectangle
// let { width, height, area, perimeter } = rectangle

// console.log(` ${wid} \n ${heig} \n ${are} \n ${p}\n\n`);
// console.log(` ${width} \n ${height} \n ${area} \n ${perimeter}`);

// task 4
// Iterate through the users array and get all the keys of the object using destructuring

const users = [
  {
    name: 'Brook',
    scores: 75,
    skills: ['HTM', 'CSS', 'JS'],
    age: 16
  },
  {
    name: 'Alex',
    scores: 80,
    skills: ['HTM', 'CSS', 'JS'],
    age: 18
  },
  {
    name: 'David',
    scores: 75,
    skills: ['HTM', 'CSS'],
    age: 22
  },
  {
    name: 'John',
    scores: 85,
    skills: ['HTML'],
    age: 25
  },
  {
    name: 'Sara',
    scores: 95,
    skills: ['HTM', 'CSS', 'JS'],
    age: 26
  },
  {
    name: 'Martha',
    scores: 80,
    skills: ['HTM', 'CSS', 'JS'],
    age: 18
  },
  {
    name: 'Thomas',
    scores: 90,
    skills: ['HTM', 'CSS', 'JS'],
    age: 20
  }
]

// for(let {name:n,scores:s,skills:sk,age:a} of users){

//     console.log(n,s,sk,a);  
// }

// task 5
// Find the persons who have less than two skills

// for(let {name:n,scores:s,skills:sk,age:a} of users){

//    if(sk.length<2)  console.log(n);

// }

// task 6

// A junior developer structure student name, skills and score in array of arrays which may not easy to read. Destructure the following array name to name, skills array to skills, scores array to scores, JavaScript score to jsScore and React score to reactScore variable in one line.

// const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]

// let [name,skills,[,,jsScore,reactScore]] = student
// console.log(name, skills, jsScore,reactScore)

// task 7
// Write a function called convertArrayToObject which can convert the array to a structure object.

// const students = [
//   ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
//   ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
// ]
// let convertArrayToObject = (arr) => {
//   let ar = []

//   arr.forEach(v => {
    
//     let [name, skills, scores] = v
//     ar.push({ name, skills, scores })

//   })

//   return ar;
// }
// console.log(convertArrayToObject(students))

// task 8

// Copy the student object to newStudent without mutating the original object. In the new object add the following ?

// Add Bootstrap with level 8 to the front end skill sets
// Add Express with level 9 to the back end skill sets
// Add SQL with level 8 to the data base skill sets
// Add SQL without level to the data science skill sets

// const student = {
//   name: 'David',
//   age: 25,
//   skills: {
//     frontEnd: [
//       { skill: 'HTML', level: 10 },
//       { skill: 'CSS', level: 8 },
//       { skill: 'JS', level: 8 },
//       { skill: 'React', level: 9 }
//     ],
//     backEnd: [
//       { skill: 'Node',level: 7 },
//       { skill: 'GraphQL', level: 8 },
//     ],
//     dataBase:[
//       { skill: 'MongoDB', level: 7.5 },
//     ],
//     dataScience:['Python', 'R', 'D3.js']
//   }
// }
// First methood
// diffrent ways to clone a Object
// let newStudent = {...student}
// let copystu = Object.assign({},student)
// let deepcopynewStudent = JSON.parse(JSON.stringify(student))

// Adiing requaired value
// deepcopynewStudent.skills.frontEnd.push({skill: 'BootStrap',level: 8}) 
// deepcopynewStudent.skills.backEnd.push({skill: 'Express',level: 9}) 
// deepcopynewStudent.skills.dataBase.push({ skill: 'SQL',level: 8}) 
// deepcopynewStudent.skills.dataScience.push('SQL') 
// deepcopynewStudent.skills.frontEnd[deepcopynewStudent.skills.frontEnd.length] = {skill: 'BootStrap',level: 8}
// console.log(student.skills);
// console.log(deepcopynewStudent.skills);

// Nested Object destructuring
// let{skills:{frontEnd:[ar,ara]}}=deepcopynewStudent
// console.log("c",ara);

// second methood

// let deepcopynewStudent = JSON.parse(JSON.stringify(student))
// let x = deepcopynewStudent.skills
// let xa = deepcopynewStudent.skills

// for(let[key,val] of Object.entries(xa)){


//   if(key == "frontEnd") x[key].push({skill: 'BootStrap',level: 8})
//   if(key == "backEnd") x[key].push({skill: 'Express',level: 9})
//   if(key == "dataBase") x[key].push({skill: 'SQL',level: 8})
//   if(key == "dataScience") x[key].push("SQL")
// }
// console.log(deepcopynewStudent.skills.dataScience);
// console.log(student.skills.dataScience);









