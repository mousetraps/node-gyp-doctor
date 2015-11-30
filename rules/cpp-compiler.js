/*
Verifies that C++ compiler is installed.

"C:\Program Files (x86)\Microsoft Visual Studio 14.0\VC\bin\cl.exe"
*/
var fs = require('fs');
var errors = require('./errors');

var COMPILER_LOCATION = 'C:\\Program Files (x86)\\Microsoft Visual Studio 14.0\\VC\\bin\\cl.exe';

exports.verify = function () {
    if (fs.existsSync(COMPILER_LOCATION)) {
        return;
    }
    return {
        result: errors['no-compiler'].message,
        resolution: errors['no-compiler'].resolve
    };
}


exports.error = function () {
    
}

exports.repair = function () {
    // console.log('cannot be repared');
    return;
}