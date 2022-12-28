
import Link from 'next/link';
import Image from 'next/image';
import { getAllDocsDescending } from '../lib/posts';

export async function getStaticProps() {
    const allBlogs = getAllDocsDescending().map(doc => ({ id: doc.id, ...doc.meta }));
    return {
        props: {
            allBlogs,
        },
    };
}

export default function Blogs({ allBlogs }: { allBlogs: any }) {
    return (
        <div className="container mx-auto min-h-screen bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-50">
            <div className="flex flex-row flex-wrap justify-center">
                {allBlogs.map(({ id, title, description, image }: any) => (
                    <Link key={id} href={`/blog/${id}`} className="m-2 rounded-lg shadow-lg w-full py-5 md:w-2/5 lg:w-1/3 xl:w-1/4">
                        <Image src={`/${image}.png`} alt={title} className="w-full rounded-lg" quality="100" width={400} height={400} />
                        <div className="px-6 py-4">
                            <div className="text-gray-700 mt-1.5 mb-1.5 line-clamp-2 dark:text-gray-400">
                                <p className='truncate'>
                                    {description}
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
    );
}