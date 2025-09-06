const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// Simple proxy for search
app.get('/api/search', async (req, res) => {
  const q = req.query.q;
  if (!q) return res.status(400).json({ error: 'Missing query parameter q' });
  try {
    const url = `https://api.deezer.com/search?q=${encodeURIComponent(q)}`;
    const response = await axios.get(url);
    // Return the original Deezer response
    return res.json(response.data);
  } catch (err) {
    console.error('Deezer error', err.message);
    return res.status(500).json({ error: 'Failed to fetch from Deezer API' });
  }
});

// Optionally proxy track by id
app.get('/api/track/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const url = `https://api.deezer.com/track/${encodeURIComponent(id)}`;
    const response = await axios.get(url);
    return res.json(response.data);
  } catch (err) {
    console.error('Deezer track error', err.message);
    return res.status(500).json({ error: 'Failed to fetch track from Deezer API' });
  }
});

app.listen(PORT, () => {
  console.log(`Deezer proxy server running on http://localhost:${PORT}`);
});
