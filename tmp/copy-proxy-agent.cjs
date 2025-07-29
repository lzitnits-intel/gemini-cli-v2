const fs = require('fs');
const path = require('path');

const src = path.join(__dirname, 'proxy-agent.js'); // Your custom file
const dest = path.join(__dirname, '../node_modules/undici/lib/dispatcher/proxy-agent.js');

fs.copyFileSync(src, dest);
console.log('Patched undici proxy-agent.js');