export interface OpenGraphMedia {
    url: string;
    width?: number;
    height?: number;
    alt?: string;
    type?: string;
    secureUrl?: string;
}

export const getOpenGraphImageForSite = (): OpenGraphMedia => ({
  url: `${import.meta.env.CANONICAL_URL}/og.png`,
  width: 1200,
  height: 630,
});

export const getOpenGraphImageForPost = (slug: string): OpenGraphMedia => ({
  url: `${import.meta.env.CANONICAL_URL}/blog/${slug}/og.png`,
  width: 1200,
  height: 630,
});

export const getOpenGraphImageForProject = (slug: string): OpenGraphMedia => ({
  url: `${import.meta.env.CANONICAL_URL}/project/${slug}/og.png`,
  width: 1200,
  height: 630,
});