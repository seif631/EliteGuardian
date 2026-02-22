import urllib.request
import re

url = 'https://skycoach.gg/destiny-boost'
headers = {'User-Agent': 'Mozilla/5.0'}

try:
    req = urllib.request.Request(url, headers=headers)
    with urllib.request.urlopen(req, timeout=10) as response:
        html = response.read().decode('utf-8')
        paths = re.findall(r'(/storage/uploads/products/.*?\.(?:png|jpg|webp|jpeg))', html)
        with open('found_paths.txt', 'w') as f:
            for p in sorted(list(set(paths))):
                f.write(f"https://skycoach.gg{p}\n")
        print(f"Done. Found {len(set(paths))} paths.")
except Exception as e:
    print(f"Error: {e}")
