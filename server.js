const http = require('http');
const fs = require('fs');
const path = require('path');
const zlib = require('zlib');
const vm = require('vm');
const os = require('os');

const PORT = Number(process.env.PORT || 8966);
const HOST = process.env.HOST || '0.0.0.0';
const ROOT = __dirname;

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.webmanifest': 'application/manifest+json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
  const cleanUrl = decodeURIComponent((req.url || '/').split('?')[0]);
  const relPath = cleanUrl === '/' ? 'index.html' : cleanUrl.replace(/^\/+/, '');
  const fullPath = path.resolve(ROOT, relPath);

  if (!fullPath.startsWith(path.resolve(ROOT))) {
    res.writeHead(403);
    return res.end('Forbidden');
  }

  fs.readFile(fullPath, (err, data) => {
    if (err) {
      if (relPath.startsWith('content/') && relPath.endsWith('.js')) {
        res.writeHead(200, { 'Content-Type': 'application/javascript; charset=utf-8', 'Cache-Control': 'no-store' });
        return res.end('/* pending content module */');
      }
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      return res.end('Not found');
    }

    let payload = data;
    const ext = path.extname(fullPath).toLowerCase();
    if (relPath.startsWith('content') && ext === '.js') {
      try {
        new vm.Script(data.toString('utf8'));
      } catch (_) {
        payload = Buffer.from('/* content file mid-write, refresh shortly */', 'utf8');
      }
    }

    const headers = {
      'Content-Type': MIME[ext] || 'application/octet-stream',
      'Cache-Control': 'no-cache'
    };

    const acceptEncoding = req.headers['accept-encoding'] || '';
    if (/\bgzip\b/.test(acceptEncoding) && ['.js', '.html', '.css', '.json', '.webmanifest', '.svg'].includes(ext)) {
      zlib.gzip(payload, (zErr, compressed) => {
        if (!zErr) {
          headers['Content-Encoding'] = 'gzip';
          headers['Vary'] = 'Accept-Encoding';
          res.writeHead(200, headers);
          res.end(compressed);
        } else {
          res.writeHead(200, headers);
          res.end(payload);
        }
      });
    } else {
      res.writeHead(200, headers);
      res.end(payload);
    }
  });
});

server.listen(PORT, HOST, () => {
  console.log(`JavaEng 600+ Academy running at http://127.0.0.1:${PORT}`);
  const nets = os.networkInterfaces();
  for (const name of Object.keys(nets)) {
    for (const net of nets[name] || []) {
      if (net.family === 'IPv4' && !net.internal) {
        console.log(`Access on Phone/Tablet (same Wi-Fi): http://${net.address}:${PORT}`);
      }
    }
  }
});
