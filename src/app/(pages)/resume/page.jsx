'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { FaTimes } from 'react-icons/fa'
import Title from '@/app/components/Title'
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function ResumePage({ isOpen = true }) {
  const [showModal, setShowModal] = useState(isOpen)
  const router = useRouter()

  // Sync if parent changes open state
  useEffect(() => {
    if (isOpen) setShowModal(true)
  }, [isOpen])

  // ✅ Handle close with animation, then redirect
  const handleClose = () => {
    setShowModal(false)
    setTimeout(() => {
      router.push('/') // go home after animation
    }, 800) // matches the exit animation duration
  }

  return (
    <AnimatePresence>
      {showModal && (
        <motion.div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 60, opacity: 0 }}
            transition={{
              duration: 1.5,
              ease: 'easeOut',
              delay: 0.1,
            }}
            className="min-h-[1200px] p-8 md:p-16 text-white bg-[#111] relative will-change-transform"
          >
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-6 right-6 text-gray-400 hover:text-white"
            >
              <FaTimes size={24} />
            </button>

            {/* Main content */}
            <div>
              <Title title="Check out my Resume" subTitle="Resume" />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
