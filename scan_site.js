const urls = [
    'https://skycoach.gg/destiny-boost',
    'https://skycoach.gg/destiny-boost/character-leveling',
    'https://skycoach.gg/destiny-boost/raids',
    'https://skycoach.gg/destiny-boost/dungeons',
    'https://skycoach.gg/destiny-boost/exotics',
    'https://skycoach.gg/destiny-boost/pvp',
    'https://skycoach.gg/destiny-boost/items'
];

async function scan() {
    for (const url of urls) {
        console.log(`Scanning ${url}...`);
        try {
            const html = await fetch(url).then(r => r.text());
            const pngRegex = /https:\/\/skycoach\.gg\/storage\/uploads\/products\/[a-zA-Z0-9-._]+(?:_picture_item(?:_small)?)\.png/g;
            const matches = html.match(pngRegex) || [];
            [...new Set(matches)].forEach(m => console.log(`FOUND: ${m}`));
        } catch (e) {
            console.error(`Error scanning ${url}: ${e.message}`);
        }
    }
}

scan();
