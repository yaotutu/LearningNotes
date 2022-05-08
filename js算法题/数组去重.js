// 2022/05/08/ 10:23:30
// 数组B中的元素依次与数组A中的元素做比较.两层嵌套的for循环.

let arr = [1, 4, 8, 9, 0, 2, 5, 9, 4, 5, 1];
let newArr = [];
newArr[0] = arr[0];
for (let i = 0; i < arr.length; i++) {
  // 外层循环,依次访问每一个元素
  const element = arr[i];
  for (let k = 0; k < i; k++) {
    // 内层循环,每次都从第一个元素开始,依次与外层的元素做比较
    // 如果相等,则用break,跳出这一层的for循环,直接进入外层的下一个循环
    // 如果不等,则将新元素push进新数组里面
    if (newArr[k] == arr[i]) {
      break;
    }
    if (k == newArr.length - 1) {
      newArr.push(arr[i]);
    }
  }
}
console.log("newArr :>> ", newArr);
