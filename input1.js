const readLine = require('readline-sync');

let answer = readLine.question("Hello User:");
console.log(answer);
let response = readLine.question("Want to hear a joke?:");
if (response  == "Yes"){
    console.log(`why wasn't the car able to continue operating?`);
    console.log(`it ran out of gas :)`);
} else{
    console.log("Alright then >:(");
}

//2 and 3
let num = Number(readLine.question("Enter a number: "));
if (num % 2 == 0){
    console.log("It's divisible by 2");
} else {
    console.log("Not divisible by 2");
}
if (num % 3 == 0){
    console.log("It's divisible by 3");
} else {
    console.log("Not divisible by 3");
}
if (num % 4 == 0){
    console.log("It's divisible by 4");
} else {
    console.log("Not divisible by 4");
}
if (num % 5 == 0){
    console.log("It's divisible by 5");
} else {
    console.log("Not divisible by 5");
}
if (num % 6 == 0){
    console.log("It's divisible by 6");
} else {
    console.log("Not divisible by 6");
}
//4
let guess = Number(readLine.question("Enter number: "));
if (guess == 16){
    console.log("You won!");
} else if (guess < 16){
    console.log("Too small");
} else if (guess > 16){
    console.log("Too big")
}
//5 and 6
let cost = Number(readLine.question("Enter cost: "));
if (cost <= 0){
    console.log("invalid");
} else {
    let tax = cost * .08;
    let newTotal = cost + tax;
    console.log(`Your bill is $${newTotal.toFixed(2)}`);
}
//7 and 8
let mealCost = Number(readLine.question("Enter cost: "));
if (mealCost <= 0){
    console.log("invalid")
} else {
    let service = readLine.question("How was the service? (great/good/average) : ");
    let tip = 0;
    if (service == "great"){
        tip = mealCost * .20;
    } else if (service == "good"){
        tip = mealCost * .15;
    } else if (service == "average"){
        tip = mealCost * .10;
    }
    let totalBill = cost + tip;
    console.log(`The total bill should be $${totalBill.toFixed(2)}`);
}