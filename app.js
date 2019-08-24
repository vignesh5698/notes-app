const express = require('express');
const fs = require('fs');
const path=require('path');
const app = express();
const  bodyParser=require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.listen(3000, () => console.log('Server running at 3000...'));
app.use(express.static(path.join(__dirname,'public')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'/public','home.html'));
})

app.get('/create', (req, res) => {
    res.sendFile(path.join(__dirname,'/public','create.html'));
})

app.post('/create', (req, res) => {
    let notesName = req.body.notesName;
    let notesContent = req.body.notesContent;
    if (!fs.existsSync(`posts/${notesName}`)) {
        fs.writeFileSync(`posts/${notesName}.txt`, notesContent);
        res.send('Notes saved...');
    } else {
        res.send('Notes already exist. Try it with another name.')
    }
})

app.get('/view', (req, res) => {
    fs.readdir(path.join(__dirname,'/posts'), (err, files) => {
        if(err) {
            console.log(err)
        }
        res.send(files)
        console.log('files : ', files)
    });
})
