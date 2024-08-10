const express = require('express');
const cors = require('cors');
const app = express();
const port =30001;
app.use(cors());

app.get('/', (req, res) => {
  res.json({ message: 'CORS is enabled route!' });
});

app.listen(port, () => {
  console.log('Server is running on  http://localhost:${port}');
});