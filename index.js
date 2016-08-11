'use strict';
const uniqueRandomArray = require('unique-random-array');
const rickAndMorty = require('./rick-and-morty');

exports.all = rickAndMorty;
exports.random = uniqueRandomArray(rickAndMorty);
