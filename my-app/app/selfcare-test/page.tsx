import Link from "next/link";
import { getBlogs } from '@/libs/client';

export default async function SelfCareIndex() {
    const { contents }  = await getBlogs();

    // TODO: エラーハンドリング
    if (!contents) {
      return <h1>No Contents</h1>;
    }

    // TODO: ページネーション
    return (
        <>
            <h2>セルフケアtest一覧</h2>
            <ul>
                {contents.map((blog) => (
                    <li key={blog.id}>
                        <Link href={`/selfcare-test/${blog.id}`}>{blog.title}</Link>
                    </li>
                ))}
            </ul>
        </>
    )
}
