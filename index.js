#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let myBalance = 10000;
let myNumber = "03312345678";
let myPin = 1974;
console.log(chalk.rgb(0, 255, 0)(`Welcome to Muntazir Mohammad - EasyPaisa Clone CLI`));
console.log(chalk.yellow.bold(`The Phone number is ${myNumber}`));
console.log(chalk.yellow.bold(`The Pin is ${myPin}`));
let number = await inquirer.prompt([
    {
        name: "numberAnswer",
        message: "Enter Your Phone Number",
        type: "string",
    }
]);
let pin = await inquirer.prompt([
    {
        name: "pinAnswer",
        message: "Enter Your Pin",
        type: "number",
    }
]);
if (number.numberAnswer === myNumber && pin.pinAnswer === myPin) {
    let operation = await inquirer.prompt([
        {
            name: "operationAns",
            message: "Select one option",
            type: "list",
            choices: ["Transfer Amount", "Check Balance"],
        }
    ]);
    if (operation.operationAns === "Transfer Amount") {
        let transferOptions = await inquirer.prompt([
            {
                name: "transferOptionsAns",
                message: "Select one option",
                type: "list",
                choices: ["Transfer to another EasyPaisa Account", "Transfer to a Bank Account"],
            }
        ]);
        if (transferOptions.transferOptionsAns === "Transfer to another EasyPaisa Account") {
            let receiverNumber = await inquirer.prompt([
                {
                    name: "receiverNumberAns",
                    message: "Enter Receiver's Phone Number",
                    type: "number",
                }
            ]);
            let easypaisaAmount = await inquirer.prompt([
                {
                    name: "easypaisaAmountAns",
                    message: "Enter the amount to transfer",
                    type: "number",
                }
            ]);
            if (easypaisaAmount.easypaisaAmountAns <= myBalance) {
                myBalance -= easypaisaAmount.easypaisaAmountAns;
                console.log(chalk.yellow.bold(`You successfully transferred ${easypaisaAmount.easypaisaAmountAns} to ${receiverNumber.receiverNumberAns}, Remaining Balance is ${myBalance}`));
            }
            else {
                console.log(chalk.red.bold(`Your transaction was unsuccessfull, Insufficient balance!`));
            }
        }
        else {
            let receiverBank = await inquirer.prompt([
                {
                    name: "receiverBankAns",
                    message: "Select Recevier's Bank",
                    type: "list",
                    choices: ["Bank Al Habib", "Standard Chartered", "Habib Bank", "Bank Al Falah", "Mezzan Bank", "Habib Metro"]
                }
            ]);
            let receiverAccountNumber = await inquirer.prompt([
                {
                    name: "receiverAccountNumberAns",
                    message: "Enter Receiver's Account Number",
                    type: "number",
                }
            ]);
            let bankAmount = await inquirer.prompt([
                {
                    name: "bankAmountAns",
                    message: "Enter the amount to transfer",
                    type: "number",
                }
            ]);
            if (bankAmount.bankAmountAns <= myBalance) {
                myBalance -= bankAmount.bankAmountAns;
                console.log(chalk.yellow.bold(`You successfully transferred ${bankAmount.bankAmountAns} to the account Number: ${receiverAccountNumber.receiverAccountNumberAns} of ${receiverBank.receiverBankAns}, Remaining Balance is ${myBalance}`));
            }
            else {
                console.log(chalk.red.bold(`Your transaction was unsuccessful, Insufficient Balance!`));
            }
        }
    }
    else {
        console.log(chalk.yellow.bold(`Your Current Balance is ${myBalance}`));
    }
}
else {
    console.log(chalk.red.bold(`Incorrect Number or Pin!`));
}
