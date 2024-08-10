const express = require('express');
const path = require('path');

const app = express();
const port = 30001;
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/message', (req, res) => {
  res.json({ message: "Hello, world!" });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
