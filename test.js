
// let convertRgbToHexa = (rgb) => {
// let convert = rgb.replace(/[A-Z a-z ,()]/gi,"")

//     let hexacol = "#"
//     for (let i = 0; i < convert.length; i += 3) {
//         let hexval = +convert.slice(i, i + 3)
//         let hexa = (hexval).toString(16)

//         hexacol += hexa
//     }

//     return hexacol;
// }
// console.log(convertRgbToHexa("rgb(56,39,129)"));


// ******************************************

// let convertHexaToRgb = (hex) => {

//     let hexarr = []
//     for (let i = 0; i < hex.length; i += 2) {
//         let hexval = parseInt(hex.slice(i, i + 2), 16)
//         hexarr.push(hexval)
//     }

//     let rgbcol = `rgb(${hexarr[0]},${hexarr[1]},${hexarr[2]})`

//     return rgbcol;
// }
// console.log(convertHexaToRgb("2333909"));


// const languages = ['English','Finnish','English','French','Spanish','English','French',]

//   const langSet = new Set(languages)

//   const counts = []

//   for (const l of langSet) {
//     const filteredLang = languages.filter((lng) => lng === l)
//     // console.log(filteredLang)
//     counts.push({ lang: l, count: filteredLang.length })
//   }
//   console.log(counts)


// let x = "I love teaching. If you do not love teaching what else can you love."
// let cn = 0
// let a = x.match(/\w+/g)

// a.forEach(e => {
//   console.log(cn);
//   a.forEach(v => {
//     console.log(cn);

//     if (v === e) cn++; console.log(cn);
//   })
// })

// testing

// Array.prototype.myMap = function(cb){
//     let arr = []
//     for (let i = 0; i < this.length; i++) {
//         arr.push(cb(this[i],i,this))
//     }
//     // this.forEach(v=>arr.push(cb(v)))
//     return arr;
// }
// let arrs = [1, 2, 3]
// let x = arrs.myMap((v,i,ar) => console.log(i,ar))

// console.log(x);