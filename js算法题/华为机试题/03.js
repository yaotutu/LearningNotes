const readline = require('readline');
let str = readline()

let strArr = str.split(" ")
let uniStrArr = new Set(strArr)
let uniArr = [...uniStrArr]
console.log('uniArr: ', uniArr);
uniArr.sort((a,b) => {
    return a-b
})
console.log('uniArr: ', uniArr);

/* 
 * 利用new set() 去重的时候,参数必须是一个数组,不能是字符串
 * 字符串的split方法,可以把字符串按照一定规则转换成字符串
 * str.split(",") 按照“,” 逗号进行分割,转换成字符串
 */
