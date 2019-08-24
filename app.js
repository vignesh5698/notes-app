const express = require('express');
const fs = require('fs');
const path=require('path');
const app = express();

app.listen(3000, () => console.log('Server running at 3000...'));
app.use(express.static(path.join(__dirname,'public')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'/public','home.html'))
})

app.get('/create', (req, res) => {
    res.sendFile(path.join(__dirname,'/public','create.html'))
})

app.get('/view', (req, res) => {
    res.sendFile(path.join(__dirname,'/public','view.html'))
})

// const msg = notes();
// fs.writeFileSync('notes.txt', 'File is created.');
// fs.appendFileSync('notes.txt', '  This text is appended in notes.txt. ');
// fs.appendFileSync('notes.txt', msg);