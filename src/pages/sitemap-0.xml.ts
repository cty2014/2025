import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const site = 'https://wisecom.biz';
  const now = new Date().toISOString();
  
  // 所有頁面列表（包含優先級和最後修改時間）
  const pages = [
    { path: '', priority: '1.0', changefreq: 'weekly' },
    { path: '/about', priority: '0.8', changefreq: 'monthly' },
    { path: '/build-with-us', priority: '0.8', changefreq: 'monthly' },
    { path: '/contact', priority: '0.7', changefreq: 'monthly' },
    { path: '/projects', priority: '0.9', changefreq: 'weekly' },
    // Blog 頁面
    { path: '/blog/ai-trends-2026', priority: '0.8', changefreq: 'monthly' },
    { path: '/blog/ai-investment-strategy', priority: '0.8', changefreq: 'monthly' },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${pages.map(page => `  <url>
    <loc>${site}${page.path}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};



