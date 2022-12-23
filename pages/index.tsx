import Link from 'next/link';
import Image from 'next/image';
import { getAllDocsDescending } from '../lib/posts';
import Head from 'next/head';

export async function getStaticProps() {
  const recentSixBlogs = getAllDocsDescending().map(doc => ({id: doc.id, ...doc.meta})).slice(0, 6);   
  return {
    props: {
      recentSixBlogs,
    },
  };
}


export default function Home({ recentSixBlogs } : {recentSixBlogs: any}) {
  return (
    <>
    <Head>
    <meta name="application-name" content="Krishna Mohan A M" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="default" />
    <meta name="apple-mobile-web-app-title" content="Krishna Mohan A M" />
    <meta name="description" content="Microsoft certified full Stack Developer, who works mainly in Angular, .NET and SQL Server" />
    <meta name="format-detection" content="telephone=no" />
    <meta name="mobile-web-app-capable" content="yes" />    
    <meta name="msapplication-TileColor" content="#2B5797" />
    <meta name="msapplication-tap-highlight" content="no" />
    <meta name="theme-color" content="#1f2937" />
        
    <link rel="manifest" href="/manifest.json" />
    <link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#5bbad5" />
    <link rel="shortcut icon" href="/favicon.ico" />   

    <meta name="twitter:card" content="summary" />
    <meta name="twitter:url" content="https://v2.krishnamohan.dev" />
    <meta name="twitter:title" content="Krishna Mohan A M" />
    <meta name="twitter:description" content="Microsoft certified full Stack Developer, who works mainly in Angular, .NET and SQL Server" />
    <meta name="twitter:image" content="https://v2.krishnamohan.dev/icon-192x192.png" />
    <meta name="twitter:creator" content="@krishnaanaril" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Krishna Mohan A M" />
    <meta property="og:description" content="Microsoft certified full Stack Developer, who works mainly in Angular, .NET and SQL Server" />
    <meta property="og:site_name" content="Krishna Mohan A M" />
    <meta property="og:url" content="https://v2.krishnamohan.dev" />
    <meta property="og:image" content="https://v2.krishnamohan.dev/images/dp.jpg" />
    </Head>
      <div
        className="flex flex-col h-[80vh] justify-evenly bg-gray-200 text-gray-800 lg:flex-row dark:bg-gray-800 dark:text-gray-50">
        <div className="flex flex-col justify-center">
          <h1 className="font-bold mx-auto text-4xl md:text-6xl slideInUp">Krishna Mohan A M</h1>
          <h2 className="mx-auto text-2xl md:text-3xl">I Code. I Sketch. I Slide tackle.</h2>
        </div>
      </div>      
      <div className="bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-50">
        <div className="flex flex-row">
          <h2 className="mx-auto text-2xl">Recent Blogs</h2>
        </div>
        <div className="flex flex-row flex-wrap justify-center">
          {recentSixBlogs.map(({ id, title, description, image }: any) => (
            <Link key={id} href={`/blogs/${id}`} className="m-2 rounded-lg shadow-lg w-full py-5 md:w-2/5 lg:w-1/3 xl:w-1/4">
              <Image src={`/${image}.png`} alt={title} className="w-full rounded-lg" quality="100" width={400} height={400}/>
              <div className="px-6 py-4">
                <div className="text-gray-700 mt-1.5 mb-1.5 line-clamp-2 dark:text-gray-400">
                  <p className='truncate'>
                    { description }
                  </p>
                </div>
              </div>
              <div className="px-6 pt-4 pb-2">
                READ MORE
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
