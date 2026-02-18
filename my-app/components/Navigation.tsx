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

    const isActive = (href: string): boolean | null => {
        if (href === '/') {
            return path_name === href;
        }
        console.log('href-----')
        console.log(href)
        return path_name.startsWith(href)
    }

    return (
        <header className='flex justify-around bg-gray-100 shadow-sm text-gray-600'>
            <nav>
                <div className='flex justify-around w-100'>
                    {navItems.map((navItem) => (
                        <Link
                            key={navItem.href}
                            href={navItem.href}
                            className={`${isActive(navItem.href) ? "text-blue-600" : "text-gray-600"}`}
                            >{navItem.label}
                        </Link>
                    ))}
                </div>
                {/* spのナビ */}
                <button 
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="">
                    <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
                {/* モバイルメニュー */}
                {isMobileMenuOpen && (
                    <div className="md:hidden">
                        <div>
                            {navItems.map((navItem) => (
                                <Link
                                    key={navItem.href}
                                    href={navItem.href}
                                    className={`${isActive(navItem.href) ? "text-blue-600" : "text-gray-600"}`}
                                    >{navItem.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </nav>
        </header>
    )
}
