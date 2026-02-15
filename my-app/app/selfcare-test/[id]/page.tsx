import { getDetail } from "@/libs/client";
import { PageId } from "@/types/ui/types"

export default async function SelfCareShow({params}: PageId) {
    const resolved_params = await params;
    const post = await getDetail(resolved_params.id);

    // TODO: エラーハンドリング
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
            <h2 className="font-bold">{post.title}</h2>
            <p>{post.body}</p>
        </article>
    )
}


