/*
Verifies that Python 2.7 is installed and available in PATH
*/
var child_process = require('child_process');
var fs = require('fs');
var path = require('path');

exports.verify = function () {
    if (!findPython27()) {
        return {
            result: 'Python 2.7 is not installed or can\'t be found',
            resolution: 'Please install Python 2.7 from ... and run `npm config set --python python2.7` if you haven\'t already.'
        };
    }

    return;
}

exports.repair = function () {
    console.log("Install Python 2.7 to resolve");
}

function findPython27() {
    var stdout = child_process.execSync('python.exe -V');
    if (stdout.toString().startsWith('Python 2.7')) {
        return true;
    }

    var rootDir = process.env.SystemDrive || 'C:\\';
    if (rootDir[rootDir.length - 1] !== '\\') {
        rootDir += '\\'
    }

    var pythonPath = path.resolve(rootDir, 'Python27', 'python.exe')
    if (fs.existsSync(pythonPath)) {
        return true;
    }
    return false;
}