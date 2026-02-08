import Link from "next/link";
import { Metadata } from "next";
import { getAllPosts, getPostsByCategory } from "@/libs/post";

type Props = {
    params: {
        name: string
    }
}

export  async function generateMetadata({ params}: Props ): Promise<Metadata> {
    const param = await params;
    const category_name = param.name.charAt(0).toLocaleUpperCase()+param.name.slice(1)
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

export default function Category() {
    return (
        <div>カテゴリー</div>
    )
}

