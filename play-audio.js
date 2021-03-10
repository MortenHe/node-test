const player = require('node-wav-player');
player.play({
    path: '/home/martin/Nextcloud/buttons-wav/kalimba.wav',
    loop: true,
    sync: true
})

console.log("after")
setTimeout(() => {
    player.stop();

    player.play({
        path: '/home/martin/Nextcloud/buttons-wav/beep-03.wav',
        loop: true,
        sync: true
    }).then(() => {
        console.log('The wav file started to be played successfully.');
    }).catch((error) => {
        console.error(error);
    });
}, 2000);