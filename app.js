const fs = require('fs');
const notes  = require('./notes');
const msg = notes();

fs.writeFileSync('notes.txt', 'File is created.');
fs.appendFileSync('notes.txt', '  This text is appended in notes.txt. ');
fs.appendFileSync('notes.txt', msg);