// 1.声明变量的类型后就不能赋值其他类型
// 声明一个变量a，同时指定它的类型为number
let a: number;

// a的类型设置为了number，在以后使用的过程中，a的值只能是number类型
a = 10;
// 不能将类型"string"分配给类型"number"
// a = 'hello';

let b: string;
b = 'hello';
// b = 12;

// 2.声明的变量可以和赋值同时进行
let c: boolean = true;

// 3.js中所有的函数是不考虑参数的类型和个数
// ts中函数可以定义形参类型和返回值类型
function sum(a: number, b: number): number {
    return a + b;
}
console.log(sum(123, 456)); // 579
// console.log(sum(123, '456')); // error: 类型“string”的参数不能赋给类型“number”的参数。

