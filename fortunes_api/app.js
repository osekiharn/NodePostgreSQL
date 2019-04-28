const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const data = require('./data/fortunes');

const app = express();

app.use(bodyParser.json());

app.get('/fortunes', (req, res) => {
  res.json(data);
});

app.get('/fortunes/random', (req, res) => {
  res.json(data[Math.floor(Math.random() * data.length)]);
});

app.get('/fortunes/:id', (req, res) => {
  res.json(data.find(f => f.id === Number(req.params.id, 10)));
});

const writeFortunes = json => {
  fs.writeFile('./data/fortunes.json', JSON.stringify(json));
};

app.post('/fortunes', (req, res) => {
  const { message, lucky_number, spirit_animal } = req.body;

  const fortunes_ids = data.map(f => f.id);

  const new_fortunes = data.concat({
    id: Math.max(...fortunes_ids) + 1,
    message,
    lucky_number,
    spirit_animal,
  });

  writeFortunes(new_fortunes);

  res.json(new_fortunes);
});

app.put('/fortunes/:id', (req, res) => {
  const { id } = req.params;

  const old_fortunes = data.find(f => f.id == id);

  ['message', 'lucky_number', 'spirit_animal'].forEach(key => {
    if (req.body[key]) {
      old_fortunes[key] = req.body[key];
    }
  });

  writeFortunes(data);

  res.json(data);
});

app.delete('/fortunes/:id', (req, res) => {
  const { id } = req.params;

  const new_fortunes = data.filter(f => f.id != id);

  writeFortunes(new_fortunes);

  res.json(new_fortunes);
});

module.exports = app;
