// server.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Basic route
app.get('/', (req, res) => {
  res.send('Hello from your video sharing backend!');
});

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});