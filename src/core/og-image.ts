export interface OpenGraphMedia {
    url: string;
    width?: number;
    height?: number;
    alt?: string;
    type?: string;
    secureUrl?: string;
}

export const getOpenGraphImage = (title: string): OpenGraphMedia => ({
  url: `${import.meta.env.CANONICAL_URL}/api/og?title=${encodeURIComponent(title)}`,
  width: 1200,
  height: 630,
});
