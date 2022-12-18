import Layout from '../../components/layout';
import BlogEn from '../../components/blog-en';
import markdownToHtml, { getAllPostIds, getDocBySlug } from '../../lib/posts';

export default function Post({ meta, content }) {
  return (
    <Layout>
      <BlogEn meta={meta}>
        {content}
      </BlogEn>      
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const doc = await getDocBySlug(params.id);
  const content = await markdownToHtml(doc.content || '');

  return {
    props: {
      ...doc,
      content
    }
  };
}