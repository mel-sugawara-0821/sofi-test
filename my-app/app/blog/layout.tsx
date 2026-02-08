import Link from 'next/link'

export default function BlogLayout({
    children
} :Readonly<{
    children: React.ReactNode;
}>
) {
    return (
        <div className="container">
            <div className="
                grid
                grid-cols-1
                md: grid-cols-4
                gap-8
            ">
                <aside className="md: grid-span-1">
                    <div className="bg-white shadow p-6 sticky top-8">
                        <h3 className='font-bold'>カテゴリ</h3>
                        <nav>
                            <Link href="/blog" className='block'>
                                  全ての記事
                            </Link>
                            <Link href="/blog/category/programming" className='block'>
                              プログラミング
                            </Link>
                            <Link href="/blog/category/other" className='block'>
                              その他
                            </Link>
                        </nav>
                        <div className='mt-5'>
                            <h3 className='font-bold'>最近の投稿</h3>
                            <div>
                                <Link href="/blog" className='block'>
                                      全ての記事
                                </Link>
                                <Link href="/blog/category/programming" className='block'>
                                  プログラミング
                                </Link>
                                <Link href="/blog/category/other" className='block'>
                                  その他
                                </Link>
                            </div>
                        </div>
                    </div>
                </aside>
                <main className="md: grid-span-3">{children}</main>
            </div>
        </div>
    )
}
