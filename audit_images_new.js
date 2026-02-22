const fs = require('fs');
const path = require('path');

const servicesPath = 'd:/repo/EliteGuardian/repo/src/data/services.js';
const outputPath = 'd:/repo/EliteGuardian/repo/image_audit.txt';

try {
    const content = fs.readFileSync(servicesPath, 'utf8');
    const lines = content.split('\n');
    let currentServiceName = '';
    const results = [];
    const counts = {};

    lines.forEach(line => {
        const nameMatch = line.match(/name:\s*"(.*?)"/);
        if (nameMatch) {
            currentServiceName = nameMatch[1];
        }

        const imageMatch = line.match(/image:\s*['"](.*?)['"]/);
        if (imageMatch) {
            const url = imageMatch[1];
            results.push({ name: currentServiceName, url });
            counts[url] = (counts[url] || 0) + 1;
        }
    });

    let output = 'IMAGE REPETITION AUDIT\n======================\n\n';

    output += 'Top Repeated Images:\n';
    const sortedCounts = Object.entries(counts).sort((a, b) => b[1] - a[1]);
    sortedCounts.slice(0, 30).forEach(([url, count]) => {
        output += `${count} occurrences: ${url}\n`;
        const servicesUsingIt = results.filter(r => r.url === url).map(r => r.name);
        output += `   Used by: ${servicesUsingIt.slice(0, 5).join(', ')}${servicesUsingIt.length > 5 ? '...' : ''}\n\n`;
    });

    fs.writeFileSync(outputPath, output);
    console.log('Audit complete. see image_audit.txt');
} catch (err) {
    fs.writeFileSync(outputPath, 'Error: ' + err.message);
}
