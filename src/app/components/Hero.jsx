'use client'

import React, { useState, useEffect } from 'react'
import SocialBar from './SocialBar'
import { ReactTyped } from 'react-typed'
import Link from 'next/link'
import { FaCircleArrowRight } from "react-icons/fa6";

export default function Hero() {
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        // Preload the hero image
        const img = new Image();
        img.src = '/hero-2.webp'; // make sure path is correct
        img.onload = () => setImageLoaded(true);
    }, []);

    return (
        <div
            className={`relative h-screen w-full bg-hero-sm lg:bg-hero-lg transition-opacity duration-1000 ease-out`}
            style={{ opacity: imageLoaded ? 1 : 0 }}
        >
            {imageLoaded && (
                <div className="flex flex-col justify-center min-h-screen relative overflow-hidden">
                    <div className="flex justify-center items-center">
                        <div className="flex flex-col space-y-4 text-white pb-46">
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold px-6 text-center">
                                Sabbir Ahmed
                            </h1>
                            <p className="text-center text-lg md:text-2xl lg:text-3xl">
                                I'm a{" "}
                                <ReactTyped
                                    strings={["Digital Marketer", "Meta ads specialist", "Content Creator"]}
                                    typeSpeed={60}
                                    backSpeed={40}
                                    backDelay={2000}
                                    loop
                                />
                            </p>
                            <div className="md:flex justify-center hidden">
                                <Link
                                    href="/about"
                                    className="mt-2 text-sm capitalize p-1 md:p-2 flex items-center gap-4 
                                    bg-linear-to-l from-[#DCC5B2] to-transparent text-white font-medium hover:scale-90 transform transition duration-300 ease-in-out
                                    rounded-md"
                                >
                                    Let's Explore More
                                    <FaCircleArrowRight className="text-white" size={22} />
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8">
                        <SocialBar />
                    </div>
                </div>
            )}
        </div>
    );
}
