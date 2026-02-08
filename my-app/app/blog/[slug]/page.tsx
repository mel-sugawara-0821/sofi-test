import { Metadata } from 'next';
import { getPostBySlug  } from '@/libs/post';

// NOTE: Metadata
export  async function generateMetadata({ params}: Props ): Promise<Metadata> {
    const param = await params;
    const post = await getPostBySlug(param.slug);

    if (!post) {
        return {
            title: '記事が見つかりません'
        }
    }

    return {
        title: `${post.title} | Dosaのブログ`,
        description: 'descriptionです',
        openGraph: {
            title: post.title,
            description: 'descriptionです',
            type: 'article'
        }
    }
}

type Props = {
    params: Promise<{ //Promiseを書く
      slug: string;
    }>;
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
                <div className="flex justify-between">
                    <span>{post.category}</span>
                    <time>{new Date(post.date).toLocaleString('jp-JP')}</time>
                </div>
                <h2 className="font-bold">
                    {post.title}
                </h2>
            </header>
            <div>
                {post.content}
            </div>
        </article>
    )
}
