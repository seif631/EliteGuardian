const fs = require('fs');
const content = fs.readFileSync('src/data/services.js', 'utf8');
const regex = /image:\s*['"](.*?)['"]/g;
let match;
const counts = {};
while ((match = regex.exec(content)) !== null) {
    const url = match[1];
    counts[url] = (counts[url] || 0) + 1;
}
const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);
let out = '';
sorted.forEach(([u, c]) => {
    if (c > 1) {
        out += `${c} x ${u}\n`;
    }
});
fs.writeFileSync('duplicates.txt', out);
