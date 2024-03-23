#! /usr/bin/env node
import inquirer from "inquirer";
const randomeNumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: "Please guess a number from 1 to 6: ",
    },
]);
if (answer.userGuessNumber === randomeNumber) {
    console.log("Congratz! you guess correct number.");
}
else {
    console.log("You guess wrong number.");
}
