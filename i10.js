const express = require('express');
const app = express();
const port = 30001;
app.use(express.json());
app.put('/update', (req, res) => {
  const updatedData = req.body;
    console.log('Updated data:', updatedData);
res.json({ message: 'Data updated' });
});
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
