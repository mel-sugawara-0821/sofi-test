import Link from 'next/link'
import type { Metadata } from "next";
import "./globals.css"
import Navigation from '@/components/Navigation';


export const metadata: Metadata = {
  title: "Title",
  description: "Description",
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>
) {
  return (
    <html lang="ja">
      <body>
        {/* <header className='flex justify-around bg-gray-100 shadow-sm text-gray-600'>
          <nav>
            <div className='flex justify-around w-100'>
              <Link href="/">
                Home
              </Link>
              <Link href="/blog">
                Blog
              </Link>
              <Link href="/about">
                About
              </Link>
              <Link href="/contact">
                Contact
              </Link>
            </div>
          </nav>
        </header> */}
        <Navigation />
        <main>
          {children}
        </main>
        <footer className='text-center'>
          <small>&copy; 2026 dosaken</small>
        </footer>
      </body>
    </html>
  )
}