const express = require('express');
const app = express();
const PORT = 3040;

// Simple GET endpoint
app.get('/api/hello', (req, res) => {
  res.json({
    message: 'Hello from your GET API123!',
    success: true
  });
});

console.log("testing 123");

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
