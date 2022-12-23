import BlogEn from '../../components/blog-en';
import markdownToHtml, { getAllPostIds, getDocBySlug } from '../../lib/posts';

export default function Post({ meta, content }: { meta: any, content: string }) {
  return (
    <BlogEn meta={meta}>
      {content}
    </BlogEn>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  const doc = await getDocBySlug(params.id);
  const content = await markdownToHtml(doc.content || '');

  return {
    props: {
      ...doc,
      content
    }
  };
}