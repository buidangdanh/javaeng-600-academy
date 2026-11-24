/* Đóng gói toàn bộ JavaEng 600+ Academy thành 1 file HTML duy nhất (Single-File Portable) để mở offline mọi nơi hoặc gửi qua Zalo/Drive */
const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const css = fs.readFileSync(path.join(ROOT, 'styles.css'), 'utf8');
const scripts = [
  'data.js',
  'content/grammar-g1.js',
  'content/grammar-g2.js',
  'content/grammar-g3.js',
  'content/grammar-g4.js',
  'content/vocab-v1.js',
  'content/vocab-v2.js',
  'content/vocab-v3.js',
  'content/vocab-v4.js',
  'content/practice-labs.js',
  'content/exams-toeic.js',
  'app.js'
];

const inlineJs = scripts
  .map(rel => {
    const p = path.join(ROOT, rel);
    if (!fs.existsSync(p)) {
      console.warn('Missing:', rel);
      return `/* missing ${rel} */`;
    }
    return `/* === ${rel} === */\n` + fs.readFileSync(p, 'utf8').replace(/<\/script>/gi, '<\\/script>');
  })
  .join('\n\n');

const outHtml = `<!doctype html>
<html lang="vi" data-theme="light">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
  <meta name="theme-color" content="#0b192e">
  <title>JavaEng 600+ Academy (Bản All-in-One) | Tiếng Anh TOEIC 600+ Cho Senior Java</title>
  <style>${css}</style>
</head>
<body>
  <div id="root">Đang tải JavaEng 600+ Academy…</div>
  <script>
${inlineJs}
  </script>
</body>
</html>`;

const outPath = path.join(ROOT, 'javaeng-600-portable-all-in-one.html');
fs.writeFileSync(outPath, outHtml, 'utf8');
console.log('Built portable single-file HTML:', outPath, 'Size:', (Buffer.byteLength(outHtml, 'utf8') / 1024 / 1024).toFixed(2), 'MB');
