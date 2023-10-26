import type { APIRoute } from "astro";
import { generateOgImageForSite } from "../core/generate-og-image";

export const GET: APIRoute = async () =>
  new Response(await generateOgImageForSite(), {
    headers: { "Content-Type": "image/png" },
  });