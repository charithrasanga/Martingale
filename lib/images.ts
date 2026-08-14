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
    final: "",
    alt: "Misty vineyard at dawn",
  },
  strip1: {
    placeholder: "/images/placeholders/strip-1.jpg",
    final: "",
    alt: "Vineyard landscape",
  },
  strip2: {
    placeholder: "/images/placeholders/strip-2.jpg",
    final: "",
    alt: "Grape close-up",
  },
  strip3: {
    placeholder: "/images/placeholders/strip-3.jpg",
    final: "",
    alt: "Sunset over the rows",
  },
  strip4: {
    placeholder: "/images/placeholders/strip-4.jpg",
    final: "",
    alt: "Vine leaf close-up",
  },
  varietalPinot: {
    placeholder: "/images/placeholders/varietal-pinot.jpg",
    final: "",
    alt: "Pinot Noir grapes",
  },
  varietalChardonnay: {
    placeholder: "/images/placeholders/varietal-chardonnay.jpg",
    final: "",
    alt: "Chardonnay grapes",
  },
  varietalShiraz: {
    placeholder: "/images/placeholders/varietal-shiraz.jpg",
    final: "",
    alt: "Shiraz grapes",
  },
  varietalCabernet: {
    placeholder: "/images/placeholders/varietal-cabernet.jpg",
    final: "",
    alt: "Cabernet Sauvignon grapes",
  },
  sustainableLandscape: {
    placeholder: "/images/placeholders/sustainable.jpg",
    final: "",
    alt: "Estate landscape with water and vines",
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
