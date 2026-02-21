import { getBlogs } from '@/libs/client';
import styles from './selfcares.module.scss'
import Test from '@/components/Test';

export default async function SelfCareIndex() {
    const { contents }  = await getBlogs();

    // // TODO: エラーハンドリング
    if (!contents) {
      return <h1>No Contents</h1>;
    }

    // TODO: ページネーション
    return (
        <div className={styles.selfcare}>
            <h2>セルフケアtest一覧</h2>
            <Test contents={contents}/>
        </div>
    )
}
