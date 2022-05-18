const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))

app.set('view engine', 'ejs');
app.use(express.static(__dirname));

//console.log(__dirname);

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'picturi.html'));
});

  app.get('/descoperire', function (req, res) {
    res.sendFile(path.join(__dirname, 'proiect_lab.html'));
  });

  app.get('/curiozitati', function (req, res) {
    res.sendFile(path.join(__dirname, 'funfacts.html')); //
  });

  app.get('/citate', function (req, res) {
    res.sendFile(path.join(__dirname, 'citate.html'));
  });

  app.get('/wiki', function (req, res) {
    res.sendFile(path.join(__dirname, 'delirul.html'));
  });

app.post('/', function (req, res) {
    const { nume, prenume, email, oras } = req.body;
    res.send(`Salut, ${nume} ${prenume}! Te vom anunța la adresa ${email} cand vor apărea expoziții în ${oras}!`);
  });
  
app.use('*', (req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, "404.html"));
});
app.listen(3000);
