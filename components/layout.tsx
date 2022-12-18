import Footer from './footer';
import Navbar from './navbar';

export default function Layout({ children }) {
    return (
        <div>
            <Navbar></Navbar>
            <div className="min-h-screen">{children}</div>
            <Footer></Footer>
        </div>
    );
}
