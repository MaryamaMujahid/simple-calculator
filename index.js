#! /usr/bin/env node
import inquirer from "inquirer";
//Asking Question from users through inquirer
let answers = await inquirer.prompt([
    { message: "enter your first number", type: "number", name: "firstnumber" },
    { message: "enter your second number", type: "number", name: "secondnumber" },
    {
        message: "select one operator to perfom operations",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    }
]);
// coditional statment If - Else
if (answers.operator == "Addition") {
    console.log(answers.firstnumber + answers.secondnumber);
}
else if (answers.operator == "Subtraction") {
    console.log(answers.firstnumber - answers.secondnumber);
}
else if (answers.operator == "Multiplication") {
    console.log(answers.firstnumber * answers.secondnumber);
}
else if (answers.operator == "Division") {
    console.log(answers.firstnumber / answers.secondnumber);
}
else
    console.log("Invalid Input");
