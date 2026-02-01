"use client"

import { useState, useEffect } from "react";
import Image from 'next/image'
import beast_img from "../public/beast.jpg";

export default function Home() {
  const [currentDate, setCurrentDate] = useState<string>('');

  useEffect(() => {
    updateDate();
    const interval = setInterval(updateDate, 1000);
    return () => clearInterval(interval);
  }, [])

  const updateDate = () => {
    const newDate = new Date();
    const formatedDate = newDate.toLocaleString("ja-JP", {
      year: "numeric",
      month: "long",
      day: "numeric",
      weekday: "long",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    })
    setCurrentDate(formatedDate);
  }

  return (
    <main className="container home text-center mx-auto px-4 py-8">
      <div>
        <h1>秘密のブログ</h1>
        <p>Next.js学習者のためのサイト</p>
        <div>{currentDate}</div>
        <div className="mx-auto">
          <Image
            src={beast_img}
            alt='beast'
            style={{margin: 'auto'}}
           />
        </div>
      </div>
    </main>
  );
}