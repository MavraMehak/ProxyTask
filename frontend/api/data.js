// api/data.js
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.get('/api/data', (req, res) => {
  res.json({ message: "Hi from backend!" });
});

// Export the Express app as a serverless function
module.exports = app;