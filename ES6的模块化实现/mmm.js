//1-导入的是对象{}中定义的变量
import { flag, sum } from "./aaa.js"

if (flag) {
    console.log("小明是天才，哈哈哈哈哈")
    console.log(sum(50, 70))
}

//2-直接导入export定义的变量
import { num1, height } from "./aaa.js"

console.log(num1)
console.log(height)

//3-导入export 定义的函数
import { mul, Person } from "./aaa.js"
console.log(mul(50, 70))

const p = new Person()
p.run()

//4-导入export default   默认只能由一个default
import addr from "./aaa.js"

addr("不想熬夜啊啊啊啊 ")

//5-统一全部导入
// import {flag, num,num1,height,Person,mul,sum} from "./aaa.js"

import * as aaa from "./aaa.js"
console.log(aaa.flag)
console.log(aaa.height)