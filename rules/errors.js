var child_process = require('child_process');

module.exports = {
    'no-compiler': {
        message: 'Could not find VC++ compiler',
        resolve: 'Please install the VC++ compiler and Windows SDK according to the instructions at: http://google.com',
        autoResolve: function () {
            console.log('Please install the VC++ compiler according to the instructions at: http://google.com');
        }
    },
    'no-windows-sdk': {
        message: 'Could not find Windows SDK',
        resolve: 'We noticed you\'re using the VC++ Build Tools Preview.'
    },
    'npm-config-python': {
        message: 'npm not properly configured w/ python version',
        resolve: 'Please run: `npm config set --python python2.7` to set the correct version.',
        autoResolve: function () {
            console.log('would you like to configure with the correct python version?');
            if (false) {
                child_process.execSync('npm config set python python2.7');
                // check for error
            }
        }
    },
    'no-python2.7': {
        message: 'Python 2.7 cannot be found',
        resolve: 'Please install Python 2.7 from ... and run `npm config set --python python2.7` if you haven\'t already',
        autoResolve: function() {
            console.log('Would you like to install Python 2.7 locally?');
            // install Python 2.7 locally
        }
    },
    'node-outdated': {
        message: 'Your version of Node.js is outdated. The newest version is ...',
        resolve: 'Please download the latest version at ...',
        autoResolve: function () {
            console.log('Please download the newest version at ...');
        }
    }
}