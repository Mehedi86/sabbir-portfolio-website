'use client'

import Link from 'next/link'
import { useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa"

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = (
    <>
      <li>Home</li>
      <li>About</li>
      <li>Resume</li>
      <li>Portfolio</li>
      <li>Blog</li>
      <li>Contact</li>
    </>
  )

  return (
    <nav className='flex justify-between items-center px-6 lg:px-12 py-4 lg:py-8 text-stone-200 relative z-50'>
      {/* left side Title name */}
      <div className='flex items-center gap-2'>
        <img src='/logo.jpg' className='w-10' />
        <Link href="/"><h1 className='text-2xl font-semibold'>Sabbir</h1></Link>
      </div>

      {/* right side nav item */}
      {/* visible on large screens */}
      <div className='hidden lg:block'>
        <ul className='flex gap-6'>{navLinks}</ul>
      </div>

      {/* mobile menu button */}
      <button
        className="flex items-center lg:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span
          className={`inline-block transition-transform duration-700 ${menuOpen
            ? "rotate-180 scale-110"
            : "rotate-360 scale-100"
            }`}
        >
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </span>
      </button>

      <div
        className={`lg:hidden absolute top-20 right-12 w-64 p-8 shadow-lg rounded bg-stone-200 dark:bg-stone-800 transition-all duration-300 text-black dark:text-white ${menuOpen
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
      >
        <ul className="flex flex-col gap-4">{navLinks}</ul>
      </div>
    </nav>
  )
}
