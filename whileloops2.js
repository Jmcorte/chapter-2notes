const readLine = require('readline-sync');

let answer = readLine.question("Enter Y if you want to quit, enter N:");
while (answer != "Y" && answer !="N"){
    console.log("Invalid choice.")
    answer = readLine.question(" Retry. Enter Y or N:");
}
console.log("rest of program");


let response = readLine.question("Enter Y if you want to quit, enter N:");
while (response!= "Y" && response!="N" && response!= "y" && response!= "n"){
    console.log("Invalid choice.")
    response = readLine.question(" Retry. Enter Y or N:");
}
console.log("rest of program");

let  = readLine.question("Enter A :");
while (response!= "A" && response!="B" && response!= "C"){
    console.log("Invalid choice.")
    response = readLine.question(" Retry. Enter Y or N:");
}
console.log("rest of program");
