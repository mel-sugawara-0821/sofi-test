'use client'

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import React, { useState } from "react";

export default function SearchAndNavigation() {
    const router = useRouter();
    const searchParam = useSearchParams()
    const pathname = usePathname()
    const [searchTerm, setSearchTerm] = useState(searchParam?.get("q") || "")

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault()

        if (searchTerm.trim()) {
            router.push(`/blog/?q=${encodeURIComponent(searchTerm.trim())}`)
        }
    }

    const clearSearch = () => {
        console.log('clearSearch------')
    }

    return (
        <div>
            <h2>ナビゲーション機能</h2>
            <form onSubmit={handleSearch}>
                <div className="flex gap-2">
                    <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
                    <button type="submit">検索</button>
                    {searchTerm && (
                        <button onClick={clearSearch}>クリア</button>
                    )}
                </div>
            </form>
        </div>
    )
}