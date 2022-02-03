let fs = require("fs");
let chalk = require("chalk");
let figlet = require("figlet");

function validDir(dirPath) {

    console.log(dirPath)
    if (dirPath == undefined) {
        console.log(chalk.bold(chalk.bgGrey(chalk.whiteBright(chalk.underline("Kindly Enter The Right Path")))));
        return false;
    }
    else {
        let doesExist = fs.existsSync(dirPath);
        if (doesExist) {
            // console.log(chalk.bold(chalk.bgGrey(chalk.whiteBright(chalk.underline("Entered The Right Path")))));
            return true;
        }
        else {
            console.log(chalk.bold(chalk.bgGrey(chalk.whiteBright(chalk.underline("Kindly Enter The Right Path")))));
            return false;
        }
    }

}
module.exports = {
    isValidKey : validDir
}