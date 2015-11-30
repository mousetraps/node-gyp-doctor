var fs = require('fs');
var path = require('path');
var rules = require('./rules');

var results = [];

for (var verifyName in rules) {
    var verify = rules[verifyName];
    var verifyResult;
    console.info("Running verification", verifyName)

    if (typeof (verify.verify) === 'function') {
        verifyResult = verify.verify() || { result: null, resolution: null };
    } else {
        verifyResult = {
            result: 'Skipped verification',
            resolution: '...'
        };
    }
    appendVerifyResult(verifyName, verifyResult.result, verifyResult.resolution, null);
}

printVerifyResult();

function appendVerifyResult(verifyName, result, resolution, autoResolve) {
    results.push({
        name: verifyName,
        result: result,
        resolution: resolution
    });
}

function printVerifyResult() {
    console.log('\r\nVerification Results:');
    var errorCount = 0;
    for (var i = 0; i < results.length; i++) {
        var verify = results[i];
        if (verify.result) {
            console.log('✖', verify.name, verify.result);
            console.log('   Recommended fix:', verify.resolution)
            
            errorCount++;
        } else {
            console.log('✔', verify.name);
        }
    }

    if (errorCount === 0) {
        console.log('\r\n ! !  *happy dance*\r\n`===` Looks like everything is configured properly!');
    } else {
        console.error('\r\n 0 0  Sad times!\r\n,===, Looks like there were some configuration issues! Try the recommended fixes and see if that helps!');
    }
    console.log('\r\n      (Tried everything and still not working? Run `gyp-doctor --full` to test some sample packages.)');
}