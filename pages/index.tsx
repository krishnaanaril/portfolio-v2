import Link from 'next/link';
import Layout from '../components/layout';
import { getSortedPostsData } from '../lib/posts';
import  getFormattedDate from '../lib/helper';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  const topSixBlogs = allPostsData.slice(0, 6);
  return {
    props: {
      topSixBlogs,
    },
  };
}


export default function Home({ topSixBlogs }) {
  return (
    <Layout>
      <div className="bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-50">
        <ul>
          {topSixBlogs.map(({ id, publishedAt, title }) => (
            <li key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              {getFormattedDate(publishedAt)}
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}
