import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <nav className='flex justify-between items-center px-12 py-8 text-stone-200'>
        {/*left side Title name */}
        <div className='flex items-center gap-2'>
            <img src='/logo.jpg' className='w-10'/>
            <Link href="/"><h1  className='text-2xl font-semibold'>Sabbir</h1></Link>
        </div>
        {/*right side nav item*/}
        <div>
            <ul className='flex gap-6'>
                <Link href="/">About</Link>
                <Link href="/">Resume</Link>
                <Link href="/">Portfolio</Link>
                <Link href="/">Blog</Link>
                <Link href="/">Contact</Link>
            </ul>
        </div>
    </nav>
  )
}
