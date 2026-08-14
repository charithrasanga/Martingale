export const catalog = {
  homeHero: {
    placeholder: "/images/placeholders/home-hero.jpg",
    final: "/images/final/home-hero.jpg",
    video: "/videos/home-hero.mp4",
    alt: "Golden-hour vineyard with a bird on a fence post in the Yarra Valley",
  },
  storyGrapes: {
    placeholder: "/images/placeholders/story-grapes.jpg",
    final: "/images/final/story-grapes.jpg",
    alt: "Weathered hands holding clusters of dark grapes",
  },
  storyVineyard: {
    placeholder: "/images/placeholders/story-vineyard.jpg",
    final: "/images/final/story-vineyard.jpg",
    alt: "Misty vineyard rows and a stone estate building",
  },
  storyBarrels: {
    placeholder: "/images/placeholders/story-barrels.jpg",
    final: "/images/final/story-barrels.jpg",
    alt: "Oak barrels aging in the estate cellar",
  },
  winePinot: {
    placeholder: "/images/placeholders/wine-pinot.jpg",
    final: "/images/final/wine-pinot.png",
    alt: "Martingale Estate Pinot Noir bottle",
  },
  wineChardonnay: {
    placeholder: "/images/placeholders/wine-chardonnay.jpg",
    final: "/images/final/wine-chardonnay.png",
    alt: "Martingale Estate Chardonnay bottle",
  },
  wineShiraz: {
    placeholder: "/images/placeholders/wine-shiraz.jpg",
    final: "/images/final/wine-shiraz.png",
    alt: "Martingale Estate Shiraz bottle",
  },
  wineCabernet: {
    placeholder: "/images/placeholders/wine-cabernet.jpg",
    final: "/images/final/wine-cabernet.png",
    alt: "Martingale Estate Cabernet Sauvignon bottle",
  },
  experienceBanner: {
    placeholder: "/images/placeholders/experience-banner.jpg",
    final: "/images/final/experience-banner.png",
    alt: "Golden-hour vineyard rows and the estate cellar door",
  },
  journalLeaves: {
    placeholder: "/images/placeholders/journal-leaves.jpg",
    final: "/images/final/journal-leaves.png",
    alt: "Sunlit grapevine leaves over a soft golden vineyard",
  },
  ig1: {
    placeholder: "/images/placeholders/ig-1.jpg",
    final: "",
    alt: "Vineyard still",
  },
  ig2: {
    placeholder: "/images/placeholders/ig-2.jpg",
    final: "",
    alt: "Grapes on the vine",
  },
  ig3: {
    placeholder: "/images/placeholders/ig-3.jpg",
    final: "",
    alt: "Wine in glass",
  },
  ig4: {
    placeholder: "/images/placeholders/ig-4.jpg",
    final: "",
    alt: "Vineyard landscape",
  },
  clubGlass: {
    placeholder: "/images/placeholders/club-glass.jpg",
    final: "/images/final/club-glass.png",
    alt: "Hand holding a glass of red wine in low light",
  },
  estateHero: {
    placeholder: "/images/placeholders/estate-hero.jpg",
    final: "/images/final/estate-hero.jpg",
    alt: "Dawn mist over vineyard rows and rolling hills in the Yarra Valley",
  },
  strip1: {
    placeholder: "/images/placeholders/strip-1.jpg",
    final: "/images/final/strip-1.jpg",
    alt: "Sunlit vineyard row with wooden posts and glowing leaves",
  },
  strip2: {
    placeholder: "/images/placeholders/strip-2.jpg",
    final: "/images/final/strip-2.jpg",
    alt: "Dark grape cluster on the vine in golden light",
  },
  strip3: {
    placeholder: "/images/placeholders/strip-3.jpg",
    final: "/images/final/strip-3.jpg",
    alt: "Sunrise over vineyard rows and rolling hills",
  },
  strip4: {
    placeholder: "/images/placeholders/strip-4.jpg",
    final: "/images/final/strip-4.jpg",
    alt: "New grapevine shoot on an old trunk in golden light",
  },
  varietalPinot: {
    placeholder: "/images/placeholders/varietal-pinot.jpg",
    final: "/images/final/varietal-pinot.jpg",
    alt: "Pinot Noir grapes on the vine in golden light",
  },
  varietalChardonnay: {
    placeholder: "/images/placeholders/varietal-chardonnay.jpg",
    final: "/images/final/varietal-chardonnay.jpg",
    alt: "Chardonnay grapes on the vine in warm sunlight",
  },
  varietalShiraz: {
    placeholder: "/images/placeholders/varietal-shiraz.jpg",
    final: "/images/final/varietal-shiraz.jpg",
    alt: "Shiraz grapes on the vine with dew in golden light",
  },
  varietalCabernet: {
    placeholder: "/images/placeholders/varietal-cabernet.jpg",
    final: "/images/final/varietal-cabernet.jpg",
    alt: "Cabernet Sauvignon grapes on the vine in golden light",
  },
  sustainableLandscape: {
    placeholder: "/images/placeholders/sustainable.jpg",
    final: "/images/final/sustainable.jpg",
    alt: "Aerial view of the estate house, pond, and vineyard at golden hour",
  },
} as const;

export type ImageKey = keyof typeof catalog;

export function slot(key: ImageKey) {
  const item = catalog[key];
  return {
    src: item.final || item.placeholder,
    alt: item.alt,
    video: "video" in item ? item.video : undefined,
  };
}
