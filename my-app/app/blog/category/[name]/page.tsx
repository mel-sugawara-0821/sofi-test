import Link from "next/link";
import { Metadata } from "next";
import { getAllPosts, getPostsByCategory } from "@/libs/post";
import { spawn } from "child_process";

type Props = {
    params: {
        name: string
    }
}

export async function getFormatedCategory({params}: Props) {
    const param = await params;
    return param.name.charAt(0).toLocaleUpperCase()+param.name.slice(1)
}

export  async function generateMetadata({ params}: Props ): Promise<Metadata> {
    const param = await params;
    const category_name = await getFormatedCategory({params})
    const posts = getPostsByCategory(param.name)

    return {
        title: `${category_name}の記事一覧 | Dosaのブログ`,
        description: `${category_name}の説明です`,
    }
}

// TODO: これなんだ？
// 静的パスの生成
export async function generateStaticParams() {
    const posts = getAllPosts();
    const categories = [
        ...new Set(posts.map((post) => post.category.toLocaleLowerCase()))
    ]

    return categories.map((category) => ({
        name: category
    }))
}

export default async function Category({params}: Props) {
    const param = await params;
    const category_name = param.name;
    const posts = getPostsByCategory(category_name)
    const display_category_name = await getFormatedCategory({params})    

    return (
        <div>
            <div>
                <Link href='/blog'>
                    ブログ一覧に戻る
                </Link>
            </div>
            <h2 className="font-bold">{display_category_name}の記事</h2>
            <p>{posts.length} 件の記事が見つかりました。</p>
            {posts.length > 0 ? (
                <div>
                    {posts.map((post) => (
                        <article key={post.slug} className="shadow">
                            <span>{post.category}</span>
                            <div className="flex items-center gap-2">
                                <div>{new Date(post.date).toLocaleDateString('jp-JP')}</div>
                                <span>{post.readTime}</span>
                            </div>
                            <h2 className="font-semibold">
                                <Link href={`/blog/${post.slug}`}>
                                    {post.title}
                                </Link>
                            </h2>
                            <p>{post.abstract}</p>
                            <div>by, {post.author}</div>
                            <div className="flex flex-wrap gap-2">{post.tags.slice(0, 3).map((tag) => (
                                <span key={tag} className="bg-gray-100 text-gray-700 text-xs p-2 rounded">#{tag}</span>
                            ))}</div>
                        </article>
                    ))}
                </div>
            ):(
                <h2>記事が見つかりませんでした。</h2>
            ) }
        </div>
    )
}

