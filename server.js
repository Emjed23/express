const express = require("express");
const fs = require('fs');
const login=require("./login.js");
const app = express();

const port = 4000;

app.get('/Home', (req, res) => {
    fs.readFile('Homepage.html', 'utf-8', (err, data) => {
        err ? console.log(err) : res.send(data);
    });
});

app.get('/Contactus', (req, res) => {
    fs.readFile('Contactus.html', 'utf-8', (err, data) => {
        err ? console.log(err) : res.send(data);
    });
});

app.get('/OurServices', (req, res) => {
    fs.readFile('Ourservices.html', 'utf-8', (err, data) => {
        err ? console.log(err) : res.send(data);
    });
});

app.listen(port, (err) => err ? console.log(err) : console.log(`app listening on ${port}`));
