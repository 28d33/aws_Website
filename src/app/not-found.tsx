"use client"

import { FadeIn } from "@/components/animations/fade-in"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4">
      <FadeIn direction="up">
        <motion.div
          animate={{
            y: [0, -16, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="mb-8 text-center"
        >
          <span className="text-[10rem] font-bold leading-none text-blue sm:text-[12rem]">
            404
          </span>
        </motion.div>
      </FadeIn>

      <FadeIn direction="up" delay={0.1}>
        <h1 className="mb-3 text-3xl font-bold text-black dark:text-white sm:text-4xl">
          Page not found
        </h1>
      </FadeIn>

      <FadeIn direction="up" delay={0.2}>
        <p className="mb-8 max-w-md text-center text-muted">
          The page you are looking for does not exist or has been moved. Let us get you back on track.
        </p>
      </FadeIn>

      <FadeIn direction="up" delay={0.3}>
        <Link href="/">
          <Button variant="primary" size="lg">
            <ArrowLeft className="mr-2 h-5 w-5" />
            Go back home
          </Button>
        </Link>
      </FadeIn>
    </div>
  )
}
