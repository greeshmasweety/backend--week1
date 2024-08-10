const express = require('express');
const app = express();


const port = process.env.PORT || 30001
;


app.get('/', (req, res) => {
  res.send('<h1>Welcome to the API</h1>');
});


app.get('/about', (req, res) => {
  res.send('<h1>About Us</h1>');
});


app.use((req, res, next) => {
  res.status(404).send({
    error: 'Not Found',
    message: 'The route you requested does not exist.'
  });
});


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
