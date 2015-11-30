var child_process = require('child_process');

exports.verify = function () {
    var stdout = child_process.execSync('npm config get python');
    if (!stdout.toString().startsWith('python2.7')) {
        return {
            result: 'npm not configured w/ python version',
            resolution: 'Please run: `npm config set python python2.7` to set the correct version.'
        };
    }
    
    return;
}