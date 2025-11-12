import React from 'react'
import { Twitter, Facebook, Linkedin, Github, Instagram } from "lucide-react";
import Link from 'next/link'

export default function Designation({handleImageLoad}) {
    
    return (
        <div className="mt-4 lg:mt-12 lg:flex max-w-6xl mx-auto">
            <img
                src="/about-photo.JPG"
                alt="About photo"
                className="lg:w-4/12 rounded-xl object-cover"
                onLoad={handleImageLoad}
            />
            <div className="lg:pl-16 py-6">
                <div className="space-y-4">
                    <p className="text-[#DCC5B2] text-2xl font-semibold">Who am I?</p>
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
                        <div className='md:w-1/2 space-y-6'>
                            <h1>Name:<span className='text-neutral-400 pl-4'>Sabbir Ahmed</span></h1>
                            <h1>Email:<span className='text-[#DCC5B2] pl-4'>sabbir89654@gmail.com</span></h1>
                        </div>
                        <div className='md:w-1/2 space-y-6 mt-4 md:mt-0 '>
                            <h1>Age:<span className='text-neutral-400 pl-4'>N/A</span></h1>
                            <h1>From:<span className='text-neutral-400 pl-4'>Kushtia, Bangladesh</span></h1>
                        </div>
                    </div>
                    <div className='mt-10 md:flex space-y-6 md:space-y-0 justify-between items-center w-fit'>
                        <Link href="/" className='px-8 py-2 rounded-3xl bg-linear-to-l from-[#DCC5B2] to-transparent'>Download CV</Link>
                        <div className='border-t-2 border-neutral-600 my-10 md:my-0 w-20 mx-10'></div>
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
    )
}
