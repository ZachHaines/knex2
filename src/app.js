const express = require('express');
const app = express();
const port = 8081;
const knex = require('knex')(require('../knexfile.js')["development"]);

app.get('/', (req, res) => {
  res.send('Application up and running...')
})

app.listen(port, () => {
  console.log(`Your Knex and Express application are running successfully on port ${port}.`)
})

app.get('/pets', (req, res) => {
  knex('pet')
    .select('*') // sql get everything
    .then(pets => {
      var petNames = pets.map(pet => pet.name)
      res.json(petNames);
    })
})

