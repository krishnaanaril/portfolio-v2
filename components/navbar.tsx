import Link from 'next/link';

export default function Navbar() {
    return (
        <>
            <div className="bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-50">
                <section className="hidden lg:flex flex-row justify-center">
                    <nav>
                        <ul className="lg:text-xl lg:flex lg:flex-row">
                            <li className="p-3 cursor-pointer">
                                <Link href={'/'}>Home</Link>
                            </li>
                            <li className="p-3 cursor-pointer">Blog</li>
                            <li className="p-3 cursor-pointer">Projects</li>
                            <li className="p-3 cursor-pointer">About</li>
                        </ul>
                    </nav>
                </section>
                <div className="absolute lg:hidden mr-4 p-4 right-0">
                    <button className="p-2" aria-label="view menu items">
                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="24px" height="24px">
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
                        </svg>
                    </button>
                </div>
            </div>
        </>
    );
}