'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Bread() {
    const pathname = usePathname()
    const roots = [""];
    const paths = decodeURI(pathname).substring(1).split("/")

    for (let i = 0; i < paths.length; i++) {
        roots.push(roots[i] + "/" + paths[i]);
    }

    return (
        <nav>
            <Link href={'/'}>Home</Link>
            {paths.map((x, i) => (
                <div key={i}>
                    {/* サブページのリンク */}
                    {">"}
                    <Link href={roots[i + 1]} key={i}>
                        {x}
                    </Link>
                </div>
            ))}            
        </nav>
    )
}
