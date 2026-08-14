from __future__ import annotations

import os
from urllib.request import Request, urlopen

OUT = r"D:\Learn\Martingale_2\web\public\images\placeholders"
os.makedirs(OUT, exist_ok=True)

# Unsplash image IDs chosen for warm vineyard / wine still-life chrome
DOWNLOADS = {
    "home-hero.jpg": "1560493676-04071c5f467b",
    "story-grapes.jpg": "1537640538966-79f369143f8f",
    "story-vineyard.jpg": "1506377247377-2a5b3b417ebb",
    "story-barrels.jpg": "1578916171728-46686eac8d58",
    "wine-pinot.jpg": "1584916201218-f4242ceb4809",
    "wine-chardonnay.jpg": "1553361371-9b22a082e900",
    "wine-shiraz.jpg": "1470337453412-0c69bbbbea88",
    "wine-cabernet.jpg": "1569529465841-dfecdab7503b",
    "experience-banner.jpg": "1414235077428-338989a2e8c0",
    "journal-leaves.jpg": "1507436267619-0f2a1d5d0c3a",
    "ig-1.jpg": "1464630359373-4c0d18f0512c",
    "ig-2.jpg": "1506377247377-2a5b3b417ebb",
    "ig-3.jpg": "1510812431401-41d2bd2722f3",
    "ig-4.jpg": "1474722883778-792e7990302f",
    "club-glass.jpg": "1510812431401-41d2bd2722f3",
    "estate-hero.jpg": "1474722883778-792e7990302f",
    "strip-1.jpg": "1560493676-04071c5f467b",
    "strip-2.jpg": "1537640538966-79f369143f8f",
    "strip-3.jpg": "1474722883778-792e7990302f",
    "strip-4.jpg": "1506377247377-2a5b3b417ebb",
    "varietal-pinot.jpg": "1537640538966-79f369143f8f",
    "varietal-chardonnay.jpg": "1506377247377-2a5b3b417ebb",
    "varietal-shiraz.jpg": "1464630359373-4c0d18f0512c",
    "varietal-cabernet.jpg": "1474722883778-792e7990302f",
    "sustainable.jpg": "1506905925346-21bda4d32df4",
}

FALLBACKS = [
    "1560493676-04071c5f467b",
    "1506377247377-2a5b3b417ebb",
    "1510812431401-41d2bd2722f3",
    "1584916201218-f4242ceb4809",
    "1474722883778-792e7990302f",
]


def fetch(photo_id: str, path: str) -> bool:
    url = f"https://images.unsplash.com/photo-{photo_id}?auto=format&fit=crop&w=1800&q=80"
    req = Request(url, headers={"User-Agent": "MartingaleEstate/1.0"})
    try:
        with urlopen(req, timeout=30) as res:
            data = res.read()
        if len(data) < 8000:
            print(f"TOO SMALL {path} {len(data)}")
            return False
        with open(path, "wb") as f:
            f.write(data)
        print(f"OK {path} {len(data)}")
        return True
    except Exception as e:
        print(f"FAIL {path} {photo_id} {e}")
        return False


for name, pid in DOWNLOADS.items():
    dest = os.path.join(OUT, name)
    if os.path.exists(dest) and os.path.getsize(dest) > 8000:
        print(f"SKIP {name}")
        continue
    if fetch(pid, dest):
        continue
    for fb in FALLBACKS:
        if fetch(fb, dest):
            break
