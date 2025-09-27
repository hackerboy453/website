"use client"

import { useState, useEffect } from "react"
import BootSequence from "@/components/boot-sequence"
import Desktop from "@/components/desktop"

export default function Home() {
  const [isBooting, setIsBooting] = useState(true)
  const [isInitialized, setIsInitialized] = useState(false)

  useEffect(() => {
    // Check if user has already booted the system in this session
    const hasBooted = sessionStorage.getItem('adi-os-booted')
    
    if (hasBooted === 'true') {
      // Skip boot sequence if already booted in this session
      setIsBooting(false)
    }
    
    setIsInitialized(true)
  }, [])

  const handleBootComplete = () => {
    // Mark that the system has been booted in this session
    sessionStorage.setItem('adi-os-booted', 'true')
    setIsBooting(false)
  }

  // Show loading state while checking session storage
  if (!isInitialized) {
    return (
      <main className="h-screen w-full overflow-hidden bg-black flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </main>
    )
  }

  return (
    <main className="h-screen w-full overflow-hidden">
      {isBooting ? <BootSequence onComplete={handleBootComplete} /> : <Desktop />}
    </main>
  )
}
