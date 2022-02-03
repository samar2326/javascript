let fs = require("fs");
let chalk = require("chalk");
let figlet = require("figlet");
let path = require("path");
let utility  = path.join(__dirname,"utility");
let isValidObj = require(path.join(utility,"validDirectory"));
let isCreate = require(path.join(utility,"createDirectory"));
let isExtPresentObj = require(path.join(utility,"utility"));



function organiseFunc(dirPath) {
    if (isValidObj.isValidKey(dirPath)) {
        let destPath = path.join(dirPath, "Files");
        isCreate.createKey(destPath);
        let childrens = fs.readdirSync(dirPath);
        let isOrganised = false;
        for (let i = 0; i < childrens.length; i++) {
            //console.log(childrens[i]);
            let childPath = path.join(dirPath, childrens[i]);
            let isfile = fs.lstatSync(childPath).isFile();
            if (isfile == true) {
                //console.log(childPath)
                isOrganised=true;
                organiseHelperfunc(childPath, destPath);
            }
        }
        if(isOrganised){
                console.log(chalk.bgCyan(chalk.whiteBright( " F I L E S   O R G A N I S E D   S U C E S S F U L L Y ")));
        }
        else {
            console.log(chalk.bgCyan(chalk.whiteBright( " F I L E S   A R E   A L R E A D Y   O R G A N I S E D ")));
        }
    }
}

function organiseHelperfunc(srcPath, destPath) {
    let basename = path.basename(srcPath);
    let extension = path.extname(basename);
    //console.log(extension);
    let extType = isExtPresentObj.isExtPresentKey(extension);
    let newDestPath = path.join(destPath, extType);
    isCreate.createKey(newDestPath);
    let finalDestPath = path.join(newDestPath, basename);
     fs.copyFileSync(srcPath, finalDestPath);
     fs.unlinkSync(srcPath);
     
}



module.exports = {
    organiseKey: organiseFunc
}