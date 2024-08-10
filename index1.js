
const express = require('express')
const app = express();
const PORT = 3001; 


app.get('/hello', (req, res) => {
  res.send('Hello, Express!');
});


app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});