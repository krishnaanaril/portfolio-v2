import Link from 'next/link';
import MenuModal from './menu-modal';
import { useRouter } from "next/router";
import { useState, useEffect } from 'react';

export default function Navbar() {
    const router = useRouter();
    const activeRouteClassNames = "border-b-2 border-gray-700 dark:border-gray-300";
    const routeClassNames = "";

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
                                <Link className='block p-4 cursor-pointer' href={'/'}>Home</Link>
                            </li>
                            <li className={router.asPath.startsWith('/blog') ? activeRouteClassNames : routeClassNames}>
                                <Link className='block p-4 cursor-pointer' href={'/blogs'}>Blog</Link></li>
                            <li className={router.asPath.startsWith('/projects') ? activeRouteClassNames : routeClassNames}>
                                <Link className='block p-4 cursor-pointer' href={'/projects'}>Projects</Link></li>
                            <li className={router.asPath.startsWith('/about') ? activeRouteClassNames : routeClassNames}>
                                <Link className='block p-4 cursor-pointer' href={'/about'}>About</Link></li>
                        </ul>
                    </nav>
                </section>
                <div className="lg:hidden mr-4 py-4 right-0">
                    <button className="p-2" aria-label="view menu items" onClick={()=>setModalState(true)}>
                        <svg className="fill-gray-800 dark:fill-gray-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="24px" height="24px">
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
                        </svg>
                    </button>
                </div>
            </nav>
            <MenuModal modalState={modalState} closeModal={()=>setModalState(false)}></MenuModal>
        </>
    );
}