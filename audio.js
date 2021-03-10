//Aufnahme starten, bei Stille stoppen
const { exec } = require('child_process');
var FileWriter = require('wav').FileWriter;
var mic = require('mic');

var micInstance = mic({
    rate: 48000,
    channels: 1,
    debug: true,
    exitOnSilence: 10
});

var micInputStream = micInstance.getAudioStream();

var outputFileStream = new FileWriter('./rec-long.wav', {
    sampleRate: 48000,
    channels: 1
});

micInputStream.pipe(outputFileStream);

//Bei Stille Aufnahme stoppen
micInputStream.on('silence', function () {
    console.log("stopmic");
    micInstance.stop();

    /*
    exec("ffmpeg -i rec-long.wav -af silenceremove=start_periods=1:start_threshold=-50dB:stop_periods=1:stop_threshold=-55dB rec-short.wav -y", (err, stout, sterr) => {
        console.log(stout);
        exec('cd /home/martin/github/vosk-api/python/example/ && python3 stt-mh.py /home/martin/github/node-test/rec-short.wav', (err, stdout, stderr) => {
            console.log(stdout);
        });
    });
    */
});

micInstance.start();