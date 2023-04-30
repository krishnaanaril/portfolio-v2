import fs from 'fs';
import path, { join } from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import prism from 'remark-prism';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getDocBySlug(id: string) {
    const realSlug = id.replace(/\.md$/, '');
    const fullPath = join(postsDirectory, `${realSlug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = JSON.parse(JSON.stringify(matter(fileContents))) ;

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

export default async function markdownToHtml(markdown: string) {
    const result = await remark()
        // https://github.com/sergioramos/remark-prism/issues/265
        .use(html, { sanitize: false })
        .use(prism)
        .process(markdown);
    return result.toString();
}

export function getAllPostIds() {
    const fileNames = fs.readdirSync(postsDirectory);
    return fileNames.map((fileName) => {
        return {
            params: {
                id: fileName.replace(/\.md$/, ''),
            },
        };
    });
}


