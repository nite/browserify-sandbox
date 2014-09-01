var unique = require('uniq');
var bob = require('./bob');

var data = [1, 2, 2, 3, 4, 5, 5, 5, 6];

console.log(unique(data));
console.log('hi', bob());
