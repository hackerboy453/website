import React from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"


export default function Project10() {
  // GitHub project link - update this to your repository
  const projectLink = "https://www.qranalyticshub.space/"


  return (
    <div className="max-w-4xl mx-auto p-6 bg-card rounded-lg shadow-lg text-foreground">
      <h1 className="text-4xl font-bold mb-6 border-b border-border pb-3">
        Dynamic QR Code Generator with Tracking
      </h1>


      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Motivation</h2>
        <p className="leading-relaxed">
          I wanted to build my first full-stack online service from the ground up and was fascinated by the idea of creating a tool for information gathering. This project was a practical exercise in developing a web application that could provide a service to users—in this case, generating dynamic QR codes that can track scan analytics like IP address and location for educational purposes in cybersecurity.
        </p>
        <Card className="bg-destructive/10 border-destructive/50 border-l-4 p-4 mt-4">
          <p className="text-destructive-foreground">
            <strong>Ethical Warning:</strong> This project was conceived as a technical challenge to learn about web services and data handling. Using such a tool to track individuals without their explicit and informed consent is a severe privacy violation and is illegal. This project should only be used for legitimate and ethical security research.
          </p>
        </Card>
      </section>


      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Project Overview</h2>
        <p className="leading-relaxed mb-2">
          This project is a web-based service that allows users to create dynamic QR codes. When someone scans the QR code, they are redirected to a destination URL, and in the process, their metadata (like IP address, location, and device type) is captured and displayed on a private dashboard for the QR code's creator.
        </p>
        <ul className="list-disc list-inside leading-relaxed space-y-1">
          <li>Generates a dynamic QR code linked to a specified URL.</li>
          <li>Logs scan analytics, including IP address, geolocation, and user-agent.</li>
          <li>Provides a user-specific dashboard to view and analyze scan data in real-time.</li>
          <li>Built as a modern full-stack application using a single codebase.</li>
          <li>Designed as a proof-of-concept for an information-gathering tool used in social engineering and security awareness training.</li>
        </ul>
      </section>


      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Technologies Used</h2>
        <ul className="list-disc list-inside leading-relaxed space-y-1">
          <li><strong>Frontend:</strong> Next.js, React, and CSS for a dynamic and responsive user interface.</li>
          <li><strong>Backend:</strong> Next.js API Routes to handle QR code generation and data logging.</li>
          <li><strong>Core Language:</strong> JavaScript.</li>
          <li><strong>Deployment & Hosting:</strong> Deployed on Vercel for the frontend and using Hostinger for backend services or databases.</li>
          <li><strong>Development Tools:</strong> AI assistants like Gemini and ChatGPT were used for brainstorming, code generation, and debugging.</li>
        </ul>
      </section>


      <section>
        <Button
          variant="default"
          size="lg"
          className="bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-[1.02] transition-transform transition-colors duration-200"
          onClick={() => window.open(projectLink, "_blank", "noopener,noreferrer")}
        >
          View Website
        </Button>
      </section>
    </div>
  )
}

