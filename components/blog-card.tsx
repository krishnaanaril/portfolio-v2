import Link from 'next/link';
import Image from 'next/image';

export default function BlogCard({ blogData }: any) {
    const { id, title, description, image } = blogData;
    return (
        <Link href={`/blog/${id}`} className="m-2 rounded-lg shadow-lg w-full py-5 md:w-2/5 lg:w-1/3 xl:w-1/4">
            <Image src={`/${image}.webp`} alt={title} className="w-full rounded-lg" quality="100" width={400} height={400} />
            <div className="px-6 py-4">
                <div className="text-gray-700 mt-1.5 mb-1.5 line-clamp-2 dark:text-gray-400">
                    <p className='line-clamp-3 min-h-[4.5rem]'>
                        {description}
                    </p>
                </div>
            </div>            
        </Link>
    );
}