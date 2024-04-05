import inquirer from "inquirer";
import chalk from "chalk";
//Currency Converter
let convertion = {
    "PKR": {
        "USD": 0.0036,
        "GBP": 0.0029,
        "PKR": 1,
    },
    "GBP": {
        "USD": 1.26,
        "PKR": 350,
        "GBP": 1,
    },
    "USD": {
        "PKR": 277.90,
        "GBP": 0.79,
        "USD": 1,
    },
};
const answer = await inquirer.prompt([
    {
        name: "from",
        type: "list",
        choices: ["PKR", "USD", "GBP"],
        message: chalk.greenBright.bold.italic("Select your currency:"),
    },
    {
        name: "to",
        type: "list",
        choices: ["PKR", "USD", "GBP"],
        message: chalk.magentaBright.bold.italic("Select your convertion currency:"),
    },
    {
        name: "amount",
        type: "number",
        message: chalk.cyanBright.bold.italic("Enter your convertion amount:"),
    },
]);
const { from, to, amount } = answer;
if (from && to && amount) {
    let result = convertion[from][to] * amount;
    console.log(chalk.gray.bold.italic("Your convertion from ") +
        chalk.yellowBright.bold.italic(from) +
        chalk.gray.bold.italic(" to ") +
        chalk.yellowBright.bold.italic(to) +
        chalk.gray.bold.italic(" is ") +
        chalk.redBright.bold.italic(result));
}
else {
    console.log("invalid input");
}
