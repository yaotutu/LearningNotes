
//方法一
let str = "hello nowcoder";

let count = 0;
for (const item of str) {
  if (item === " ") {
    count = 0;
  } else {
    count = count + 1;
  }
}
console.log(count);

//for..of 循环遍历字符串

//方法二
let str = readline()
let tmp = str.lastIndexOf(" ")
let res = 0
// console.log('res: ', res);

for(;tmp+1<str.length;tmp++){
    res = res+1
}
console.log(res);
