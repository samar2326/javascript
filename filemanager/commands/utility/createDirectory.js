let fs = require("fs");
function createDir(dirPath) {
    if (fs.existsSync(dirPath) == false) { //check whether the dir is present or not
        fs.mkdirSync(dirPath);
        //console.log("directory created")
    }

}
module.exports = {
    createKey : createDir
}