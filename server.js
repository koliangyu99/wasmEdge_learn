import { createServer } from 'http';
import { readFile } from 'fs';
import { readdir } from 'fs';

createServer((req, res) => {
  print("Request method:", req.method);
  print("Request URL:", req.url);
  readdir('.', (err, files) => {
    if (err) print("❌ readdir error:", err.message);
    else print("✅ Server sees files:", files);
  });
  if (req.url === '/') {
    readFile('./index.html', (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end("Error loading file");
        return;
      }
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    });
  } else {
    res.writeHead(404);
    res.end("Not found");
  }
}).listen(8080, () => {
  print("Simple server running on port 8080");
});
