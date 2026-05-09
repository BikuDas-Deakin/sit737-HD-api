const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.json({ status: 'ok', version: 'v2' });
});

app.get('/hello', (req, res) => {
  res.json({ message: 'Hello from GKE!', version: 'v2' });
});

app.get('/healthz', (req, res) => {
  res.status(200).json({ health: 'live' });
});

app.get('/ready', (req, res) => {
  res.status(200).json({ health: 'ready' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
