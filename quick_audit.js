const fs = require('fs');

const servicesPath = 'src/data/services.js';

try {
    const content = fs.readFileSync(servicesPath, 'utf8');
    const imageMatch = content.match(/image:\s*['"](.*?)['"]/g);
    if (!imageMatch) {
        console.log('No images found');
        process.exit();
    }

    const counts = {};
    imageMatch.forEach(m => {
        const url = m.match(/['"](.*?)['"]/)[1];
        counts[url] = (counts[url] || 0) + 1;
    });

    const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);
    console.log(`TOTAL IMAGES: ${imageMatch.length}`);
    sorted.slice(0, 10).forEach(([url, count]) => {
        console.log(`${count} x ${url}`);
    });
} catch (err) {
    console.log('ERROR: ' + err.message);
}
