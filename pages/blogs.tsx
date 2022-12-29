
import BlogCard from '../components/blog-card';
import { getAllDocsDescending } from '../lib/posts';

export async function getStaticProps() {
    const allBlogs = getAllDocsDescending().map(doc => ({ id: doc.id, ...doc.meta }));
    return {
        props: {
            allBlogs,
        },
    };
}


export function getAllDocsWithFilter(allDocs: any[]) {    

    const api = {
        filteredDocs: allDocs,
        byCategory(category: any) {
            console.log(`byCategory: ${category}`);
            if(category?.trim()) {
                this.filteredDocs = allDocs.filter(doc => doc.category == category);
            }
            return api;
        },
        byTag(tag: any) {
            console.log(`byTag: ${tag}`);
            if(tag?.trim()) {
                this.filteredDocs = allDocs.filter(doc => doc.keywords.some((x: string) => x == tag));
            }
            return api;
        }
    };
    return api;
}

export default function Blogs({ allBlogs }: { allBlogs: any }) {   
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