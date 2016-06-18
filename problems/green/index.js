var fs = require('fs');
var verify = require('adventure-verify');

exports.problem = fs.createReadStream(__dirname + '/problem.txt');
exports.solutioni = fs.createReadStream(__dirname + '/problem.txt');

exports.verify = verify({ modeReset: true }, function(args, t) {
  // Tests go here
});
