const wordle = require("spoil-wordle");

console.log("Today's wordle is " + wordle.spoilWordle());
console.log("Tomorrow's wordle is " + wordle.spoilWordle(1));

console.log(wordle.wordles[10]);
console.log(wordle.wordles[100]);
console.log(wordle.wordles);