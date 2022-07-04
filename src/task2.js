"use strict";
exports.__esModule = true;
var ramda_1 = require("ramda");
var addTen = function (a) {
    return a + 10;
};
var triple = function (b) {
    return b * 3;
};
var composed = (0, ramda_1.compose)(addTen, triple);
console.log(composed(2));
// the compose function took the triple function first which gave me 6 and then added 10 to that value. Which gave a total of 16 in the console.
var piped = (0, ramda_1.pipe)(addTen, triple);
console.log(piped(2));
// in this case, the pipe function took the addTen function first which gave us 12 and then used the triple functin which multiplied 12 into 36
