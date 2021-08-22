const fs = require('fs');

function saveData(contents, dataPath) {
    const selfExport = 'module.exports = ' + JSON.stringify(contents, null, 4);
    fs.writeFile(dataPath, selfExport, err => {
        if (err) {
            throw err;
        }
    });
}


module.exports = { saveData };
