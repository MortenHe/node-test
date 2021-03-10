const { exec } = require('child_process');

const text = "Riesenparty für den kleinen Tiger";
exec("pico2wave -l de-DE -w tts.wav '" + text + "' && aplay tts.wav && rm tts.wav", (err, data, stderr) => {
    console.log("done")
})