'use strict';

var async = require('async');
var config = require('config');
var gpio = require('pi-gpio');

/*
gpio.open(config.PIN_LED02, 'output', function(err) { // Open pin for output
    gpio.write(config.PIN_LED02, 1, function() { // Set pin high (1)
        gpio.close(config.PIN_LED02); // Close pin
    });
});
*/

async.parallel([
    function(cb) {
        console.log('opening Trigger for output on ' + config.PIN_SR04_TRIGGER);
        gpio.open(config.PIN_SR04_TRIGGER, 'output', function(err) {
            console.log('returned from opening Trigger.', err);
            cb(err);
        });
    },
    function(cb) {
        console.log('opening Echo for input on ' + config.PIN_SR04_ECHO);
        gpio.open(config.PIN_SR04_ECHO, 'input', function(err) {
            console.log('returned from opening Echo.', err);
            cb(err);
        });
    },
], function(err, results) {
    if (err) {
        console.log(err);
    } else {
        gpio.write(config.PIN_SR04_TRIGGER, 0, function() {
            setTimeout(function() {
                gpio.write(config.PIN_SR04_TRIGGER, 1, function() {
                    gpio.close(config.PIN_SR04_TRIGGER);
                });
            }, 0.001)
        });
    }
});
//read SR04
//check distance
//onThreshold
//  fire pins
//  play audio
