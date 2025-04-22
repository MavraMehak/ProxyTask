const express = require('express');
const app = express();
const cors = require('cors'); 

app.use(cors()); 

app.get('/api/data', (req, res) => {
  res.json({ message: "Hi from backend!" });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`));