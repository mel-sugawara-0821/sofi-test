console.log('domain--------')
console.log(process.env.SERVICE_DOMAIN)

import { createClient } from 'microcms-js-sdk';

export type Blog = {
    title: string;
    body: string;   
}

if (!process.env.SERVICE_DOMAIN) {
    throw new Error("MICROCMS_SERVICE_DOMAIN is required");
}

if (!process.env.API_KEY) {
    throw new Error("MICROCMS_SERVICE_DOMAIN is required");
}

export const client = createClient({
    serviceDomain: process.env.SERVICE_DOMAIN,
    apiKey: process.env.API_KEY,
});

// ブログ一覧を取得
export const getBlogs = async () => {
    console.log('getBlogs----------')

    const blogs = await client.getList<Blog>({
        endpoint: "selfcare-test"
    });
    console.log('blogs-----')
    console.log(blogs)


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