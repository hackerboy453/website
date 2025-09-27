import React from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Project9() {
  // GitHub project link
  const projectLink = "https://github.com/adi8805/Keylogger-offline-"
  // Demo image placeholder
  const demoImage = "/project_gif/keylogger.gif" // Replace with actual demo image path if available

  return (
    <div className="max-w-4xl mx-auto p-6 bg-card rounded-lg shadow-lg text-foreground">
      <h1 className="text-4xl font-bold mb-6 border-b border-border pb-3">
        Keylogger (Offline)
      </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Motivation</h2>
        <p className="leading-relaxed">
          I created this keylogger offline project because a college friend needed a summer training minor project for academic marks. It also served as a practical way to understand low-level keyboard event capturing on a local machine without internet connectivity.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Project Overview</h2>
        <p className="leading-relaxed mb-2">
          This offline keylogger records keystrokes on the user's computer discreetly, storing them locally. It is designed exclusively for educational and ethical testing purposes.
        </p>
        <ul className="list-disc list-inside leading-relaxed space-y-1">
          <li>Captures keyboard events in real-time.</li>
          <li>Logs keystrokes to a local file securely without internet connection.</li>
          <li>Works silently in the background while the user operates the system.</li>
          <li>Provides a simple interface with a running animation in the console.</li>
          <li>Stops logging gracefully when the ESC key is pressed.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Technologies Used</h2>
        <ul className="list-disc list-inside leading-relaxed space-y-1">
          <li>Python 3 – for scripting and program logic</li>
          <li>pynput library – to hook keyboard events cross-platform</li>
          <li>threading module – to run spinner animation concurrently</li>
          <li>Standard libraries: os, sys, time for file and process handling</li>
          <li>Console output manipulation for real-time status spinner</li>
        </ul>
      </section>

      

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Demo</h2>
        <Card className="overflow-hidden rounded-lg shadow-md">
          <img
            src={demoImage}
            alt="Keylogger offline demo animation"
            className="w-full object-cover"
          />
        </Card>
      </section>

      <section>
        <Button
          variant="default"
          size="lg"
          className="bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-[1.02] transition-transform transition-colors duration-200"
          onClick={() => window.open(projectLink, "_blank", "noopener,noreferrer")}
        >
          View Project Repository
        </Button>
      </section>
    </div>
  )
}
