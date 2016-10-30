'use strict';

var config = require('config');
var gpio = require('pi-gpio');


gpio.open(config.PIN_LED02, 'output', function(err) { // Open pin for output
    gpio.write(config.PIN_LED02, 1, function() { // Set pin high (1)
        gpio.close(config.PIN_LED02); // Close pin 
    });
});


//read SR04
//check distance
//onThreshold
//  fire pins
//  play audio
