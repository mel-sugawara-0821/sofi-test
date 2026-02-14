import { getBlogs } from '@/libs/client';

export default async function SelfCare() {
    const { contents }  = await getBlogs();
    console.log('contents-------')
    console.log(contents)

    return (
        <>
            <h2>セルフケアtest一覧</h2>
        </>
    )
}
