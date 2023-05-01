import getFormattedDate from '../lib/helper';
import Link from 'next/link';

export default function BlogEn({ children, meta: pageMeta }: {children: string, meta: any}) {
    return (
        <article className="bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-50">            
            <div>
                <div aria-label="Blog tags/keywords" className="pt-8 flex flex-row justify-center">
                    {pageMeta.keywords.map((keyword: string) => (
                        <Link key={keyword} href={`/blogs/tag/${keyword}`} className="bg-gray-300 dark:bg-gray-700 border border-gray-400 ml-2 mr-2 pb-2 pl-4 pr-4 pt-2 text-sm align-baseline rounded-full">
                            {keyword}
                        </Link>
                    ))}
                </div>
                <div className="max-w-screen-lg mx-auto">
                    <h1 className="text-5xl font-bold pt-5 pb-5 text-center">{pageMeta.title}</h1>
                </div>
                <div className="flex flex-row justify-center m-5 max-w-screen-sm mx-auto">
                    <time className="text-center text-xl">{getFormattedDate(pageMeta.publishedAt)}</time>
                </div>
            </div>
            <div className="prose dark:prose-invert lg:prose-xl md:prose-lg max-w-screen-md mx-auto" dangerouslySetInnerHTML={{ __html: children }} />
        </article>
    );
}