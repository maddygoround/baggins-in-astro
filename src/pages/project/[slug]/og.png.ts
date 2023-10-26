
import type { APIRoute } from 'astro';
import { getBlogTable } from "../../../core/blog";
import { config } from "../../../config";
import { generateOgImageForProject } from "../../../core/generate-og-image";
import type { Project } from 'types/project';

export const prerender = true;

export const getStaticPaths = async () => {
  const table = await getBlogTable<Project>(config.notionProjectTableId)
  return table
    .filter((row) => row.published)
    .map((row, index) => {
      return {
        params: {
          slug: `${row.slug}`,
        },
        props: {
          project: row,
        },
      }
    })
    .filter(Boolean)
}

export const GET: APIRoute = async ({ props }) =>
  new Response(await generateOgImageForProject(props.project as Project), {
    headers: {
      'content-type': 'image/png',
      'cache-control': 's-maxage=31536000, stale-while-revalidate'
    }
  });

