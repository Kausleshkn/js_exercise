// task 1
// create an empty set

// let mySet = new Set()
// console.log(mySet);

// task 2
// Create a set containing 0 to 10 using loop

// let mySet = new Set()

// for(let i=0; i<=10;i++){

//     mySet.add(i)
// }
// console.log(mySet);

// Remove an element from a set

// mySet.delete(5)
// console.log(mySet);

// Clear a set

// mySet.clear()
// console.log(mySet);

// task 3

// Create a set of 5 string elements from array

// let arr = ["a",'b',"c",'d','e','b','a', 'b']

// let mySet = new Set()

// for(let ar of arr){

//     mySet.add(ar)

// }
// console.log(mySet);

// task 4
// Create a map of countries and number of characters of a country

// const countries = ['Finland', 'Sweden', 'Norway']
// let myMap = new Map()

// for (let con of countries) {
//     let len = con.length
//     myMap.set(con, len)
// }
// console.log(myMap);

// let newMap = new Map([['Finland', 8], ['Sweden', 'Norway']])

// console.log(newMap);

//  just for checking 

// const languages = ['English','Finnish','English','French','Spanish','English','French',]

//   const langSet = new Set(languages)
  
//   const counts = []
  
//   for (const l of langSet) {
//     const filteredLang = languages.filter((lng) => lng === l)
//     // console.log(filteredLang)
//     counts.push({ lang: l, count: filteredLang.length })
//   }
//   console.log(counts)

// task 5
// Find a union b

// const a = [4, 5, 8, 9]
// const b = [3, 4, 5, 7]
// let spr = [...a,...b]

// let c = new Set(spr)

// console.log(c);

// task 6
// Find a intersection b

// const a = [4, 5, 8, 9]
// const b = [3, 4, 5, 7]

// let d = new Set(b)


//     let e = a.filter(v => d.has(v))
//   let f = new Set(e)

// console.log(f);

// const a = [4, 5, 8, 9]
// const b = [3, 4, 5, 7]

// let arr = []

// for(let x of a){

//     let n = 0
//     let v = b.filter(v=>v ==x)
//     if( v[n] != undefined ) arr.push(v[n])

// }
// console.log(new Set(arr));







