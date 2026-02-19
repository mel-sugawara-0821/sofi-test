'use client'

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import React, { useState } from "react";

export default function SearchAndNavigation() {
    const router = useRouter();
    const searchParam = useSearchParams()
    const pathnam = usePathname()
    const [searchTerm, setSearchTerm] = useState(searchParam.get("q") || "")

    const handleSearch = (e: React.FormEvent) => {
        console.log('handleSearch------')
        e.preventDefault()
    }

    const clearSearch = () => {
        console.log('clearSearch------')
    }

    return (
        <div>
            <h2>ナビゲーション機能</h2>
            <form onSubmit={handleSearch}>
                <div>
                    <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
                    <button type="submit">検索</button>
                    {searchTerm && (
                        <button onClick={clearSearch}></button>
                    )}
                </div>
            </form>
        </div>
    )
}