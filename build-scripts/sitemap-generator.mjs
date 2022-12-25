import fs from 'fs';
import path, { join } from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getDocBySlug(id) {
    const realSlug = id.replace(/\.md$/, '');
    const fullPath = join(postsDirectory, `${realSlug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = JSON.parse(JSON.stringify(matter(fileContents)));

    return { id: realSlug, meta: data, content };
}

export function getAllDocs() {
    const slugs = fs.readdirSync(postsDirectory);
    const docs = slugs.map((slug) => getDocBySlug(slug));

    return docs;
}

export function addPage(id) {
    return `  <url>
    <loc>${`https://krishnamohan.dev/blog/${id}/`}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
    </url>`
}

(async () => {
    const blogDetails = getAllDocs()
        .map(blog => blog.id);
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://krishnamohan.dev</loc>
  </url>
  <url>
    <loc>https://krishnamohan.dev/blogs</loc>
  </url>
  <url>
    <loc>https://krishnamohan.dev/projects</loc>
  </url>
  <url>
    <loc>https://krishnamohan.dev/about</loc>
  </url>
${blogDetails.map(addPage).join('\n')}
</urlset>`
    fs.writeFileSync('public/sitemap.xml', sitemap)
})();