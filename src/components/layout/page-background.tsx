"use client"

import { useEffect, useState } from "react"

function PageBackground() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])

  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-background" />
      {mounted && (
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(66, 181, 255, 0.08) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(66, 181, 255, 0.08) 1px, transparent 1px),
              radial-gradient(circle at 15% 25%, var(--blue) 0%, transparent 60%),
              radial-gradient(circle at 85% 75%, var(--orange) 0%, transparent 60%)
            `,
            backgroundSize: '60px 60px, 60px 60px, auto, auto',
          }}
        />
      )}
    </div>
  )
}

export { PageBackground }
