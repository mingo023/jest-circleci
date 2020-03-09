require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

function run() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res();
    }, 4000);
  });
}

app.get('/post1', async (req, res) => {
  console.log('Starting post1');
  // const start = Date.now();
  // while (Date.now() < start + 3000) {}
  await run();
  console.log('End post1');
  return res.send('Hello');
});

app.get('/post2', async (req, res) => {
  console.log('Starting post2');
  // const start = Date.now();
  // while (Date.now() < start + 3000) {}
  await run();
  console.log('End post2');
  return res.send('Hello post2');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
