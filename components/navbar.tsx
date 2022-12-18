import Link from 'next/link';
import { useRouter } from "next/router";

export default function Navbar() {
    const router = useRouter();
    const activeRouteClassNames = "p-3 cursor-pointer border-b-2 border-gray-700 dark:border-gray-300";
    const routeClassNames = "p-3 cursor-pointer";    
    return (
        <>
            <div className="bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-50">
                <section className="hidden lg:flex flex-row justify-center">
                    <nav>
                        <ul className="lg:text-xl lg:flex lg:flex-row">
                            <li className={router.asPath == '/' ? activeRouteClassNames : routeClassNames}>
                                <Link href={'/'}>Home</Link>
                            </li>
                            <li className={router.asPath.startsWith('/blog') ? activeRouteClassNames : routeClassNames}>
                            <Link href={'/blogs'}>Blog</Link></li>
                            <li className={router.asPath.startsWith('/projects') ? activeRouteClassNames : routeClassNames}>
                            <Link href={'/projects'}>Projects</Link></li>
                            <li className={router.asPath.startsWith('/about') ? activeRouteClassNames : routeClassNames}>
                            <Link href={'/about'}>About</Link></li>
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