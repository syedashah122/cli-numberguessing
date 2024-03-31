#! /usr/bin/env node
import inquirer from "inquirer";
// 1) computer will generate a random number = done.
// 2)user input for getting number = done.
// 3)compare user input with computer generated number and show result = done.
const randomNumber = Math.floor(Math.random() * 6 + 1);
console.log("welcome to the number guessing game");
const answers = await inquirer.prompt([
    {
        name: "userguessedNumber",
        type: "number",
        message: "please guess a number between 1-6",
    },
]);
if (answers.userguessedNumber === randomNumber) {
    console.log("congratulations you guessed right number.");
}
else {
    console.log("you guessed wrong number.");
}
