#!/usr/bin/env node
var fs = require('fs');

//fs = require('fs')
// Uncomment after this

fs.readFile('index.html', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  console.log(data);
});


//var outfile = "hello.txt";
//var out = "A startup is a business built to grow rapidly.\n";
//fs.writeFileSync(outfile, out);
//console.log("Script: " + __filename + "\nWrote: " + out + "To: " + outfile);
