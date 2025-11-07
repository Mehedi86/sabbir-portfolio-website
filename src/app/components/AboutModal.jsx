'use client'

import { motion, AnimatePresence } from "framer-motion"
import { FaTimes } from "react-icons/fa"
import TitleAnimation from "./TitleAnimation"

export default function AboutModal({ isOpen, onClose }) {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm overflow-y-auto"
                    // Step 1: Fade in black background first
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    {/* Step 2: Delay content animation to start AFTER background is visible */}
                    <motion.div
                        initial={{ rotateY: 90, opacity: 0 }}
                        animate={{ rotateY: 0, opacity: 1 }}
                        exit={{ rotateY: 90, opacity: 0 }}
                        transition={{
                            duration: 1.5,
                            ease: "easeInOut",
                            delay: 0.3, // wait for the black screen to appear first
                        }}
                        className="min-h-screen p-8 md:p-16 text-white bg-[#111] relative"
                    >
                        {/* Close button */}
                        <button
                            className="absolute top-6 right-6 text-gray-400 hover:text-white"
                            onClick={onClose}
                        >
                            <FaTimes size={24} />
                        </button>
                        <div>
                            {/* section title  */}
                            <div className="space-y-2">
                                <p className="text-lg text-stone-200 text-center">Get to know me</p>
                                <h1 className="text-4xl font-bold text-center">About Me</h1>
                                <TitleAnimation />
                            </div>

                            {/* about me section  */}
                            <div className="mt-4 lg:mt-12 md:flex max-w-7xl mx-auto">
                                {/* about me left  */}
                                <img src="/about-photo.jpg" className="lg:w-4/12" alt="" />
                                <div className="lg:pl-16 py-6">
                                    <div className="space-y-4">
                                        <p className="text-[#00b381] text-2xl font-semibold">Who am i?</p>
                                        <h1 className="text-white text-4xl font-bold">I'm Sabbir Ahmed, a Digital marketer and Meta ads specialist</h1>
                                        <p className="text-gray-400">I am a freelancer based in the United Kingdom and i have been building noteworthy UX/UI designs and websites for years, which comply with the latest design trends. I help convert a vision and an idea into meaningful and useful products. Having a sharp eye for product evolution helps me prioritize tasks, iterate fast and deliver faster.</p>
                                    </div>
                                    <div className="h-0.5 bg-neutral-600 my-12"></div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
