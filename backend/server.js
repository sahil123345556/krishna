const express = require('express');
const app = express();

// Define a route for the root path '/'
app.get('/', (req, res) => {
  res.send('Sahil');  // Sends the string "Sahil" as the response
});

// Start the server without specifying the port
app.listen(() => {
  console.log('Server is running and will use the default port (3000)');
});
