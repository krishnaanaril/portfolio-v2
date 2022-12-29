export default function Footer() {
    return (
        <footer className="flex flex-col bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-50">
            <div className="mt-10">
                <ul className="flex flex-row justify-between max-w-sm mx-auto pl-4 pr-4">
                    <li className="hover:text-gray-600 dark:hover:text-gray-100">
                        <a href="https://twitter.com/KrishnaAnaril">Twitter</a>
                    </li>
                    <li>
                        <a href="https://krishnamohan.dev/sitemap.xml">Sitemap</a>
                    </li>
                    <li>
                        <a href="https://krishnamohan.dev/rss.xml">RSS</a>
                    </li>
                    <li>
                        <a href="mailto:krishnamohan.a.m@gmail.com">Contact</a>
                    </li>
                </ul>
            </div>
            <div className="mx-auto p-5 text-sm">
                <p>© 2021-present <a className="font-bold" href="https://krishnamohan.dev/">Krishna Mohan A M</a>. All Rights
                    Reserved.</p>
            </div>
        </footer>
    );
}