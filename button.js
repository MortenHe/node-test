//Libs
const Gpio = require('onoff').Gpio;

//Buttons und LED
const button1 = new Gpio(5, 'in', 'falling', { debounceTimeout: 100 });
const button2 = new Gpio(7, 'in', 'falling', { debounceTimeout: 100 });
const button3 = new Gpio(15, 'in', 'falling', { debounceTimeout: 100 });
const button4 = new Gpio(6, 'in', 'falling', { debounceTimeout: 100 });
const led = new Gpio(21, 'out');

button1.watch(function () {
    console.log("button 1");
});

button2.watch(function () {
    console.log("button 2");
});

button3.watch(function () {
    console.log("button 3");
});

button4.watch(function () {
    console.log("button 4");

    led.writeSync(led.readSync() ^ 1)
});