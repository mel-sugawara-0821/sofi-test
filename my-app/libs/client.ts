import { createClient } from 'microcms-js-sdk';
import { Post } from '@/types/api/types';

// TODO: typesディレクトリ作成？
export type Blog = {
    title: string;
    body: string;   
}

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
    throw new Error("MICROCMS_SERVICE_DOMAIN is required");
}

if (!process.env.MICROCMS_API_KEY) {
    throw new Error("MICROCMS_SERVICE_DOMAIN is required");
}

export const client = createClient({
    serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
    apiKey: process.env.MICROCMS_API_KEY,
});

// ブログ一覧を取得
export const getBlogs = async () => {
    const blogs = await client.getList<Blog>({
        endpoint: "selfcare-test"
    });

    return blogs;
}

// ブログの詳細を取得
export async function getDetail(contentId: string): Promise<Post> {
    const post = await client.getListDetail<Post>({
        // TODO: endpointも動的に渡す
        endpoint: "selfcare-test",
        contentId,
    });

    return post;
}