import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

export default function FirstPost() {
    return (
        <>
            <Head>
                <title>First Post</title>
            </Head>
            <h1>First Post</h1>
            <h2>
                <Link href="/">Back to home</Link>
            </h2>
            <Image src="/images/dp.jpeg" alt="my dp" height={144} width={144}></Image>
        </>
    );
}