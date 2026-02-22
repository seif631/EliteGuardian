const https = require('https');
const fs = require('fs');

const pages = {
    kings_fall: 'https://skycoach.gg/destiny-boost/products/kings-fall-raid-751',
    trials: 'https://skycoach.gg/destiny-boost/products/flawless-trials-of-osiris-449',
    vanguard: 'https://skycoach.gg/destiny-boost/products/vanguard-ops-boost-650',
    gambit: 'https://skycoach.gg/destiny-boost/products/gambit-weekly-challenges-850',
    power: 'https://skycoach.gg/destiny-boost/products/pinnacle-cap-power-level-950',
    unbroken: 'https://skycoach.gg/destiny-boost/products/unbroken-title-boost-1050',
    onslaught: 'https://skycoach.gg/destiny-boost/products/onslaught-activity-boost-1150',
    summer: 'https://skycoach.gg/destiny-boost/products/the-summoner-adept-1250'
};

const results = {};

const fetchImage = (id, url) => {
    return new Promise(resolve => {
        https.get(url, (res) => {
            let data = '';
            res.on('data', d => data += d);
            res.on('end', () => {
                const match = data.match(/<meta property="og:image" content="(.*?)"/);
                if (match) {
                    results[id] = match[1];
                } else {
                    results[id] = 'NOT_FOUND';
                }
                resolve();
            });
        }).on('error', () => {
            results[id] = 'ERROR';
            resolve();
        });
    });
};

(async () => {
    const keys = Object.keys(pages);
    for (const key of keys) {
        await fetchImage(key, pages[key]);
        process.stdout.write('.');
    }
    fs.writeFileSync('found_images.txt', JSON.stringify(results, null, 2));
})();
