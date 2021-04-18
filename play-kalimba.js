const player = require('node-wav-player');
player.play({
    path: __dirname + '/kalimba.wav',
    loop: true,
    sync: true
})