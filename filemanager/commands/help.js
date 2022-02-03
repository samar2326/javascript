let fs = require("fs");
let chalk = require("chalk");
let figlet = require("figlet");
let path = require("path");
function helpFunc() {
    let helpPath = path.join(__dirname,"assets");
    // console.log(path.join(helpPath,"help.txt"))
    let data = fs.readFileSync(path.join(helpPath,"help.txt"));

    let dataArray = "" + data
    dataArray = dataArray.split("\n");

    console.log(chalk.bgCyan(chalk.whiteBright(figlet.textSync("H E L P     C O M M A N D S"))));

    for (let i = 1; i < dataArray.length; i++) {

        console.log(chalk.bold(chalk.bgGrey(chalk.whiteBright(chalk.underline(dataArray[i])))));

    }
}
module.exports = {
    helpKey: helpFunc
}