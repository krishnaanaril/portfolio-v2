import Footer from './footer';
import Navbar from './navbar';
import type { ReactElement, ReactNode } from 'react'

export default function Layout({ children } : { children: ReactNode }) {
    return (
        <div>
            <Navbar></Navbar>
            <div className="min-h-screen">{children}</div>
            <Footer></Footer>
        </div>
    );
}
