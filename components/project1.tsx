import React from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Project1() {
  // Replace the demo image URL with your actual demo image path
  const demoImage = "wpa.gif"

  // Link to the project repo or live demo
  const projectLink = "https://github.com/adi8805/Automate-Wifi-Process"

  return (
    <div className="max-w-4xl mx-auto p-6 bg-card rounded-lg shadow-lg text-foreground">
      <h1 className="text-4xl font-bold mb-6 border-b border-border pb-3">
        Wi-Fi Cracking Automation Tool
      </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Motivation</h2>
        <p className="leading-relaxed">
          I was bored of repeatedly typing long commands to crack WEP and WPA passwords manually. To save time and make the process faster and simpler, I decided to automate it by creating this tool.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">What I Created</h2>
        <p className="leading-relaxed">
          I built a basic port scanner and Wi-Fi cracking automation tool that simplifies the process of scanning and testing networks.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Technologies I Used</h2>
        <ul className="list-disc list-inside leading-relaxed space-y-1">
          <li>C++ — for writing a lightweight, fast, and efficient tool</li>
          <li>Standard C++ Libraries — to keep the project simple and portable</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Demo</h2>
        <Card className="overflow-hidden rounded-lg shadow-md">
          <img
            src={demoImage}
            alt="Port Scanner demo screenshot"
            className="w-full object-cover"
          />
        </Card>
      </section>

      <section>
        <Button
          variant="outline"
          size="lg"
          onClick={() => window.open(projectLink, "_blank", "noopener,noreferrer")}
        >
          View Project Link
        </Button>
      </section>
    </div>
  )
}
