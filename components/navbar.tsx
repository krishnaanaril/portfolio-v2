import Link from 'next/link';
import { useRouter } from "next/router";
import { useState, useEffect } from 'react';

export default function Navbar() {
    const router = useRouter();
    const activeRouteClassNames = "p-4 cursor-pointer border-b-2 border-gray-700 dark:border-gray-300";
    const routeClassNames = "p-4 cursor-pointer";

    const [modalState, setModalState] = useState(false);   
    useEffect(() => {
        if(modalState) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    });

    return (
        <>
            <nav className="sticky top-0 bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-50 bg-opacity-50 dark:bg-opacity-50 backdrop-blur-lg">
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
                <div className="lg:hidden mr-4 p-4 right-0">
                    <button className="p-2" aria-label="view menu items" onClick={()=>setModalState(true)}>
                        <svg className="fill-gray-800 dark:fill-gray-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="24px" height="24px">
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
                        </svg>
                    </button>
                </div>
            </nav>
            <div style={{ display: modalState ? 'block': 'none'}} className="fixed top-0 left-0 bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-50 bg-opacity-50 dark:bg-opacity-50 backdrop-blur-lg block h-screen lg:hidden p-2 w-screen z-1">
                <div className="bg-gray-100 bg-opacity-100 m-5 p-5 rounded-lg shadow-xl dark:bg-gray-600 dark:text-gray-50">
                    <div className="flex flex-row justify-end">
                        <button className="dark:text-gray-50" aria-label="close menu items" onClick={()=>setModalState(false)}>
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path
                                    d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                            </svg>
                        </button>
                    </div>
                    <ul className="list-none">
                        <li className={router.asPath == '/' ? activeRouteClassNames : routeClassNames}>
                            <Link href={'/'} onClick={()=>setModalState(false)}>Home</Link>
                        </li>
                        <li className={router.asPath.startsWith('/blog') ? activeRouteClassNames : routeClassNames}>
                            <Link href={'/blogs'} onClick={()=>setModalState(false)}>Blog</Link></li>
                        <li className={router.asPath.startsWith('/projects') ? activeRouteClassNames : routeClassNames}>
                            <Link href={'/projects'} onClick={()=>setModalState(false)}>Projects</Link></li>
                        <li className={router.asPath.startsWith('/about') ? activeRouteClassNames : routeClassNames}>
                            <Link href={'/about'} onClick={()=>setModalState(false)}>About</Link></li>
                    </ul>
                </div>
            </div >
        </>
    );
}