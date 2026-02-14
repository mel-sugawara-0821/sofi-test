import Link from "next/link";
import { getBlogs } from '@/libs/client';

export default async function SelfCare() {
    const { contents }  = await getBlogs();

    return (
        <>
            <h2>セルフケアtest一覧</h2>
            <ul>
                {contents.map((blog) => (
                    <li key={blog.id}>
                        <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
                    </li>
                ))}
            </ul>
        </>
    )
}
