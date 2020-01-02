const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

mongoose
  .connect('mongodb://localhost:27017/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('Connect success');
  })
  .catch(err => {
    console.log(err);
  });

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
