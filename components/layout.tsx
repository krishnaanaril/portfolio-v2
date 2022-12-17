import Footer from './footer';

export default function Layout({ children }) {
    return (
        <div>
            <h2>Posts</h2>
            <div>{children}</div>
            <Footer></Footer>
        </div>
    );
}
