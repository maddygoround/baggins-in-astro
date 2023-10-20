
import * as playwright from "playwright-aws-lambda";

import type { APIRoute } from 'astro';

export const prerender = false;
export const GET: APIRoute = async ({ params, request }) => {
    const requestURL = new URL(request.url);

    const browser = await playwright.launchChromium({ headless: true, ignoreDefaultArgs: ['--disable-extensions'] });

    const page = await browser.newPage({
        viewport: {
            width: 1200,
            height: 630,
        },
    });

    const title = requestURL.searchParams.get('title');
    const url = `${import.meta.env.CANONICAL_URL}/og?title=${title}`;
    await page.goto(url, {
        timeout: 15 * 1000,
    });
    const data = await page.screenshot({
        type: "png",
    });

    await browser.close();
    return new Response(data, {
        headers: {
            'content-type': 'image/png',
            'cache-control': 's-maxage=31536000, stale-while-revalidate'
        }
    })
}