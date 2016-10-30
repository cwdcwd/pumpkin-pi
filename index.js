'use strict';

var async = require('async');
var config = require('config');
var usonic = require('mmm-usonic');

//read SR04
//check distance
//onThreshold
//  fire pins
//  play audio

usonic.init(function(err) {
    console.log('initializing sensor');

    if (err) {
        console.log(err)
    } else {
        console.log('creating sensor ');
        let sensor = usonic.createSensor(config.PIN_SR04_ECHO, config.PIN_SR04_TRIGGER, config.SR04_TIMEOUT);

        setInterval(function(sensor) {
            let distance = sensor();
            console.log('distance: ', distance);
        }, 1000, sensor);

    }
});
