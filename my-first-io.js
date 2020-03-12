const fs = require("fs");

const syn = fs.readFileSync(process.argv[2]);
var lines = syn.toString().split("\n").length - 1;
console.log(lines);
