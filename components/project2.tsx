import React from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Project1() {
  // Replace the demo image URL with your actual demo image path
  const demoImage = "/port_scanner.gif"

  // Link to the project repo or live demo
  const projectLink = "https://github.com/adi8805/Port-Scanner"

  return (
    <div className="max-w-4xl mx-auto p-6 bg-card rounded-lg shadow-lg text-foreground">
      <h1 className="text-4xl font-bold mb-6 border-b border-border pb-3">
        Port Scanner Project
      </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Motivation to Build This Project</h2>
        <p className="leading-relaxed">
        My personal motivation for creating this project was to showcase my skills during internship applications.

While tools like Nmap are reliable, I often found them too slow for quick scanning. On the other hand, RustScan is blazing fast but often too aggressive for certain environments.
So, I decided to build my own port scanner — one that balances speed and control by leveraging multi-threading and processor power efficiently.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">What I Created</h2>
        <p className="leading-relaxed mb-4">
        I built a high-performance Python-based port scanner that can:

Scan ports quickly using multi-threading.

Allow customization with command-line arguments.

Provide real-time progress feedback with a responsive spinner animation.

Run lightweight and efficiently on almost any system.
        </p>

        <h3 className="text-xl font-semibold mb-2">Technologies I Used</h3>
        <ul className="list-disc list-inside leading-relaxed space-y-1">
          <li>Python 3</li>
          <li>socket – for network communication and checking if ports are open.</li>
          <li>concurrent.futures – to run multiple scan tasks in parallel (multi-threading).</li>
          <li>argparse – to handle command-line arguments easily.</li>
          <li>sys – for system-level interactions (exit handling, error printing, etc.).</li>
          <li>time – for managing delays and timing operations.</li>
          <li>threading – for non-blocking animations (spinner during scanning).</li>
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
