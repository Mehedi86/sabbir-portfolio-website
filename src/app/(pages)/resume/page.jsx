'use client'

import React, { useState, useEffect } from 'react'
import { FaTimes } from 'react-icons/fa'
import Title from '@/app/components/Title'
import { useRouter } from 'next/navigation'

export default function ResumePage() {
  const [showWipe, setShowWipe] = useState(true)
  const router = useRouter()

  // Wipe up on mount
  useEffect(() => {
    const timer = setTimeout(() => setShowWipe(false), 100)
    return () => clearTimeout(timer)
  }, [])

  // Handle close: wipe down then navigate
  const handleClose = () => {
    setShowWipe(true)
    setTimeout(() => router.push('/'), 1000)
  }

  return (
    <>
      {/* Overlay wipe animation */}
      <div
        className={`fixed inset-0 z-50 bg-black transition-transform duration-1000 ease-in-out ${showWipe ? 'translate-y-0' : '-translate-y-full'
          }`}
      ></div>

      {/* Resume Modal Section */}
      <div className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm overflow-y-auto">
        <div className="min-h-[1200px] p-2 lg:p-8 md:p-16 text-white bg-[#111] relative">
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors"
          >
            <FaTimes size={24} />
          </button>

          {/* Main content */}
          <div>
            <Title title="Check out my Resume" subTitle="Resume" />

            <div className="max-w-6xl mx-auto mt-12 lg:flex gap-12">
              {/* left side */}
              <div className="lg:w-1/2">
                <h1 className="text-3xl font-semibold">Education</h1>

                <div className="border-l-2 border-[#0b9f6b] mt-6 relative bg-neutral-900">
                  <div className="arrow-clip absolute top-8"></div>
                  <div className="arrow-clip absolute top-68 md:top-68 lg:top-52"></div>
                  <div className="arrow-clip absolute top-128 md:top-128 lg:top-96"></div>

                  {/* Education Item 1 */}
                  <div className="px-12 py-6 h-60 lg:h-fit">
                    <h1 className="text-2xl">Bachelor Degree</h1>
                    <div className="space-y-4 text-neutral-400 pt-2">
                      <p>Daffodil International University / 2021 - 2024</p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo repudiandae.
                      </p>
                    </div>
                  </div>

                  {/* Education Item 2 */}
                  <div className="px-12 py-6 border-t border-neutral-800 h-60 lg:h-fit">
                    <h1 className="text-2xl">Diploma Degree</h1>
                    <div className="space-y-4 text-neutral-400 pt-2">
                      <p>Kushtia Polytechnic Institute / 2016 - 2020 </p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo repudiandae.
                      </p>
                    </div>
                  </div>

                  {/* Education Item 3 */}
                  <div className="px-12 py-6 border-t border-neutral-800 h-60 lg:h-fit">
                    <h1 className="text-2xl">Secondary School Certificate</h1>
                    <div className="space-y-4 text-neutral-400 pt-2">
                      <p>Police Line School and College Kushtia / 2011 - 2016</p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo repudiandae.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* right side */}
              <div className="lg:w-1/2 mt-12 lg:mt-0">
                <h1 className="text-3xl font-semibold">Experience</h1>

                <div className="border-l-2 border-[#0b9f6b] mt-6 relative bg-neutral-900">
                  <div className="arrow-clip absolute top-8"></div>
                  <div className="arrow-clip absolute top-68 md:top-68 lg:top-52"></div>
                  <div className="arrow-clip absolute top-128 md:top-128 lg:top-96"></div>

                  {/* Experience Item 1 */}
                  <div className="px-12 py-6 h-60 lg:h-fit">
                    <h1 className="text-2xl">Client Manager</h1>
                    <div className="space-y-4 text-neutral-400 pt-2">
                      <p> IMBD Agency Ltd / 2025-Present</p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo repudiandae.
                      </p>
                    </div>
                  </div>

                  {/* Experience Item 2 */}
                  <div className="px-12 py-6 border-t border-neutral-800 h-60 lg:h-fit">
                    <h1 className="text-2xl">Jr. Digital Marketing Executive</h1>
                    <div className="space-y-4 text-neutral-400 pt-2">
                      <p>Ads Pillar / 2024 - 2025</p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo repudiandae.
                      </p>
                    </div>
                  </div>

                  {/* Education Item 3 */}
                  <div className="px-12 py-6 border-t border-neutral-800 h-60 lg:h-fit">
                    <h1 className="text-2xl">N/A</h1>
                    <div className="space-y-4 text-neutral-400 pt-2">
                      <p>Works on personal projects</p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo repudiandae.
                      </p>
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
