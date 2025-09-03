# Deezer Music App (Full-stack)

Simple full-stack music player that searches Deezer and plays 30s previews.

Structure
```
deezer-music-app/
├── client/    # React + Vite + Tailwind frontend
├── server/    # Express proxy server
└── README.md
```

## Requirements
- Node.js 18+ and npm

## Run (development)
1. Open two terminals.

2. Start the server:
```bash
cd server
npm install
npm run dev
```
Server will run on http://localhost:4000

3. Start the client:
```bash
cd client
npm install
npm run dev
```
Client will run on http://localhost:5173 (Vite). Vite is configured to proxy `/api` to the server, so search requests go to `http://localhost:4000/api/search?q=...`.

## Notes
- Deezer preview URLs are 30s samples (`preview` field).
- This is a simple demo. For production you should secure the server and add caching or rate-limit.
