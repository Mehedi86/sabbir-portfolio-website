'use client'

import Title from '@/app/components/Title'
import React, { useEffect, useState } from 'react'
import { FaTimes } from 'react-icons/fa';
import { useRouter } from 'next/navigation'

export default function page() {
    const [showWipe, setShowWipe] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => setShowWipe(false), 100)
        return () => clearTimeout(timer)
    }, [])

    const handleClose = () => {
        setShowWipe(true)
        setTimeout(() => router.push('/'), 1000)
    }

    return (

        <>
            {/* Overlay wipe animation */}
            < div
                className={`fixed inset-0 z-50 bg-black transition-transform duration-1000 ease-in-out ${showWipe ? 'translate-y-0' : '-translate-y-full'
                    }`
                }
            ></div >
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
                        <Title subTitle="Portfolio" title="Showcasing some of my best work" />

                    </div>
                </div>
            </div>
        </>
    )
}
