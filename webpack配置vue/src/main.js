//使用commonjs的模块化规范
const { add, bdd } = require("./js/math");
console.log(add(10, 20));
console.log(bdd(10, 20));

//使用ES6的模块化规范
import { name, age, sex } from "./js/info";
console.log(name)
console.log(age)
console.log(sex)

// //依赖css文件
require("./css/normal.css")

// //依赖less文件
require("./css/special.less")
document.writeln("<h2>你好啊，星期日！</h2>")

//使用vue开发
import Vue from 'vue'

const app = new Vue({
    el: "#app",
    data() {
        return {
            message: "hello,webpack"
        }
    }
})