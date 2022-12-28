import Link from 'next/link';
import Image from 'next/image';

export default function BlogCard({ blogData }: any) {
    const { id, title, description, image } = blogData;
    return (
        <div className="m-2 rounded-lg shadow-lg w-full py-5 md:w-2/5 lg:w-1/3 xl:w-1/4">
            <Image src={`/${image}.webp`} alt={title} className="w-full rounded-lg" quality="100" width={400} height={400} />
            <div className="px-6 py-4">
                <div className="text-gray-700 mt-1.5 mb-1.5 line-clamp-2 dark:text-gray-400">
                    <p className='line-clamp-3 min-h-[4.5rem]'>
                        {description}
                    </p>
                </div>
            </div>
            <div className='px-6'>
                <Link href={`/blog/${id}`} className="group inline-flex items-center px-6 py-1.5 rounded-3xl ring-2 ring-gray-700">
                    Read more
                    <svg className="mt-0.5 ml-2 -mr-1 stroke-2 stroke-gray-800 dark:stroke-gray-50" fill="none" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
                        <path className="transition opacity-0 group-hover:opacity-100" d="M0 5h7"></path>
                        <path className="transition group-hover:translate-x-[3px]" d="M1 1l4 4-4 4"></path>
                    </svg>
                </Link>
            </div>
        </div>
    );
}