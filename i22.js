const express = require('express');
const app = express();
const port = process.env.PORT || 30001;
app.get('/data', (req, res) => {
  const responseData = {
    message: 'Hello, world!',
    timestamp: new Date().toISOString(),
    status: 'success'
  };

  res.json(responseData); 
});
app.get('/', (req, res) => {
  res.send(`
    <h1>Welcome</h1>
    <p>Visit <a href="/data">/data</a> to see the JSON response.</p>
  `);
});
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
