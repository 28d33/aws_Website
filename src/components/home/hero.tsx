"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"

const COMMAND = "aws configure --profile you"

const EASE = [0.16, 1, 0.3, 1] as const

function Hero() {
  const [typed, setTyped] = useState(0)
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    setReduceMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches)
  }, [])

  useEffect(() => {
    if (reduceMotion) {
      setTyped(COMMAND.length)
      return
    }
    let i = 0
    const start = setTimeout(() => {
      const timer = setInterval(() => {
        i += 1
        setTyped(i)
        if (i >= COMMAND.length) clearInterval(timer)
      }, 42)
      return () => clearInterval(timer)
    }, 1100)
    return () => clearTimeout(start)
  }, [reduceMotion])

  const commandReady = typed >= COMMAND.length

  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-5 pt-36 sm:px-8 sm:pt-44 pb-20 sm:pb-28">
        {/* The one orchestrated moment: the builder's line typing out on load */}
        <div className="h-8 font-mono text-sm text-muted" aria-hidden={typed < COMMAND.length}>
          <span className="text-foreground">$&nbsp;</span>
          <span>{COMMAND.slice(0, typed)}</span>
          <span
            className="ml-0.5 inline-block h-4 w-2 translate-y-0.5 bg-orange"
            style={{ animation: commandReady ? "blink 1.1s step-end infinite" : undefined }}
          />
        </div>

        {/* Headline — left aligned, flat color, one line per idea */}
        <h1 className="mt-10 font-serif text-[clamp(2.9rem,10vw,7.25rem)] font-light leading-[1.02] tracking-tight text-foreground">
          <motion.span
            className="block"
            initial={{ opacity: 0, y: 36 }}
            animate={commandReady ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE }}
          >
            Learn cloud.
          </motion.span>
          <motion.span
            className="block pl-[8%]"
            initial={{ opacity: 0, y: 36 }}
            animate={commandReady ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.12, ease: EASE }}
          >
            Build on AWS.
          </motion.span>
          <motion.span
            className="block text-muted"
            initial={{ opacity: 0, y: 36 }}
            animate={commandReady ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.24, ease: EASE }}
          >
            Together.
          </motion.span>
        </h1>

        <div className="mt-12 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={commandReady ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="max-w-md"
          >
            <p className="text-base leading-relaxed text-muted">
              The AWS student group at MARVEL, UVCE. No gates, no fees — a community that builds.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-3">
              <Link
                href="/events"
                className="rounded-md bg-blue px-5 h-11 flex items-center text-sm font-semibold text-slate-950 transition-colors hover:bg-blue-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue"
              >
                View events
              </Link>
              <Link
                href="/team"
                className="rounded-md border border-border px-5 h-11 flex items-center text-sm text-muted transition-colors hover:border-blue hover:text-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue"
              >
                Meet the team
              </Link>
            </div>
          </motion.div>

          {/* Real data row — hairline separated, not a stat banner */}
          <motion.dl
            initial={{ opacity: 0 }}
            animate={commandReady ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex gap-8 border-l-2 border-orange pl-6 sm:gap-10 sm:border-l sm:pl-8"
          >
            {[
              ["400+", "builders"],
              ["5", "events run"],
              ["7", "leads"],
            ].map(([value, label]) => (
              <div key={label}>
                <dt className="sr-only">{label}</dt>
                <dd className="font-mono text-2xl font-medium text-foreground sm:text-3xl">{value}</dd>
                <dd className="mt-1 text-xs text-muted">{label}</dd>
              </div>
            ))}
          </motion.dl>
        </div>
      </div>
    </section>
  )
}

export { Hero }
