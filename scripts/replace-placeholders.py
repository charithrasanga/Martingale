from urllib.request import Request, urlopen
import os

OUT = r"D:\Learn\Martingale_2\web\public\images\placeholders"
REPLACEMENTS = {
    "wine-chardonnay.jpg": "1528825871115-3581a5387919",
    "wine-shiraz.jpg": "1516594915697-87eb3b1c14ea",
    "journal-leaves.jpg": "1416879595882-3373a0480b5b",
    "ig-1.jpg": "1500382017468-9049fed747ef",
    "varietal-shiraz.jpg": "1547595628-c61a29f496f0",
    "experience-banner.jpg": "1600607687939-ce8a6c25118c",
}

for name, pid in REPLACEMENTS.items():
    dest = os.path.join(OUT, name)
    url = f"https://images.unsplash.com/photo-{pid}?auto=format&fit=crop&w=1800&q=80"
    req = Request(url, headers={"User-Agent": "MartingaleEstate/1.0"})
    try:
        with urlopen(req, timeout=30) as res:
            data = res.read()
        if len(data) < 8000:
            print("small", name, len(data))
            continue
        with open(dest, "wb") as f:
            f.write(data)
        print("OK", name, len(data), pid)
    except Exception as e:
        print("FAIL", name, pid, e)
