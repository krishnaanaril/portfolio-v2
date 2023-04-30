import BlogCard from '../components/blog-card';
import { getPublishedDocsDescending } from '../lib/posts';
import Head from 'next/head';

export async function getStaticProps() {
  const recentSixBlogs = getPublishedDocsDescending().map(doc => ({ id: doc.id, ...doc.meta })).slice(0, 6);
  return {
    props: {
      recentSixBlogs,
    },
  };
}


export default function Home({ recentSixBlogs }: { recentSixBlogs: any }) {
  return (
    <>
      <Head>
        <title> Krishna Mohan A M | Microsoft Certified Full Stack Developer</title>
        <meta name="application-name" content="Krishna Mohan A M" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Krishna Mohan A M" />
        <meta name="description" content="Microsoft Certified Full Stack Developer, who works mainly in Angular, .NET and SQL Server" />
        <meta name="keywords" content="Krishna Mohan, krishnaanaril, developer, engineer, angular, dotnet, sql, azure" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#2B5797" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#1f2937" />

        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png"></link>
        <link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#5bbad5" />
        <link rel="shortcut icon" href="/favicon.ico" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://krishnamohan.dev" />
        <meta name="twitter:title" content="Krishna Mohan A M" />
        <meta name="twitter:description" content="Microsoft Certified Full Stack Developer, who works mainly in Angular, .NET and SQL Server" />
        <meta name="twitter:image" content="https://krishnamohan.dev/icons/icon-192x192.png" />
        <meta name="twitter:creator" content="@krishnaanaril" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Krishna Mohan A M" />
        <meta property="og:description" content="Microsoft Certified Full Stack Developer, who works mainly in Angular, .NET and SQL Server" />
        <meta property="og:site_name" content="Krishna Mohan A M" />
        <meta property="og:url" content="https://krishnamohan.dev" />
        <meta property="og:image" content="https://krishnamohan.dev/images/dp.jpeg" />
      </Head>
      <div
        className="flex flex-col h-[80vh] justify-evenly bg-gray-200 text-gray-800 lg:flex-row dark:bg-gray-800 dark:text-gray-50">
        <div className="flex flex-col justify-center">
          <h1 className="font-bold mx-auto text-3xl md:text-4xl lg:text-6xl slideInUp">Krishna Mohan A M</h1>
          <h2 className="mx-auto text-2xl md:text-3xl">I Code. I Sketch. I Slide tackle.</h2>
        </div>
      </div>
      <div className="bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-50">
        <div className="flex flex-row">
          <h2 className="mx-auto text-2xl">Recent Blogs</h2>
        </div>
        <div className="flex flex-row flex-wrap justify-center">
          {recentSixBlogs.map((data: any) => (
            <BlogCard key={data.id} blogData={data}></BlogCard>
          ))}
        </div>
      </div>
    </>
  );
}
