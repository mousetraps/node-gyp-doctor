/*
Verifies that msvs_version is set to current VS version
*/
var child_process = require('child_process');
exports.verify = function () {
    // return 'ahh';

    var stdout = child_process.execSync('npm config get msvs_version');
    if (!stdout.toString().startsWith('2015')) {
        return {
            result: 'npm not configured w/ msvs_version',
            resolution: 'Please run: `npm config set msvs_version 2015` to set the correct version.'
        };
    }
}

exports.repair = function () {

}

exports.verify();