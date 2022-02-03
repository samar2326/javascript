const { type } = require("os");

let utility = {
    Image: ["png", "bmp", "gif", "jpeg", "jpg", "eps", "raw", "tif", "tiff"],
    Video: ["mp4", "mkv", "wmv","DAT"],
    Archives: ["zip", "7z", "rar", "tar", "gz", "ar", "iso", "xz"],
    Documents: ["docx", "doc", "txt", "pdf", "xlsx", "xls", "odt", "ods", "odp", "odg", "odf", "ps", "tex"],
    App: ["exe", "dmg", "pkg", "deb"]
}
function isExtPresent(extension) {
    extension = extension.slice(1);
    // console.log(extension)
    for (extType in utility) {
        let currTypeArray = utility[extType];
        for (let i = 0; i < currTypeArray.length; i++) {
            if (extension == currTypeArray[i]) {
                //console.log(extType)
                return extType;
            }
            return "others";
        }
    }
    

}

module.exports = {
    isExtPresentKey: isExtPresent
}