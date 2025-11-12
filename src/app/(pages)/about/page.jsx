'use client'

import React, { useState, useEffect } from 'react'
import { FaTimes } from 'react-icons/fa'
import Title from '@/app/components/Title'
import { useRouter } from 'next/navigation'
import Designation from '@/app/components/about/Designation'
import Service from '@/app/components/about/Service'
import Testimonials from '@/app/components/about/Testimonials'


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
        <div className="min-h-[1200px] py-8 px-4 md:p-16 text-white bg-[#111] relative">
          <button
            onClick={handleClose}
            className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors"
          >
            <FaTimes size={24} />
          </button>

          <div>
            <Title title="Get to know me" subTitle="About Me" />
            <Designation
              handleImageLoad={handleImageLoad}
            />
            <Service/>
            <Testimonials/>
          </div>
        </div>
      </div>
    </>
  )
}
