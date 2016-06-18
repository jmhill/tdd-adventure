#!/usr/bin/env Node

var adventure = require('adventure');
var shop = adventure('tdd-adventure');

shop.add('intro', function() {return require('./problems/intro'); });
shop.add('red', function() {return require('./problems/red'); });
shop.add('green', function() {return require('./problems/green'); });
shop.add('refactor', function() {return require('./problems/refactor'); });

shop.execute(process.argv.slice(2));