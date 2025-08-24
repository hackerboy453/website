"use client"

import { useState, useEffect } from "react"
import BootSequence from "@/components/boot-sequence"
import Desktop from "@/components/desktop"

export default function Home() {
  const [isBooting, setIsBooting] = useState(true)

  useEffect(() => {
    // Boot sequence duration
    const timer = setTimeout(() => {
      setIsBooting(false)
    }, 5000) // 5 seconds boot time

    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="h-screen w-full overflow-hidden">
      {isBooting ? <BootSequence onComplete={() => setIsBooting(false)} /> : <Desktop />}
    </main>
  )
}
