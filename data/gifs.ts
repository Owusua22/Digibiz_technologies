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
  "digital-marketing-seo": {
    gif: GIFS.chart,
    alt: "Digital marketing growth chart illustration",
  },
  "business-automation": {
    gif: GIFS.puzzle,
    alt: "Business automation puzzle pieces illustration",
  },
  "ai-solutions": {
    gif: GIFS.layers,
    alt: "AI technology layers and neural network illustration",
  },
  "branding-graphic-design": {
    gif: GIFS.coins,
    alt: "Brand value and return on investment illustration",
  },
  "business-digital-strategy": {
    gif: GIFS.rocket,
    alt: "Business growth strategy rocket illustration",
  },
};
