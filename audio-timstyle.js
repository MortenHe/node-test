//Button druecken: Aufnahme startet und stoppt bei Stille
const { exec } = require('child_process');

var FileWriter = require('wav').FileWriter;
var mic = require('mic'); // requires arecord or sox, see https://www.npmjs.com/package/mic

//Mikroaufnahme: channel 1 = mono
micInstance = mic({
    rate: 48000,
    channels: 1,
    device: "hw:1,0",
    debug: false,
    exitOnSilence: 10
});
micInputStream = micInstance.getAudioStream();
outputFileStream = new FileWriter(__dirname + '/stt.wav', {
    sampleRate: 48000,
    channels: 1
});
micInputStream.pipe(outputFileStream);

micInputStream.on('silence', function () {
    console.log("Got SIGNAL silence");
    micInstance.stop();
});

micInputStream.on('processExitComplete', function () {
    console.log("Got SIGNAL processExitComplete");
});
micInstance.start();