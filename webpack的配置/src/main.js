//使用commonjs的模块化规范
const { add, bdd } = require("./js/math");
console.log(add(10, 20));
console.log(bdd(10, 20));

//使用ES6的模块化规范
import { name, age, sex } from "./js/info";
console.log(name)
console.log(age)
console.log(sex)