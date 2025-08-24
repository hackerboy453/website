"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"

interface BootSequenceProps {
  onComplete: () => void
}

export default function BootSequence({ onComplete }: BootSequenceProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [progress, setProgress] = useState(0)

  const bootSteps = [
    "Initializing system...",
    "Loading kernel modules...",
    "Starting network services...",
    "Mounting file systems...",
    "Loading user interface...",
    "System ready!",
  ]

  useEffect(() => {
    // Play boot sound
    const audio = new Audio("/boot-sound.mp3")
    audio.volume = 0.3
    audio.play().catch(() => {
      // Handle autoplay restrictions
      console.log("Audio autoplay blocked")
    })

    // Progress animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + 2
      })
    }, 100)

    // Boot steps animation
    const stepInterval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev >= bootSteps.length - 1) {
          clearInterval(stepInterval)
          setTimeout(onComplete, 1000)
          return prev
        }
        return prev + 1
      })
    }, 800)

    return () => {
      clearInterval(progressInterval)
      clearInterval(stepInterval)
    }
  }, [onComplete, bootSteps.length])

  return (
    <div className="h-screen w-full bg-black flex items-center justify-center">
      <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover opacity-30">
        <source src="/videom.mp4" type="video/mp4" />
      </video>

      <Card className="relative z-10 bg-card/90 backdrop-blur-sm border-primary/20 p-8 max-w-md w-full mx-4">
        <div className="text-center space-y-6">
          {/* OS Logo */}
          <div className="w-16 h-16 mx-auto bg-primary rounded-lg flex items-center justify-center">
            <div className="w-8 h-8 bg-primary-foreground rounded-sm"></div>
          </div>

          {/* OS Name */}
          <h1 className="text-2xl font-bold text-primary">PortfolioOS</h1>

          {/* Boot Steps */}
          <div className="space-y-2">
            {bootSteps.map((step, index) => (
              <div
                key={index}
                className={`text-sm transition-all duration-300 ${
                  index === currentStep
                    ? "text-primary font-medium"
                    : index < currentStep
                      ? "text-muted-foreground"
                      : "text-muted-foreground/50"
                }`}
              >
                {index <= currentStep && (
                  <span className="inline-block w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
                )}
                {step}
              </div>
            ))}
          </div>

          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="w-full bg-muted rounded-full h-2">
              <div
                className="bg-primary h-2 rounded-full transition-all duration-100 ease-out"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <p className="text-xs text-muted-foreground">{progress}% Complete</p>
          </div>
        </div>
      </Card>
    </div>
  )
}
