const fs = require('fs');

const content = fs.readFileSync('src/data/services.js', 'utf8');
const regex = /name:\s*"(.*?)",[\s\S]*?image:\s*['"](.*?)['"]/g;

let match;
const urlCounts = {};
const urlToNames = {};

while ((match = regex.exec(content)) !== null) {
    const name = match[1];
    const url = match[2];

    urlCounts[url] = (urlCounts[url] || 0) + 1;
    if (!urlToNames[url]) urlToNames[url] = [];
    urlToNames[url].push(name);
}

const sortedUrls = Object.entries(urlCounts).sort((a, b) => b[1] - a[1]);

console.log(`Total Services: ${Object.values(urlCounts).reduce((a, b) => a + b, 0)}`);
console.log(`Unique Images: ${Object.keys(urlCounts).length}`);
console.log('\n--- TOP REPEATED IMAGES ---');

sortedUrls.slice(0, 15).forEach(([url, count]) => {
    console.log(`\nCount: ${count}`);
    console.log(`URL: ${url}`);
    console.log(`Services: ${urlToNames[url].slice(0, 5).join(', ')}${count > 5 ? '...' : ''}`);
});
