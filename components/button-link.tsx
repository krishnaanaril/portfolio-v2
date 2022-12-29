import Link from 'next/link';

export default function ButtonLink({ url, children }: any) {
    return (
        <Link href={url} className='px-6'>
            <div className="group inline-flex items-center px-6 py-1.5 rounded-3xl ring-2 ring-gray-700">
                {children}
                <svg className="mt-0.5 ml-2 -mr-1 stroke-2 stroke-gray-800 dark:stroke-gray-50" fill="none" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
                    <path className="transition opacity-0 group-hover:opacity-100" d="M0 5h7"></path>
                    <path className="transition group-hover:translate-x-[3px]" d="M1 1l4 4-4 4"></path>
                </svg>
            </div>
        </Link>
    );
}