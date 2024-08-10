const express = require('express');
const app = express();
app.use(express.json());
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
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
