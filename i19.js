const express = require('express');
const { body, validationResult } = require('express-validator');
const app = express();

const port = process.env.PORT || 30001;


app.use(express.json());


app.post('/submit', [
  body('name').isString().withMessage('Name must be a string'),
  body('age').isInt({ min: 0 }).withMessage('Age must be a non-negative integer'),
  body('email').isEmail().withMessage('Email must be a valid email address')
], (req, res) => {
  
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

 
  res.send('Data is valid and has been processed.');
});


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
