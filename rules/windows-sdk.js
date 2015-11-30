/*
Verify certain SDK paths are available.
um, ucrt, etc.

HKEY_LOCAL_MACHINE\SOFTWARE\Wow6432Node\Microsoft\Microsoft SDKs\Windows\v10.0\InstallationFolder
HKEY_LOCAL_MACHINE\SOFTWARE\Wow6432Node\Microsoft\Windows Kits\Installed Roots\KitsRoot81

*/

var Winreg = require('winreg');
var regkey = new Winreg(
    {
        hive: Winreg.HKLM,
        key: 'SOFTWARE\\Wow6432Node\\Microsoft\\Microsoft SDKs\\Windows\\v10.0'
    });

regkey.get('InstallationFolder', function (err, key) {
    if (key) {
        console.log(key.value);
    }
});

exports.verify = function () {
    // find Windows SDK directories - how does it find the Windows SDK versions?
    return {
        result: "Not implemented",
        resolution: '...'
    };
}

exports.repair = function () {

}