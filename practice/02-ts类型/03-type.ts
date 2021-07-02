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