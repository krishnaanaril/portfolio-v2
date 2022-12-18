import Link from 'next/link';
import Image from 'next/image';
import Layout from '../components/layout';
import { getAllDocsDescending } from '../lib/posts';
import getFormattedDate from '../lib/helper';
import { idText } from 'typescript';

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
    <Layout>
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
    </Layout>
  );
}
