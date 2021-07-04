import {name,es6Class} from "./modules/home"
import {iamES7Spreader, isIncludesWorkingWithoutPollyfills} from "./modules/es7Modules";
import "./modules/styles.less"
const nameField = `Name of imported  : ${name}`


console.log(nameField)

const es6Object  = new es6Class()
console.log([1,3,4,2,3].includes(3))
console.log(es6Object.getAge())

//ES7 will not work until you make pollyfill setup with webpack
console.log({isIncludesWorkingWithoutPollyfills,iamES7Spreader})