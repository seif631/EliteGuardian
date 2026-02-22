const fs = require('fs');

const content = fs.readFileSync('src/data/services.js', 'utf8');

// Just match image lines
const imageRegex = /image:\s*['"](.*?)['"]/g;
let match;
const counts = {};

while ((match = imageRegex.exec(content)) !== null) {
    const url = match[1];
    counts[url] = (counts[url] || 0) + 1;
}

const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);

console.log(`Total Images Found: ${Object.values(counts).reduce((a, b) => a + b, 0)}`);
console.log(`Unique URLs: ${Object.keys(counts).length}`);

console.log('\n--- TOP 20 REPEATED IMAGES ---');
sorted.slice(0, 20).forEach(([url, count]) => {
    console.log(`${count} x ${url}`);
});
