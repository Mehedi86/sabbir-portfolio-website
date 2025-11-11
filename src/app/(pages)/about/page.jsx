'use client'

import React, { useState, useEffect } from 'react'
import { FaTimes } from 'react-icons/fa'
import Title from '@/app/components/Title'
import { useRouter } from 'next/navigation'
import { Twitter, Facebook, Linkedin, Github, Instagram } from "lucide-react";
import Link from 'next/link'

export default function Page() {
  const [showWipe, setShowWipe] = useState(true)
  const router = useRouter()

  const handleClose = () => {
    setShowWipe(true) // wipe down
    setTimeout(() => router.push('/'), 1000)
  }

  const handleImageLoad = () => {
    setTimeout(() => setShowWipe(false), 100) // wipe up
  }

  useEffect(() => {
    // fallback in case image is cached
    const img = new Image()
    img.src = '/about-photo.JPG'
    img.onload = handleImageLoad
  }, [])

  return (
    <>
      {/* Overlay wipe animation */}
      <div
        className={`fixed inset-0 z-50 bg-black transition-transform duration-1000 ease-in-out ${showWipe ? 'translate-y-0' : '-translate-y-full'
          }`}
      ></div>

      {/* Main content */}
      <div className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm overflow-y-auto">
        <div className="min-h-[1200px] p-8 md:p-16 text-white bg-[#111] relative">
          <button
            onClick={handleClose}
            className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors"
          >
            <FaTimes size={24} />
          </button>

          <div>
            <Title title="Get to know me" subTitle="About Me" />

            <div className="mt-4 lg:mt-12 lg:flex max-w-6xl mx-auto">
              <img
                src="/about-photo.JPG"
                alt="About photo"
                className="lg:w-4/12 rounded-xl object-cover"
                onLoad={handleImageLoad}
              />
              <div className="lg:pl-16 py-6">
                <div className="space-y-4">
                  <p className="text-[#00b381] text-2xl font-semibold">Who am I?</p>
                  <h1 className="text-white text-4xl font-bold">
                    I'm Sabbir Ahmed, a Digital marketer and Meta ads specialist
                  </h1>
                  <p className="text-gray-400">
                    I am a freelancer based in the United Kingdom and I have been
                    building noteworthy UX/UI designs and websites for years,
                    which comply with the latest design trends...
                  </p>
                </div>
                <div className="h-0.5 bg-neutral-600 my-12"></div>
                <div>
                  <div className='md:flex'>
                    <div className='w-1/2 space-y-6'>
                      <h1>Name:<span className='text-neutral-400 pl-4'>Sabbir Ahmed</span></h1>
                      <h1>Email:<span className='text-[#0b9f6b] pl-4'>sabbir89654@gmail.com</span></h1>
                    </div>
                    <div className='w-1/2 space-y-6 mt-4 md:mt-0 '>
                      <h1>Age:<span className='text-neutral-400 pl-4'>N/A</span></h1>
                      <h1>From:<span className='text-neutral-400 pl-4'>Kushtia, Bangladesh</span></h1>
                    </div>
                  </div>
                  <div className='mt-10 md:flex space-y-6 md:space-y-0 justify-between items-center w-fit'>
                    <Link href="/" className='px-8 py-2 rounded-3xl bg-[#0b9f6b]'>Download CV</Link>
                    <div className='border-t-2 border-neutral-600 w-20 mx-10'></div>
                    <div className="flex gap-4 text-neutral-400">
                      <a href="https://twitter.com" target="_blank" className="hover:text-blue-400 transition">
                        <Twitter size={24} />
                      </a>
                      <a href="https://facebook.com" target="_blank" className="hover:text-blue-500 transition">
                        <Facebook size={24} />
                      </a>
                      <a href="https://linkedin.com" target="_blank" className="hover:text-blue-600 transition">
                        <Linkedin size={24} />
                      </a>
                      <a href="https://github.com" target="_blank" className="hover:text-gray-400 transition">
                        <Github size={24} />
                      </a>
                      <a href="https://instagram.com" target="_blank" className="hover:text-pink-500 transition">
                        <Instagram size={24} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
