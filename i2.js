const express = require('express');
const app = express();
const PORT = 30001;
app.get('/hello', (req, res) => {
  res.send('Hello, Express!');
});
app.get('/goodbye', (req, res) => {
  res.send('Goodbye, Express!');
});
app.listen(PORT, () => {
  console.log(`hello: ${PORT}`);
});