import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// Because we're using ES modules ("type": "module" in package.json), we need to define __dirname manually
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 10000;

// Example API Backend Route (Option B)
app.get('/api/status', (req, res) => {
  res.json({ message: "Backend is running successfully!" });
});

// Middleware to serve static files from the React "dist" build directory
app.use(express.static(path.join(__dirname, 'dist')));

// The "catchall" handler: for any request that doesn't match an API route or static file, send back React's index.html file.
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
