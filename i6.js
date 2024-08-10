
const express = require('express');

const app = express();


const PORT = 30001;

app.get('/user/:id', (req, res) => {
  const userId = req.params.id; 
  res.send(`User ID: ${userId}`);
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});