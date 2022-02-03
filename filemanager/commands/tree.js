let fs = require("fs");
let chalk = require("chalk");
let path = require("path");
let utilityPath = path.join(__dirname,"utility");
let isValidObj = require(path.join(utilityPath,"validDirectory"));

function printTreeFunc(dirPath) {
    if (isValidObj.isValidKey(dirPath)) {
        console.log("is valid")
        printTreeHelper("", dirPath); //created a seperate function because it has to be recurrsively called and all other subfolders are valid


    }
}

function printTreeHelper(indent, dirPath) {

    isFile = fs.lstatSync(dirPath).isFile(); //checking whether its a file or folder
    if (isFile == true) {
        let fileName = path.basename(dirPath);
        console.log(chalk.greenBright(indent + "|--- " + fileName)); //if its a file print it
    }
    else {//if its a folder print folder name and all the file and folder recurrsively
        let dirName = path.basename(dirPath);
        console.log(chalk.greenBright(indent + "!--- " + dirName));
        let children = fs.readdirSync(dirPath);//checking all the folders that is inside
        for (let i = 0; i < children.length; i++) {
            let childPath = path.join(dirPath, children[i]);
            printTreeHelper(indent + "\t", childPath);
        }
    }

}
module.exports = {
    treeKey: printTreeFunc
}