import Head from 'next/head';
import BlogEn from '../../components/blog-en';
import markdownToHtml, { getAllPostIds, getDocBySlug } from '../../lib/posts';

export default function Post({ id, meta, content }: { id: string, meta: any, content: string }) {  
  return (
    <>
      <Head>
        <title>{meta?.title}</title>
        {/* Primary Meta Tags */}
        <meta name="title" content={meta?.title}/>
        <meta name="description" content={meta?.description}/>
        {/* Open Graph / Facebook */}
        <meta name="og:type" content="article"/>        
        <meta name="og:url" content={`/blog/${id}`}/>
        <meta name="og:title" content={meta?.title}/>
        <meta name="og:description" content={meta?.description}/>
        <meta name="og:image" content={`${meta?.image}.png`}/>
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:url" content={`/blog/${id}`}/>
        <meta name="twitter:title" content={meta?.title}/>
        <meta name="twitter:description" content={meta?.description}/>
        <meta name="twitter:image" content={`${meta?.image}.png`}/>
        <meta name="twitter:site" content="@krishnaanaril"/>
        <meta name="twitter:creator" content="@krishnaanaril"/>
        <meta name="keywords" content={meta?.keywords?.join(', ')}/>          
        <meta name="og:article:published_time" content={meta?.publishedAt}/>
        <meta name="og:article:modified_time" content={meta?.updatedAt}/>
        <meta name="og:article:author" content="Krishna Mohan A M"/>
        <meta name="og:article:section" content={meta?.category}/>
        <meta name="og:article:tag" content={meta?.keywords?.join(', ')}/>        
      </Head>
      <BlogEn meta={meta}>
        {content}
      </BlogEn>
    </>
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