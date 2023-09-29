export interface OpenGraphMedia {
    url: string;
    width?: number;
    height?: number;
    alt?: string;
    type?: string;
    secureUrl?: string;
}

export const getOpenGraphImage = (title: string): OpenGraphMedia => ({
  url: `https://baggins.me/api/og?title=${encodeURIComponent(title)}`,
  width: 1200,
  height: 630,
});
