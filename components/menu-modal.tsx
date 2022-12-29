import Link from 'next/link';
import { useRouter } from "next/router";

export default function MenuModal() {
    const router = useRouter();
    const activeRouteClassNames = "p-4 cursor-pointer border-b-2 border-gray-700 dark:border-gray-300";
    const routeClassNames = "p-4 cursor-pointer";
    return (
        <div className="fixed bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-50 bg-opacity-50 dark:bg-opacity-50 backdrop-blur-lg block h-screen lg:hidden p-2 w-screen z-1">
            <div className="bg-gray-100 bg-opacity-100 m-5 p-5 rounded-lg shadow-xl dark:bg-gray-600 dark:text-gray-50">
                <div className="flex flex-row justify-end">
                    <button className="dark:text-gray-50" aria-label="close menu items">
                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path
                                d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                        </svg>
                    </button>
                </div>
                <ul className="list-none">
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
            </div>
        </div >
    );
}