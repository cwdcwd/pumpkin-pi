'use strict';

var config = {}

config.PIN_LED01 = process.env.PIN_LED01 || 17;
config.PIN_LED02 = process.env.PIN_LED02 || 27;

config.PIN_SR04_ECHO = process.env.PIN_ECHO || 18;
config.PIN_SR04_TRIGGER = process.env.PIN_TRIGGER || 16;
config.SR04_TIMEOUT = process.env.SR04_TIMEOUT || 1000;

module.exports = config;
