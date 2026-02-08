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
        category: 'js',
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
        category: 'js',
        author: '山田太郎',
        tags: ['Next.js'],
        readTime: 2
    }
]

// スラッグから記事を取得する
export function getPostBySlug(slug: string): Post | null {
    return posts.find((post) => post.slug === slug) || null
}

// TODO: 作成
// カテゴリ別の記事を取得する
// export function getPostByCategory(slug: string): Post | null {
//     return posts.find((post) => {
//         console.log('post-------------')
//         console.log(post)
//     })
// }

// TODO: 作成
// 全件取得する
// export function getAllPosts(slug: string): Post[] {
//     return posts.find((post) => {
//         console.log('post-------------')
//         console.log(post)
//     })
// }