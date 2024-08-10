const express = require('express');
const app = express();
const port = 30001;


app.use(express.json());


app.post('/api/data', (req, res) => {
  const receivedData = req.body;
  
  
  console.log('Received JSON data:', receivedData);

  
  res.json({
    message: 'Data received successfully!',
    receivedData
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
