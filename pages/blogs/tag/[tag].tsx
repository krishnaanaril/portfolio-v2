import BlogCard from '../../../components/blog-card';
import { getAllTags, getPublishedDocsDescending } from "../../../lib/posts";

export async function getStaticPaths() {
    const paths = getAllTags();
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }: { params: { tag: string } }) {
    const blogsByTags = await getPublishedDocsDescending()
        .filter(doc => doc.meta.keywords.map((word: string) => word?.toLowerCase()).includes(params.tag))
        .map(doc => ({ id: doc.id, ...doc.meta }));    
    return {
        props: {
            allBlogs: blogsByTags,
        },
    };
}

export default function BlogByCategory({ allBlogs }: { allBlogs: any }) {
    return (
        <div className="container mx-auto min-h-screen bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-50">
            <div className="flex flex-row flex-wrap justify-center">
                {allBlogs.map((data: any) => (
                    <BlogCard key={data.id} blogData={data}></BlogCard>
                ))}
            </div>
        </div>
    );
}