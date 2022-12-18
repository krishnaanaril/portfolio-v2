import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang='en'>
            <Head>
                <link
                    href="https://unpkg.com/prism-themes@1.6.0/themes/prism-shades-of-purple.css"
                    rel="stylesheet" />
            </Head>
            <body className='bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-50'>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}