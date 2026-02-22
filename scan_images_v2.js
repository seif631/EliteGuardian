const https = require('https');
const fs = require('fs');

const pages = {
    kings_fall: 'https://skycoach.gg/destiny-boost/products/kings-fall-raid-751',
    trials: 'https://skycoach.gg/destiny-boost/products/flawless-trials-of-osiris-449',
    vanguard: 'https://skycoach.gg/destiny-boost/products/vanguard-ops-boost-650',
    gambit: 'https://skycoach.gg/destiny-boost/products/gambit-weekly-challenges-850',
    power: 'https://skycoach.gg/destiny-boost/products/light-level-boost-438',
    weekly: 'https://skycoach.gg/destiny-boost/products/destiny-2-weekly-challenges-5098',
    onslaught: 'https://skycoach.gg/destiny-boost/products/onslaught-4380',
    flawless_seal: 'https://skycoach.gg/destiny-boost/products/flawless-seal-354',
    unbroken: 'https://skycoach.gg/destiny-boost/products/unbroken-title-boost-1050',
    summoner: 'https://skycoach.gg/destiny-boost/products/the-summoner-adept-1250'
};

const results = {};

const fetchImage = (id, url) => {
    return new Promise(resolve => {
        https.get(url, (res) => {
            if (res.statusCode !== 200) {
                results[id] = `HTTP_${res.statusCode}`;
                resolve();
                return;
            }
            let data = '';
            res.on('data', d => data += d);
            res.on('end', () => {
                const match = data.match(/<meta property="og:image"\s+content="(.*?)"/);
                if (match) {
                    results[id] = match[1];
                } else {
                    results[id] = 'NO_OG_IMAGE';
                }
                resolve();
            });
        }).on('error', (e) => {
            results[id] = `ERROR_${e.message}`;
            resolve();
        });
    });
};

(async () => {
    for (const [id, url] of Object.entries(pages)) {
        await fetchImage(id, url);
        process.stdout.write('.');
    }
    fs.writeFileSync('found_images.json', JSON.stringify(results, null, 2));
    console.log('\nDone.');
})();
