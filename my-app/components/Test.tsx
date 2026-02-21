'use client'

import { useRef } from "react";
import Link from "next/link";
import styles from './selfcares.module.scss'
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/splide/css'; // デフォルトのテーマを読み込んでいます（コアスタイルのみ読み込む設定も可能）

export default function Test(props: any) {
    const splideRef = useRef<{ go: (control: number | string) => void }>(null);

    return (
        <div className={styles.selfcare}>
            <Splide
                ref={splideRef}
                options={{
                    arrows: false, // デフォルトの矢印を非表示
                    mediaQuery: 'min',
                    perMove: 1, //1度に何枚動かすか
                    fixedWidth: '240px',
                    gap: 16,
                    updateOnMove: true,
                    breakpoints: {
                      1025: {
                        fixedWidth: '360px',
                        gap: 32,
                      }
                    },
                }}
            >
                {props.contents.map((blog: any) => (
                    <SplideSlide key={blog.id}>
                        {/* TODO: urlも動的生成したい */}
                        <Link href={`/selfcare-test/${blog.id}`}>{blog.title}</Link>
                    </SplideSlide>
                ))}
            </Splide>
            <button
                type="button"
                className={styles.splideNextBtn}
                onClick={() => splideRef.current?.go('>')}
                aria-label="次のスライドへ"
            >
                進む
            </button>
        </div>
    )
}
