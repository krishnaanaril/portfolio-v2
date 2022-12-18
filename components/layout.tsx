import Footer from './footer';
import Navbar from './navbar';

export default function Layout({ children }) {
    return (
        <div>
            <Navbar></Navbar>
            <div className="bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-50 min-h-screen">{children}</div>
            <Footer></Footer>
        </div>
    );
}
