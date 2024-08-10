const express = require('express');
const app = express();

const port = process.env.PORT || 30001;

app.use(express.urlencoded({ extended: true }));

app.post('/submit', (req, res) => {

  const { name, age } = req.body;


  if (!name || !age) {
    return res.status(400).send('Name and age are required.');
  }

  res.send(`Received data: Name - ${name}, Age - ${age}`);
});


app.get('/', (req, res) => {
  res.send(`
    <h1>Submit Data</h1>
    <form action="/submit" method="POST">
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" required>
      <br>
      <label for="age">Age:</label>
      <input type="number" id="age" name="age" required>
      <br>
      <button type="submit">Submit</button>
    </form>
  `);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
