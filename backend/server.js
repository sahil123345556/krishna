const express = require('express');
const app = express();

// Define a route for the root path '/'
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Use the environment's port or default to 3000 if no port is set
const port = process.env.PORT || 3000;

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
