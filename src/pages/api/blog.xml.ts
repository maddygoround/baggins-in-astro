import { generateRss } from "../../core/rss";
import { getBlogTable } from "../../core/blog";
import { type Post } from "../../types/blog";
import { config } from "../../config";
import type { APIRoute } from 'astro';

export const prerender = false;

export const GET: APIRoute = async ({ params, request }) => {
  const posts = await getBlogTable<Post>(config.notionBlogTableId);
  const filteredPosts = posts
    .filter((post) => import.meta.env.NODE_ENV === "development" || post.published)
    .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));

      return new Response(generateRss(filteredPosts), {
        status: 200,
        headers: {
            'content-type': 'application/rss+xml; charset=utf-8',
            'cache-control': 's-maxage=31536000, stale-while-revalidate'
        }
    })
};
