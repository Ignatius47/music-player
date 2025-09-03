import express from "express";
import fetch from "node-fetch";

const app = express();

app.get("/api/*", async (req, res) => {
  const url = "https://api.deezer.com" + req.url.replace("/api", "");
  const r = await fetch(url);
  const data = await r.json();
  res.json(data);
});

app.listen(3001, () => console.log("Proxy running on http://localhost:3001"));