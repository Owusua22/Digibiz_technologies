const GIF_BASE = "/Salepush – SEO & Digital Marketing Theme_files";

export const GIFS = {
  layers: `${GIF_BASE}/12-layers-flat-1.gif`,
  chart: `${GIF_BASE}/153-bar-chart-growth-flat-1.gif`,
  puzzle: `${GIF_BASE}/186-puzzle-flat.gif`,
  globe: `${GIF_BASE}/27-globe-flat.gif`,
  coins: `${GIF_BASE}/298-coins-flat.gif`,
  rocket: `${GIF_BASE}/rocket2c.png`,
  priceBadge: `${GIF_BASE}/h3_price.png`,
} as const;

export const SERVICE_GIF_MAP: Record<string, { gif: string; alt: string }> = {
  "website-development": {
    gif: GIFS.globe,
    alt: "Global website development illustration",
  },
  "mobile-app-development": {
    gif: GIFS.layers,
    alt: "Mobile app technology layers illustration",
  },
  "digital-marketing": {
    gif: GIFS.chart,
    alt: "Digital marketing growth chart illustration",
  },
  "graphic-design": {
    gif: GIFS.coins,
    alt: "Brand value and return on investment illustration",
  },
  "seo-services": {
    gif: GIFS.rocket,
    alt: "Search visibility growth illustration",
  },
  "business-it-solutions": {
    gif: GIFS.puzzle,
    alt: "Connected business systems puzzle illustration",
  },
};