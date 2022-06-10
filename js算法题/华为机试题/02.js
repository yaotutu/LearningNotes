const str = readline();
const target = readline();
let count = 0;
const strFinal = str.toUpperCase();
const targetFinal = target.toUpperCase();
for (const iterm of strFinal) {
  if (iterm === targetFinal) {
    count = count + 1;
  }
}
console.log(count);
//str.toUpperCase(); 转换成大写
//str.toLowerCase()  转换成小写