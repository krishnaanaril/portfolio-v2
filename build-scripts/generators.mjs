import fs from 'fs';
import path, { join } from 'path';
import matter from 'gray-matter';
import { Feed } from 'feed';

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

export function getPublishedDocs() {
  return getAllDocs()
      .filter(doc => doc.meta.published == true);
}

export function addPage(id) {
  return `  <url>
    <loc>${`https://krishnamohan.dev/blog/${id}/`}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
    </url>`
}

export function getPublishedDocsDescending() {
  return getPublishedDocs()
    .sort((a, b) => {
      if (a.meta.publishedAt < b.meta.publishedAt) {
        return 1;
      } else if (a.meta.publishedAt > b.meta.publishedAt) {
        return -1;
      } else {
        return 0;
      }
    });
}

export function generateSitemap() {
  const blogDetails = getPublishedDocs()
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
  fs.writeFileSync('public/sitemap.xml', sitemap);
}

export function generateRssFeed() {
  const blogDetails = getPublishedDocsDescending().map(doc => ({id: doc.id, ...doc.meta}));
  const site_url = 'https://krishnamohan.dev';

  const feedOptions = {
    title: 'Krishna Mohan A M | RSS Feed',
    description: 'Personal site of Krishna Mohan, who blogs about tech, football and trivia.',
    id: site_url,
    link: site_url,
    image: `${site_url}/logo.png`,
    favicon: `${site_url}/favicon.png`,
    copyright: `© 2021-present Krishna Mohan A M. All Rights Reserved.`,
    generator: 'Feed for Node.js',
    feedLinks: {
      rss2: `${site_url}/rss.xml`,
    },
  };

  const feed = new Feed(feedOptions);

  blogDetails.forEach((post) => {
    feed.addItem({
      title: post.title,
      id: `${site_url}/blog/${post.id}`,
      link: `${site_url}/blog/${post.id}`,
      description: post.description,
      date: new Date(post.publishedAt),
    });
  });

  fs.writeFileSync('public/rss.xml', feed.rss2());
  fs.writeFileSync('public/rss.atom', feed.atom1());
  fs.writeFileSync('public/rss.json', feed.json1());
}

(async () => {
  console.log("Generators Started");
  generateSitemap();
  console.log("Steps (1/2) completed");
  generateRssFeed();
  console.log("Steps (2/2) completed");
  console.log("Generators Completed");
})();