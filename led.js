//Libs
const Gpio = require('onoff').Gpio;
const led = new Gpio(21, 'out');

//Toggle the state of the LED connected to GPIO21 every 200ms
const iv = setInterval(_ => led.writeSync(led.readSync() ^ 1), 200);

// Stop blinking the LED after x seconds
setTimeout(_ => {
    clearInterval(iv);
}, 3000);