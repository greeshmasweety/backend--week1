const express = require('express');
const app = express();
const PORT = 30001;
app.get('/hello', (req, res) => {
  res.send('Hello, Express!');
});
app.get('/goodbye', (req, res) => {
  res.send('Goodbye, Express!');
});
app.post('/echo', (req, res) => {
  const requestData = req.body;
  res.json(requestData);
});


app.get('/greet', (req, res) => {
  const name = req.query.name;
  if (name) {
    res.send(`Hello, ${name}!`);
  } else {
    res.send('Hello, stranger!');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
