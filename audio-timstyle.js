//Button druecken: Aufnahme startet und stoppt bei Stille
const { exec } = require('child_process');

var FileWriter = require('wav').FileWriter;
var mic = require('mic'); // requires arecord or sox, see https://www.npmjs.com/package/mic

var micInstance = mic({
    rate: 16000,
    channels: 1,
    //debug: true,
    exitOnSilence: 10
});

var micInputStream = micInstance.getAudioStream();

var outputFileStream = new FileWriter('./my-test.wav', {
    sampleRate: 16000,
    channels: 1,

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


//    micInstance.stop();