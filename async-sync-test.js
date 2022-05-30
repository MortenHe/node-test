const fs = require('fs-extra');

//Befehl fuer Autostart in Datei schreiben
time(false)
writeFile(false);
time(true);

time(false)
writeFile(true);
time(true);

function writeFile(sync) {
    if (sync) {
        console.log("write file sync");
        fs.writeFile(__dirname + "/../wss-install/last-player", "AUTOSTART=sudo " + __dirname + "/startnode.sh");
    }
    else {
        console.log("write file async");
        fs.writeFileSync(__dirname + "/../wss-install/last-player", "AUTOSTART=sudo " + __dirname + "/startnode.sh");
    }
}

function time(end) {
    if (end) {
        end = new Date().getTime();
        endtime = end - start;
        console.log('Execution time: ' + endtime);
    }
    else {
        start = new Date().getTime();
    }
}