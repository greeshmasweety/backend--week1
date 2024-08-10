const express = require('express');
const app = express();
const port = 30001;
app.use((req, res, next) => {
  console.log(`Request Method: ${req.method}, Request URL: ${req.url}`);
  next(); 
});
app.use(express.json());
app.get('/', (req, res) => {
  res.send('Hello, world!');
});
app.delete('/delete/:id', (req, res) => {
  const { id } = req.params;
  res.json({ message: `Deleted item with ID: ${id}` });
});
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
