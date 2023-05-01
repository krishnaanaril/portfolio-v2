import Image from 'next/image';

export default function About() {
    return (
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
    );
}