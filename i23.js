const express = require('express');
const app = express();

const port = process.env.PORT || 30001;


app.get('/redirect-me', (req, res) => {
 
  res.redirect('https://www.example.com');
});


app.get('/', (req, res) => {
  res.send(`
    <h1>Welcome</h1>
    <p>Visit <a href="/redirect-me">/redirect-me</a> to be redirected to another URL.</p>
  `);
});


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
