
const express = require('express');
const app = express();
const port = 30001;


app.use((req, res, next) => {
  console.log(`Request Method: ${req.method}, Request URL: ${req.url}`);
  next(); 
});


app.use(express.json());

app.get('/error', (req, res, next) => {
 
  const error = new Error('Something went wrong!');
  error.status = 500;
  next(error); 
});


app.get('/', (req, res) => {
  res.send('Hello, world!');
});


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    error: {
      message: err.message || 'Internal Server Error'
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
