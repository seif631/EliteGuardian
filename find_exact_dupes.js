const fs = require('fs');
const content = fs.readFileSync('src/data/services.js', 'utf8');
const regex = /image:\s*'([^']+)'/g;
const counts = {};
let match;
while ((match = regex.exec(content)) !== null) {
    const url = match[1];
    counts[url] = (counts[url] || 0) + 1;
}

const duplicates = Object.entries(counts).filter(([url, count]) => count > 1);
if (duplicates.length === 0) {
    fs.writeFileSync('duplicates_found.txt', 'No exact URL duplicates found.');
} else {
    fs.writeFileSync('duplicates_found.txt', duplicates.map(([url, count]) => `${count} times: ${url}`).join('\n'));
}
