'use client'

import { motion, AnimatePresence } from "framer-motion"
import { FaTimes } from "react-icons/fa"
import TitleAnimation from "./TitleAnimation"
import { useEffect } from "react"

export default function AboutModal({ isOpen, onClose }) {
  // ✅ Preload image to prevent stutter
  useEffect(() => {
    const img = new Image()
    img.src = "/about-photo.JPG"
  }, [])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{
              duration: 1.5,
              ease: "easeOut",
              delay: 0.1,
            }}
            className="min-h-[1200px] p-8 md:p-16 text-white bg-[#111] relative will-change-transform"
          >
            {/* Close button */}
            <button
              className="absolute top-6 right-6 text-gray-400 hover:text-white"
              onClick={onClose}
            >
              <FaTimes size={24} />
            </button>

            {/* Content */}
            <div>
              <div className="space-y-2">
                <p className="text-lg text-stone-200 text-center">Get to know me</p>
                <h1 className="text-4xl font-bold text-center">About Me</h1>
                <TitleAnimation />
              </div>

              <div className="mt-4 lg:mt-12 md:flex max-w-7xl mx-auto">
                <img
                  src="/about-photo.JPG"
                  className="lg:w-4/12 rounded-xl object-cover"
                  alt="About photo"
                  loading="lazy"
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
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
