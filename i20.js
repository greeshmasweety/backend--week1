const express = require('express');
const compression = require('compression');
const { body, validationResult } = require('express-validator');
const app = express();

const port = process.env.PORT || 30001
;

app.use(compression());

app.use(express.json());


app.post('/users/register', [
  body('username').isString().withMessage('Username must be a string'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  res.send('User registered successfully.');
});
app.get('/users/profile', (req, res) => {
  res.send('User profile page.');
});

e
app.get('/', (req, res) => {
  res.send('<h1>Welcome to the API</h1><p>Use the /users route for user-related actions.</p>');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
