const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log(`Received an request on url: ${req.url}`);
})

app.listen(3000);



