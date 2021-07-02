# TypeScript-Study
## 1.typeScript开发环境搭建

### 1.1下载安装Node.js 

官网下载安装

### 1.2使用npm全局安装typeScript

```
npm install -g typescript	
```

安装完输入tsc，有大量命令弹出，则安装完毕

### 1.3创建一个ts文件，并使用

```
// 01-hello.ts
console.log('hello ts')

// terminal
tsc 01-hello.ts

产生js文件
```

## 2.TypeScript基本类型

### 2.1 类型声明

```
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

```

![image-20210702162843436](img\image-20210702162843436.png)

### 2.2变量及函数类型

```
// 1.创建时声明类型
let aa: number;

// 2.字面量声明类型
let bb = 10;

// 3.使用|连接多个类型（联合类型）
let cc: 'boy' | 'girl';
// cc = 'true';
let dd: number | string;
dd = 10;
dd = 'hello'

// 4.any表示任意类型，设置为any后相当于没有ts的类型检测（显示）
let ee: any;
ee = 10;
ee = 'hello';
ee = true;
// 变量声明不指定类型，ts制定判断为类型为any（隐式）
let ff;
ff = 10;
ff = 'hello';

// 5.unknown 表示未知类型的值，是一个安全的any
let gg: unknown;
gg = 10;
gg = 'hello';

// any类型的值可以赋值给任意类型变量
// aa = ff
// unknown类型值不可以赋值为其他类型变量
// aa = gg

// 6.类型断言，可以用来告诉解析器实际类型
aa = gg as number;
bb = <number> gg;

// 7.函数返回值可以自定义，
// 没有返回值或者返回值为null,undefined就是void
// 返回值为never就是什么结果都不返回
function fn1(): void {
    return null || undefined;
}
function fn2(): never {
    throw new Error('error');
}
==============================================
// 1.object类型实际上没有限制，一般都是限制对象的属性
let mm: object;
mm = {}
mm = function () {}

// 2.在对象中的属性中指定类型，
// (1) 多了少了都不行，必须一模一样,
// (2) 但是加了?可以忽略
// (3) 批量忽略用[xxx: string]: any代替表示==> string类型属性名：任意类型属性值
let nn: {
    name: string,
    password: number,
    age?: number,
    [propName: string]: any,
}
nn = { 
    name: 'hello',
    password: 123, 
};

// 3.函数结构类型声明
let h: (a: number, b: number) => number ;
h = function(m: number, n: number): number {
    return m + n;
}

// 4.数组类型声明表示[]里面全都存的同一种类型数值
let e: string[];
let f: Array<number>;
e = ['1', '2', '3'];
f = [1, 2, 3];

// 5.元祖：固定长度（数量）的数组
let hh: [string, number];
hh = ['1', 2]

// 6.enum 枚举类型
// let i: {name: string, gender: 0 | 1};
enum Gender{
    Male = 0,
    Female = 1,
}
let i: {name: string, gender: Gender};
i = {name: 'hello', gender: Gender.Male};
```

