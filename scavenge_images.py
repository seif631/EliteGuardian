import urllib.request
import re

urls = [
    'https://skycoach.gg/destiny-boost',
    'https://skycoach.gg/destiny-boost/raids',
    'https://skycoach.gg/destiny-boost/dungeons',
    'https://skycoach.gg/destiny-boost/exotics',
    'https://skycoach.gg/destiny-boost/character-leveling'
]

headers = {'User-Agent': 'Mozilla/5.0'}
found = set()

for url in urls:
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=10) as response:
            html = response.read().decode('utf-8')
            # Look for full URLs
            matches = re.findall(r'https://skycoach\.gg/storage/uploads/products/[^"\''']+?\.(?:png|jpg|webp|jpeg)', html)
            for m in matches:
                found.add(m)
            # Look for relative paths
            rel_matches = re.findall(r'(/storage/uploads/products/[^"\''']+?\.(?:png|jpg|webp|jpeg))', html)
            for rm in rel_matches:
                found.add(f"https://skycoach.gg{rm}")
    except Exception as e:
        print(f"Error scanning {url}: {e}")

with open('all_found_images.txt', 'w') as f:
    for img in sorted(list(found)):
        f.write(f"{img}\n")

print(f"Scanned {len(urls)} pages. Found {len(found)} unique images.")
