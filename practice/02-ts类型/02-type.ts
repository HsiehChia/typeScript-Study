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