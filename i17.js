const express = require('express');
const rateLimit = require('express-rate-limit');
const app = express();


const port = process.env.PORT || 30001;


const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 100, 
  message: 'Too many requests from this IP, please try again later.',
  headers: true, 
});


app.use('/api/', apiLimiter);


app.use((req, res, next) => {
  console.log(`Request Method: ${req.method}, Request URL: ${req.url}`);
  next(); 
});

app.use(express.json());


app.get('/api/data', (req, res) => {
  res.json({ message: 'This is a rate-limited API endpoint' });
});

app.get('/', (req, res) => {
  res.send('<h1>Welcome to the API</h1><p>Use the /api/data endpoint to test rate limiting.</p>');
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
