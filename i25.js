const express = require('express');
const app = express();


const port = process.env.PORT || 30001;

app.get('/success', (req, res) => {
  res.status(200).send('Success! Everything is OK.');
});


app.get('/bad-request', (req, res) => {
  res.status(400).send('Bad Request! The request could not be understood or was missing required parameters.');
});


app.get('/not-found', (req, res) => {
  res.status(404).send('Not Found! The requested resource could not be found.');
});


app.get('/error', (req, res) => {
  res.status(500).send('Internal Server Error! Something went wrong on the server.');
});

app.get('/', (req, res) => {
  res.send(`
    <h1>Welcome</h1>
    <p>Visit the following routes to see different status codes:</p>
    <ul>
      <li><a href="/success">/success</a></li>
      <li><a href="/bad-request">/bad-request</a></li>
      <li><a href="/not-found">/not-found</a></li>
      <li><a href="/error">/error</a></li>
    </ul>
  `);
});


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
