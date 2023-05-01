import Link from 'next/link';
import Head from 'next/head';

export default function Projects() {
    return (
        <>
            <Head>
                <title> Projects | Krishna Mohan A M</title>
            </Head>
            <article className='prose dark:prose-invert lg:prose-xl md:prose-lg max-w-screen-md mx-auto mt-12'>
                <ul>
                    <li>
                        <Link href="https://github.com/krishnaanaril/hn-shorts">
                            Hacker News Shorts
                        </Link>
                    </li>
                    <li>
                        <Link href="https://github.com/krishnaanaril/cowin-helper">
                            Cowin Helper
                        </Link>
                    </li>
                    <li>
                        <Link href="https://github.com/krishnaanaril/portfolio-v2">
                            Portfolio site (This one)
                        </Link>
                    </li>
                </ul>
            </article>
        </>
    );
}