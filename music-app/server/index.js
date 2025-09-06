const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 4000;

const allowedOrigins = [
  'http://localhost:5173', // Vite dev server
  'https://68bc75779a2d1cfd9507498e--musicappz.netlify.app/'
];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));
app.use(express.json());

// Proxy search
app.get('/api/search', async (req, res) => {
  const q = req.query.q;
  if (!q) return res.status(400).json({ error: 'Missing query parameter q' });
  try {
    const url = `https://api.deezer.com/search?q=${encodeURIComponent(q)}`;
    const response = await axios.get(url);
    res.json(response.data);
  } catch (err) {
    console.error('Deezer error', err.message);
    res.status(500).json({ error: 'Failed to fetch from Deezer API' });
  }
});

// Proxy track
app.get('/api/track/:id', async (req, res) => {
  try {
    const url = `https://api.deezer.com/track/${encodeURIComponent(req.params.id)}`;
    const response = await axios.get(url);
    res.json(response.data);
  } catch (err) {
    console.error('Deezer track error', err.message);
    res.status(500).json({ error: 'Failed to fetch track from Deezer API' });
  }
});

app.listen(PORT, () => {
  console.log(`Deezer proxy server running on port ${PORT}`);
});