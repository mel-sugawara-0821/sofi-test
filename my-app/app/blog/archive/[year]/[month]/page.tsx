import Link from 'next/link'
import { getPostsByYearMonth } from "@/libs/post";
import { notFound } from "next/navigation";

type Props = {
    params: {
        year: string,
        month: string
    }
}

export default async function Archive({params}: Props) {
    const param = await params;
    const { year, month } = param;
    const yearNum = parseInt(year);
    const monthNum = parseInt(month);

    if (isNaN(yearNum) || isNaN(monthNum) || monthNum < 1 || monthNum < 1) {
        return (notFound())
    }
    const monthNames = [
        '1月',
        '2月',
        '3月',
        '4月',
        '5月',
        '6月',
        '7月',
        '8月',
        '9月',
        '10月',
        '11月',
        '12月',
    ]

    const posts = getPostsByYearMonth(year, month);
    
    return (
        <div>
            <h2>{year}年{monthNames[monthNum - 1]}</h2>
            {posts.length > 0 ? (
                <div>
                    {posts.map((post) =>
                        (
                            <article key={post.slug} className="bg-white rounded-lg shadow">
                                <div className='flex items-center gap-2'>
                                    <span className='bg-blue-100 text-sm'>{post.category}</span>
                                    <time className='text-sm'>{new Date(post.date).toLocaleString('jp-Jp')}</time>
                                </div>
                                <h2 className='font-bold'>
                                    <Link href={`/blog/${post.slug}`}>
                                        {post.title}
                                    </Link>
                                </h2>
                                <div className='text-gray-500'>
                                    {post.abstract}
                                </div>
                            </article>
                        )
                    )}
                </div>
            ) : (
                <div>記事が見つかりませんでした。</div>
            )}
        </div>
    )
}
