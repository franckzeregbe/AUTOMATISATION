const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const PUBLIC_DIR = './public';

const mimeTypes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml'
};

const server = http.createServer((req, res) => {
  let filePath = path.join(PUBLIC_DIR, req.url === '/' ? 'index.html' : req.url);
  
  // Normaliser le chemin
  filePath = path.normalize(filePath);

  const ext = path.extname(filePath);
  const contentType = mimeTypes[ext] || 'text/plain';

  fs.readFile(filePath, (err, data) => {
    if (err) {
      if (err.code === 'ENOENT') {
        res.writeHead(404);
        res.end('File not found');
      } else {
        res.writeHead(500);
        res.end('Server error');
      }
    } else {
      res.writeHead(200, { 
        'Content-Type': contentType,
        'Access-Control-Allow-Origin': '*'
      });
      res.end(data);
    }
  });
});

server.listen(PORT, () => {
  console.log(`🚀 Serveur AUTOMATISATION démarré !`);
  console.log(`📱 Ouvrez votre navigateur sur : http://localhost:${PORT}`);
  console.log(`📁 Dossier public : ${path.resolve(PUBLIC_DIR)}`);
  console.log(`⏹️  Arrêter avec Ctrl+C`);
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.log(`❌ Port ${PORT} déjà utilisé. Essayez un autre port.`);
  } else {
    console.error('Erreur serveur:', err);
  }
});