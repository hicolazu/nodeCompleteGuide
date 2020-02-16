const express = require('express');

const app = express();

app.use('/users', (req, res, next) => {
  console.log('This is the /users middleware');
  res.send('<h1> This is the /users middleware </h1>');
});

app.use('/', (req, res, next) => {
  console.log('This is the / middleware');
  res.send('<h1> This is the / middleware </h1>');
});

app.listen(3000);