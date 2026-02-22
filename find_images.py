import urllib.request
import re

urls = [
    'https://skycoach.gg/destiny-boost',
    'https://skycoach.gg/destiny-boost/raids',
    'https://skycoach.gg/destiny-boost/exotics'
]

headers = {'User-Agent': 'Mozilla/5.0'}

found = set()
for url in urls:
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req) as response:
            html = response.read().decode('utf-8')
            matches = re.findall(r'https://skycoach\.gg/storage/uploads/products/[^"\''']+?\.png', html)
            for m in matches:
                found.add(m)
    except Exception as e:
        print(f"Error {url}: {e}")

for f in sorted(list(found)):
    print(f"FOUND: {f}")
