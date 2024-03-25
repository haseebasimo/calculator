import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter first number", type: "number", name: "FirstNumber" },
    { message: "Enter second number", type: "number", name: "secondNumber" },
    { message: "Select one of the operator to perform operation",
        type: "list",
        name: "operator",
        choices: ["addition", "Subtraction", "Multiplication", "Division"],
    },
]);
if (answer.operator === "addition") {
    console.log(answer.FirstNumber + answer.secondNumber);
}
else if (answer.operator === "subtraction") {
    console.log(answer.FirstNumber - answer.secondNumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.FirstNumber * answer.secondNumber);
}
else if (answer.operator === "Division") {
    console.log(answer.FirstNumber / answer.secondNumber);
}
else {
    console.log("Please slect valid number");
}
//
