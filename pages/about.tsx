import Image from 'next/image';
import Head from 'next/head';

export default function About() {
    return (
        <>
            <Head>
                <title> About | Krishna Mohan A M</title>
                <meta name="title"  content="Krishna Mohan A M"/>
                <meta name="description" content="Microsoft Certified Full Stack Developer, who works mainly in Angular, .NET and SQL Server" />
                <meta name="keywords" content="Krishna Mohan, krishnaanaril, developer, engineer, angular, dotnet, sql, azure" />

                <meta name="twitter:card" content="summary" />
                <meta name="twitter:url" content="https://krishnamohan.dev/about" />
                <meta name="twitter:title" content="Krishna Mohan A M" />
                <meta name="twitter:description" content="Microsoft Certified Full Stack Developer, who works mainly in Angular, .NET and SQL Server" />
                <meta name="twitter:image" content="https://krishnamohan.dev/icons/icon-192x192.png" />
                <meta name="twitter:creator" content="@krishnaanaril" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Krishna Mohan A M" />
                <meta property="og:description" content="Microsoft Certified Full Stack Developer, who works mainly in Angular, .NET and SQL Server" />
                <meta property="og:site_name" content="Krishna Mohan A M" />
                <meta property="og:url" content="https://krishnamohan.dev/about" />
                <meta property="og:image" content="https://krishnamohan.dev/images/dp.jpeg" />
            </Head>
            <article className='prose dark:prose-invert lg:prose-xl md:prose-lg max-w-screen-md mx-auto'>
                {/* <div className="text-center">
                <h1 className="my-4">I'm Krishna Mohan.</h1>
            </div> */}
                <div className='flex flex-col flex-wrap'>
                    <div className="flex justify-center">
                        <Image src="/images/dp.webp" alt="Krishna Mohan's DP" className="m-auto w-64 h-64 rounded-full" quality="100" width={400} height={400} />
                    </div>
                    <div className="text-center">
                        <h2>I'm a Senior Full-Stack Engineer & Microsoft Certified Azure Solutions Architect</h2>
                        <p>Right now I'm working as an <strong>Associate Project Manager</strong> at EY in Kochi, Kerala. </p>
                    </div>
                </div>
            </article>
        </>
    );
}