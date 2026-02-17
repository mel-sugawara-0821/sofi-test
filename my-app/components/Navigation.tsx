'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navigation() {
    const path_name = usePathname();
    console.log('path_name-----')
    console.log(path_name)

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const navItems = [
        { href: '/', label: 'Home'},
        { href: '/blog', label: 'Blog'},
        { href: '/about', label: 'About'},
        { href: '/contact', label: 'Contact'},
    ]

    const isActive = (href: string):boolean => {
        console.log('href-----')
        console.log(href)
        return true

    }

    return (
        <header className='flex justify-around bg-gray-100 shadow-sm text-gray-600'>
          <nav>
            <div className='flex justify-around w-100'>
                <div>head</div>
            </div>
          </nav>
        </header>
    )
}
