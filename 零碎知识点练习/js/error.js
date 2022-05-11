const err = new Error("bugggggggg");
// error 是一个构造函数,返回的是一个对象.
// err.name是 错误表亲啊 Error
// err.message是返回的错误信息,即行参 bugggggggg
// err是一个对象,当然也可以修改err.name属性
// err.name = "66666";
// console.log("err :>> ", err.name);
// console.log("err.message :>> ", err.message);

// throw 抛出错误信息,并停止程序的运行.
// throw err;
// console.log("这句话在throw之后,不会被执行");
// console.log("f :>> ", object);

// console.log(b);
// console.log("在我之前有一个错误,我看看我会不会运行");
// 出现错误以后,下面的代码会停止运行

try {
  console.log(b);
} catch (error) {
  console.log("error :>> ", error);
}
console.log("我在一个错误后面,我的错误被 try catch捕获, 我会被正常直行的");
