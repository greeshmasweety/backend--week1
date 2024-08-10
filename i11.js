const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies (if needed for any future routes)
app.use(express.json());

// Define a DELETE route to handle requests with an ID parameter
app.delete('/delete/:id', (req, res) => {
  const { id } = req.params;
  
  // Log the ID of the deleted item to the console
  console.log(`Deleted item with ID: ${id}`);

  // Respond with a success message
  res.json({ message: `Deleted item with ID: ${id}` });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
