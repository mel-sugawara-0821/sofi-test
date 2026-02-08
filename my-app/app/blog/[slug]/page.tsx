type Props = {
    params: Promise<{ //Promiseを書く
      slug: string;
    }>;
}

async function getPostBySlug(slug: string) {
    const posts = {
        'next-js': {
            title: 'Next.jsについて',
            body: 'bodyですbodyですbodyです',
            date: '2026-02-01',
            category: 'js',
            author: '山田太郎'
        },
        'about-ts': {
            title: 'TSについて',
            body: 'bodyですbodyですbodyです',
            date: '2026-02-01',
            category: 'js',
            author: '山田太郎'
        },
        'about-js': {
            title: 'JSについて',
            body: 'bodyですbodyですbodyです',
            date: '2026-02-01',
            category: 'js',
            author: '山田太郎'
        }
    }
    return posts[slug as keyof typeof posts] || null
}

export default async function Post({ params}: Props ) {
    const param = await params;
    const post = await getPostBySlug(param.slug);

    if (!post) {
        return (
            <div>
                <h2>記事が見つかりません</h2>
                <p className="text-gray-500">指定された記事が存在しない</p>
            </div>
        )
    }

    return (
        <article>
            <header>
                <div>
                    <span>{post.category}</span>
                </div>
            </header>
        </article>
    )
}
