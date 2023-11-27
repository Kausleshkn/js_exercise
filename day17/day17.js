// task 1
// Read the countries API using fetch and print the name of country, capital, languages, population and area.

// document.getElementById("btn").addEventListener("click", datareq)
// const countriesAPI = 'https://restcountries.com/v2/all'
// const catsAPI = 'https://api.thecatapi.com/v1/breeds'

// using Promise
// function datareq() {

//     fetch(countriesAPI)
//         .then(res => res.json()).then(data => {
//             for (let val of data) {

//                 document.getElementById("data").innerHTML = val.name
//                 console.log("Country Name",val.name);
//                 console.log("Country Capital",val.capital);
//                 console.log("Country Language",val.languages);
//                 console.log("Country Population",val.population);
//                 console.log("Country Area",val.area);   
//             }
//         }).catch(error => console.log(error))
// }

// using asyinc await

// async function datareq() {

//     try {
//         let response = await fetch(countriesAPI)
//         if (!response.ok) throw Error(response.statusText)
//         let data = await response.json()
//         let output = document.getElementById("alldata")

//         for (let val of data) {

//             // document.getElementById("data").innerHTML = val.name
//             // console.log("Country Name", val.name);
//             // console.log("Country Capital", val.capital);
//             // console.log("Country Language", val.languages);
//             // console.log("Country Population", val.population);
//             // console.log("Country Area", val.area);
//             output.innerHTML += `
//             <div>Country Name => ${val.name}</div>
//             <div>Country Capital => ${val.capital}</div>
//             <div>Country Language => ${val.languages}</div>
//             <div>Country Population => ${val.population}</div>
//             <div>Country area => ${val.area}</div> <hr>
//            `
//         }
//     } catch (error) {
//         console.log(error)
//     }
// }

// some practical of async javascript methood => Promise, settimeout,setinterval, async funstion

// promise

// console.log("start");

// let arr = [1, 2, 3, 4, 5, 6]
// let err = "hello! it's rejected"
// let pro = new Promise((req, res) => {
//     if (arr.length > 5) {
//         req(arr)
//     } else { res(err) }
// })
// .then(data=>console.log(data), err=>console.log(err)).catch(err=> console.log(err)).finally(()=> console.log("Finally methood"))

// console.log("end");

// Settimeout

// console.log("Start");
// setTimeout((a,b)=>console.log(a+b),2000,10,15)
// console.log("end");

// setInterval

// console.log("Start");
// let x = setInterval((a) => {
//     return console.log(a+= a++);

// }, 2000,5);
// console.log("end");
// clearInterval(x) // whithout clearinterval it's running coutinue

// ascnc await

// console.log("Start");
// let fun = async (a,b)=>{ 
//     let x = await a+b
//     console.log(x);   
// }
// fun(2,2) // it's not async without await keyword
// console.log("End");

// task 2
// Print out all the cat names in to catNames variable.

// document.getElementById("btn").addEventListener("click", datareq) // does not work due to hosting of funstion expration but works in funstion declaration

// const countriesAPI = 'https://restcountries.com/v2/all'
// const catsAPI = 'https://api.thecatapi.com/v1/breeds'

// using async funstion

// let datareq = async ()=>{

//     try {
//         let res = await fetch(catsAPI)
//     if(!res.ok) throw Error(res.statusText)
//     let data = await res.json()
//     data.forEach(element => console.log(element.name));

//     } catch (error) {
//         console.log(error);

//     }   
// }

// document.getElementById("btn").addEventListener("click", datareq)

// using Promise

// async function datareq(){

// fetch(catsAPI).then(res=>res.json()).then(data=>data.forEach(data=> console.log(data.name))).catch(err=>console.log(err))

// }

// task 3
// Read the cats api and find the average weight of cat in metric unit.

// document.getElementById("btn").addEventListener("click", datareq)

// const countriesAPI = 'https://restcountries.com/v2/all'
// const catsAPI = 'https://api.thecatapi.com/v1/breeds'

// async function datareq() {

//     fetch(catsAPI).then(res => res.json()).then(data => {
//         let arr = []
//         let temp = []
//         data.forEach(val => {
//             let cn = 0
//             data.forEach(ele => {

//                 if (ele.weight.metric === val.weight.metric) cn++
//             })
//             if (!temp.includes(val.weight.metric)) {
//                 temp.push(val.weight.metric)
//                 arr.push({ metricweight: val.weight.metric, count: cn })
//             }
//         })
//         console.log(arr);  
//         let max = 0
//         arr.forEach(val => {

//             if (val.count > max) max = val.count
//         })
//         arr.forEach(val => {
//             if (max == val.count) console.log(val.metricweight);

//         })
//     }).catch(err => console.log(err))
// }

// task 4
// Read the countries api and find out the 10 largest countries
// Read the countries api and count total number of languages in the world used as officials.

// document.getElementById("btn").addEventListener("click", datareq)

// const countriesAPI = 'https://restcountries.com/v2/all'

// async function datareq(){

//     let conarea = []
//     let offilang = []
//     try {
//         let response = await fetch(countriesAPI)
//         if(!response.ok) throw Error(response.statusText)
//         let data = await response.json()
//         for(let val of data){
//             conarea.push({Countryname: val.name, Area : val.area})
//             let lang = val.languages
//             for(let la of lang){

//                 offilang.push(la.name);   
//             }     
//         }
//         for(let i =0; i<conarea.length;i++){
//             for(let j =i;j<conarea.length;j++){

//                 if(conarea[i].Area <conarea[j].Area){

//                     let temp = conarea[i]
//                     conarea[i] = conarea[j]
//                     conarea[j] = temp
//                 }
//             }
//         }
//         // console.log(conarea.slice(0,10));
//         let langnum = offilang.filter((v,i,ar)=> ar.indexOf(v) ==i)
//         console.log(langnum.length);
        
        
        
//     } catch (error) {
//         console.log(error);
        
//     }
// }
// // datareq()