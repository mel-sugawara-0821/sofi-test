import { createClient } from 'microcms-js-sdk';

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
export const getDetail = async (contentId: string) => {
    const blog = await client.getListDetail<Blog>({
        endpoint: "blogs",
        contentId,
    });
    return blog;
};