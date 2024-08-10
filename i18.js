const express = require('express');
const compression = require('compression');
const app = express();

const port = process.env.PORT || 30001;


app.use(compression());

app.get('/', (req, res) => {
  res.send('<h1>Welcome to the compressed server!</h1><p>This response is compressed.</p>');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
