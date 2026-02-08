export type Post = {
    slug: string,
    title: string,
    content: string,
    abstract: string,
    date: string,
    category: string,
    author: string,
    tags: string[],
    readTime: number
}

// ダミー記事のデータ
export const posts: Post[] = [
    {
        slug: 'about-next-js',
        title: 'Next.jsについて',
        content: 'bodyですbodyですbodyです',
        abstract: 'abstractです',
        date: '2026-02-01',
        category: 'programming',
        author: '山田太郎',
        tags: ['Next.js'],
        readTime: 2
    },
    {
        slug: 'about-ts',
        title: 'Next.jsについて',
        content: 'bodyですbodyですbodyです',
        abstract: 'abstractです',
        date: '2026-02-01',
        category: 'programming',
        author: '山田太郎',
        tags: ['Next.js'],
        readTime: 2
    }
]

// スラッグから記事を取得する
export function getPostBySlug(slug: string): Post | null {
    return posts.find((post) => post.slug === slug) || null
}

// カテゴリ別の記事を取得する
export function getPostsByCategory(category: string): Post[] {
    return posts.filter((post) => post.category.toLocaleLowerCase() === category.toLocaleLowerCase());
}

// 全件取得する
export function getAllPosts(): Post[] {
    return posts
}