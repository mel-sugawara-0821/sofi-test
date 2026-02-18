import Link from "next/link"

export default function AdvancedLink() {
    return (
        <div className="flex flex-col">
            {/* 基本 */}
            <Link
                href='/blog'
            >基本的なリンク</Link>

            {/* 外部リンク */}
            <Link
                href='/blog'
                target="_brank"
            >
                外部リンク
            </Link>

            {/* プリフェッチ制御 */}
            <Link
                href='/blog'
                prefetch={false}
            >
                プリフェッチ制御
            </Link>

            {/* オブジェクト形式 */}
            <Link
                href={{
                    pathname: '/blog'
                }}
                prefetch={false}
            >
                オブジェクト形式
            </Link>


        </div>
    )

}
