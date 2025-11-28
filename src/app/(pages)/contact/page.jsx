'use client'

import Title from '@/app/components/Title'
import React, { useEffect, useState } from 'react'
import { FaTimes } from 'react-icons/fa';
import { useRouter } from 'next/navigation'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Page() {
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
            {/* Wipe animation overlay */}
            <div
                className={`fixed inset-0 z-50 bg-black transition-transform duration-1000 ease-in-out
                ${showWipe ? 'translate-y-0' : '-translate-y-full'}`}
            ></div>

            {/* Main section */}
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
                    <div className='mt-4'>
                        <Title subTitle="Get in Touch" title="Feel free to contact me anytimes" />

                        <div className="max-w-4xl mx-auto mt-10 text-white space-y-12">

                            <p className="text-center text-gray-400 max-w-2xl mx-auto leading-relaxed">
                                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                            </p>

                            {/* 🔥 THE FIX — Proper 2-column grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8">

                                {/* LEFT side */}
                                <div className="space-y-6">
                                    <h3 className="text-2xl font-semibold">Contact Information</h3>

                                    <div className="space-y-4 text-gray-300">

                                        <p>
                                            <span className="font-semibold text-white">Email:</span><br />
                                            <a href="mailto:test@email.com" className="hover:text-[#DCC5B2]">
                                                test@email.com
                                            </a>
                                        </p>

                                        <p>
                                            <span className="font-semibold text-white">Phone:</span><br />
                                            <a href="tel:+880123456789" className="hover:text-[#DCC5B2]">
                                                +880 123 456 789
                                            </a>
                                        </p>

                                        <p>
                                            <span className="font-semibold text-white">Location:</span><br />
                                            Dhaka, Bangladesh 🇧🇩
                                        </p>

                                    </div>

                                    {/* Social Icons */}
                                    <div className="space-y-3">
                                        <h3 className="text-3xl font-bold tracking-wide">Follow Me</h3>

                                        <div className="flex items-center gap-4 mt-2">
                                            <a href="#" className="p-3 bg-[#181818] rounded-lg border border-gray-800 hover:border-[#DCC5B2] hover:text-[#DCC5B2] transition">
                                                <FaFacebookF size={20} />
                                            </a>
                                            <a href="#" className="p-3 bg-[#181818] rounded-lg border border-gray-800 hover:border-[#DCC5B2] hover:text-[#DCC5B2] transition">
                                                <FaLinkedinIn size={20} />
                                            </a>
                                            <a href="#" className="p-3 bg-[#181818] rounded-lg border border-gray-800 hover:border-[#DCC5B2] hover:text-[#DCC5B2] transition">
                                                <FaInstagram size={20} />
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* RIGHT side — Contact Form */}
                                <div className="bg-[#181818] p-6 rounded-lg shadow-lg border border-gray-800">
                                    <form className="space-y-6">

                                        <div className="flex flex-col">
                                            <label className="text-sm text-gray-400 mb-1">Your Name</label>
                                            <input
                                                type="text"
                                                className="bg-[#111] border border-gray-700 rounded-md p-3 text-white focus:outline-none focus:border-[#DCC5B2] transition"
                                                placeholder="Enter your name"
                                            />
                                        </div>

                                        <div className="flex flex-col">
                                            <label className="text-sm text-gray-400 mb-1">Your Email</label>
                                            <input
                                                type="email"
                                                className="bg-[#111] border border-gray-700 rounded-md p-3 text-white focus:outline-none focus:border-[#DCC5B2] transition"
                                                placeholder="Enter your email"
                                            />
                                        </div>

                                        <div className="flex flex-col">
                                            <label className="text-sm text-gray-400 mb-1">Message</label>
                                            <textarea
                                                rows="5"
                                                className="bg-[#111] border border-gray-700 rounded-md p-3 text-white focus:outline-none focus:border-[#DCC5B2] transition resize-none"
                                                placeholder="Write your message..."
                                            ></textarea>
                                        </div>

                                        <button
                                            type="submit"
                                            className="w-full bg-[#DCC5B2] text-black font-semibold py-3 rounded-md hover:bg-[#cbb39e] transition"
                                        >
                                            Send Message
                                        </button>
                                    </form>
                                </div>

                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
