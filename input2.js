const readLine = require('readline-sync');

//1
let num1 = Number(readLine.question("Give me a number: "));
let num2 = Number(readLine.question("Give me a  second number: "));
console.log(`${num1} + ${num2} = ${num1 + num2}`);

//2
let num3 = Number(readLine.question("Give me a number: "));
let num4 = Number(readLine.question("Give me a  second number: "));
console.log(`${num3} - ${num4} = ${num3 - num4}`);

//3
let num5 = Number(readLine.question("Give me a number: "));
let num6 = Number(readLine.question("Give me a  second number: "));
console.log(`${num5} * ${num6} = ${num5 - num6}`);

//4
let num7 = Number(readLine.question("Give me a number: "));
let num8 = Number(readLine.question("Give me a  second number: "));
console.log(`${num7} % ${num8} = ${num7 - num8}`);