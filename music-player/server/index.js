import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
const PORT = 3001;

app.use(cors());

// Proxy Deezer requests
app.get("/api/*", async (req, res) => {
  try {
    const deezerUrl = "https://api.deezer.com" + req.path.replace("/api", "");
    const response = await fetch(deezerUrl);
    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error("Proxy error:", err);
    res.status(500).json({ error: "Failed to fetch from Deezer" });
  }
});

app.listen(PORT, () => {
  console.log(`API server running at http://localhost:${PORT}`);
});