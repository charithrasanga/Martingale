import os
import shutil
from urllib.request import Request, urlopen

OUT = r"D:\Learn\Martingale_2\web\public\images\placeholders"

# Same-estate vineyard for the estate hero (not the wine-glass still)
shutil.copyfile(
    os.path.join(OUT, "home-hero.jpg"),
    os.path.join(OUT, "estate-hero.jpg"),
)
shutil.copyfile(
    os.path.join(OUT, "story-grapes.jpg"),
    os.path.join(OUT, "journal-leaves.jpg"),
)
shutil.copyfile(
    os.path.join(OUT, "ig-1.jpg"),
    os.path.join(OUT, "sustainable.jpg"),
)

# Dusk landscape for experience banner
url = "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=1800&q=80"
req = Request(url, headers={"User-Agent": "MartingaleEstate/1.0"})
dest = os.path.join(OUT, "experience-banner.jpg")
with urlopen(req, timeout=30) as res:
    data = res.read()
with open(dest, "wb") as f:
    f.write(data)
print("experience", len(data))
print("copied estate-hero, journal-leaves, sustainable")
