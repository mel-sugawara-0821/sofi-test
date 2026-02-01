type Post = {
    id: string,
    title: string,
    body: string,
    date: string,
    category: string,
    slug: string
}

// ダミーデータ
const posts: Post[] = [
    {
        id: '1',
        title: 'Next.jsについて',
        body: 'bodyですbodyですbodyです',
        date: '2026-02-01',
        category: 'js',
        slug: 'about-nextjs'
    },
    {
        id: '2',
        title: 'TypeScriptについて',
        body: 'bodyですbodyですbodyです',
        date: '2026-02-02',
        category: 'js',
        slug: 'about-ts'
    }
]

export default function Blog() {
    return (
        <>
            <div className="container">
                <div>
                    <h1>タイトル</h1>
                </div>
            </div>
            <div>
                {posts.map((post) => (
                    <article key={post.id} className="bg-gray-100 mb-3">
                        <div>{post.id}</div>
                        <span>{post.category}</span>
                        <time>{post.date}</time>
                        <h2>{post.title}</h2>
                    </article>
                ))}
            </div>
        </>
    )
}
