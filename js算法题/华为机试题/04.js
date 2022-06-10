// // 字符串处以8 向上取整 在乘8 即可得到一共的字符串长度,然后在填充.
// let str = "abc"
// finalLength = (Math.ceil(str.length/8))*8;
// console.log('finalLength: ', finalLength);
// let finalStr=str.padEnd(finalLength,'0')
// console.log('finalStr: ', finalStr);
// let arr = []

// for(let i=8;i <= finalStr.length; i = i+8){
//     // arr.push(finalStr.substring(i-8,i-1))
//     console.log(finalStr.substring(0,8));
// }
// console.log(arr);
// // arr.forEach((item) => {
// //     console.log(item);
// // })


let str = "abc00000"
console.log(str.substring(0,8));