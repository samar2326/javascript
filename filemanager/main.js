#!/usr/bin/env node


let inputArr = process.argv.slice(2); //taking input from command line ..since first two values are "node" and "main.js"
let fs = require("fs");
let chalk = require("chalk");
let path = require("path");
let commands = path.join(__dirname,"commands");
let helpObj = require(path.join(commands,"help"));
let treeObj = require(path.join(commands,"tree"))
let organiseObj = require(path.join(commands,"organise"))

//let dirPath = process.cwd(); //get the path of current working directory
let dirPath = process.cwd();
let choice = inputArr[0];
if(inputArr.length  > 1){
    dirPath = inputArr[1];
}

    

switch (choice) {
    case "organise": organiseObj.organiseKey(dirPath);
        break;
    case "tree": treeObj.treeKey(dirPath);
        break;
    case "help": helpObj.helpKey();
        break;
    default: helpObj.helpKey();
}
