
import type { APIRoute } from 'astro';
import { getBlogTable } from "../../../core/blog";
import { config } from "../../../config";
import type { Post } from "../../../types/blog";
import { generateOgImageForPost } from "../../../core/generate-og-image";

export const prerender = true;

export const getStaticPaths = async () => {
  const table = await getBlogTable<Post>(config.notionBlogTableId)
  return table
    .filter(
      (row) => import.meta.env.NODE_ENV === "development" || row.published
    )
    .map((row) => {
      return {
        params: {
          slug: `${row.slug}`,
        },
        props: {
          post: row,
        },
      }
    })
    .filter(Boolean)
}

export const GET: APIRoute = async ({ props }) =>
  new Response(await generateOgImageForPost(props.post as Post), {
    headers: {
      'content-type': 'image/png',
      'cache-control': 's-maxage=31536000, stale-while-revalidate'
    }
  });

