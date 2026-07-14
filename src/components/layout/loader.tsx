"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

export function Loader() {
  const [isLoading, setIsLoading] = useState(true)
  const [showLoader, setShowLoader] = useState(true)

  useEffect(() => {
    const hasSeen = sessionStorage.getItem("aws-sbg-loaded")
    if (hasSeen) {
      setShowLoader(false)
      setIsLoading(false)
      return
    }
    const timer = setTimeout(() => {
      setIsLoading(false)
      sessionStorage.setItem("aws-sbg-loaded", "true")
      // Give the exit animation time to complete before unmounting
      setTimeout(() => setShowLoader(false), 800)
    }, 2200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {showLoader && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05, filter: "blur(4px)" }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-50 grid place-content-center bg-black"
        >
          <div className="text-center">
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-7xl font-bold tracking-tight text-blue"
            >
              AWS SBG
            </motion.h1>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.76, 0, 0.24, 1] }}
              className="h-px bg-blue mt-6 origin-left"
              style={{ width: "min(420px, 75vw)" }}
            />
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-white/70 text-sm md:text-base mt-6 tracking-widest uppercase"
            >
              Student Builder Group
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
