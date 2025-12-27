"use client"

import React, { createContext, useContext, useEffect, useState } from "react"

const SoundContext = createContext({
  isMuted: false,
  toggleMute: () => {},
})

export const SoundProvider = ({ children }: { children: React.ReactNode }) => {
  const [isMuted, setIsMuted] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem("soundMuted")
    if (stored === "true" || stored === "false") setIsMuted(stored === "true")
  }, [])

  useEffect(() => {
    localStorage.setItem("soundMuted", isMuted.toString())
  }, [isMuted])

  const toggleMute = () => setIsMuted(m => !m)

  return (
    <SoundContext.Provider value={{ isMuted, toggleMute }}>
      {children}
    </SoundContext.Provider>
  )
}

export const useSound = () => useContext(SoundContext)

