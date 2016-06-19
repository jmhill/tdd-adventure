#!/usr/bin/env node

var adventure = require('adventure');

/**
 * adventure can take an options object if necessary,
 * see https://www.npmjs.com/package/adventure
 * 
 * if adventure is only provided string,
 * string will be options.name, and all other 
 * options will be inferred
 * 
 */
var shop = adventure('tdd-adventure');

/**
 * Exercise are registered below using this signature:
 * 
 * shop.add(title, function);
 * 
 * ...where:
 *  title: the name of each exercise (as it will appear in the menu)
 *  function: returns an 'exercise object' with (at least) the following properties:
 *    .verify - the function that runs when user runs verify command (required)
 *    .problem - instructions provided to user once they have selected an exercise
 *    .solution - the reference solution that will be provided to user once they pass the exercise
 *  
 */
shop.add('INTRODUCTION', function() {return require('./problems/intro'); });
shop.add('RED', function() {return require('./problems/red'); });
shop.add('GREEN', function() {return require('./problems/green'); });
shop.add('REFACTOR', function() {return require('./problems/refactor'); });

shop.execute(process.argv.slice(2));
