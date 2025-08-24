import React from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Project6() {
  // Replace with your actual demo image URL/path
  const demoImage = "oreilly.gif"

  // Replace with your actual project repo or relevant link
  const projectLink = "https://github.com/adi8805/O-reilly-Scraping-Content"

  return (
    <div className="max-w-4xl mx-auto p-6 bg-card rounded-lg shadow-lg text-foreground">
      <h1 className="text-4xl font-bold mb-6 border-b border-border pb-3">
        O’Reilly Library Web Scraper
      </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Motivation</h2>
        <p className="leading-relaxed">
          I’m a book lover and often explore the O’Reilly library for learning resources. I decided to scrape and collect book information — such as name, author, and publisher — into a structured CSV file. With this dataset, I can query the CSV later to quickly find the best books on topics like malware analysis, OSINT, cybersecurity, and more, without manually browsing through the website every time.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">What I Created</h2>
        <p className="leading-relaxed mb-2">
          I developed a Python-based asynchronous scraper that:
        </p>
        <ul className="list-disc list-inside leading-relaxed space-y-1">
          <li>Scrapes the O’Reilly library efficiently using Playwright.</li>
          <li>Extracts key data fields like:
            <ul className="list-disc list-inside ml-5 mt-1 space-y-1">
              <li>Book Title</li>
              <li>Author(s)</li>
              <li>Publisher</li>
            </ul>
          </li>
          <li>Saves the data into a clean CSV file for future searching and analysis.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Technologies I Used</h2>
        <ul className="list-disc list-inside leading-relaxed space-y-1">
          <li>Python 3 – for scripting</li>
          <li>asyncio – for handling asynchronous execution</li>
          <li>Playwright (async API) – for browser automation and web scraping</li>
          <li>CSV module – to store extracted data in a structured format</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Workflow</h2>
        <ul className="list-disc list-inside leading-relaxed space-y-1">
          <li>Initialize Playwright – Launch a browser instance asynchronously.</li>
          <li>Navigate & Scrape – Visit the O’Reilly catalog pages and extract data fields.</li>
          <li>Save to CSV – Store the structured data locally for quick access and search.</li>
          <li>Use Cases – Query the CSV to find recommended books by topic or publisher.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Demo</h2>
        <Card className="overflow-hidden rounded-lg shadow-md">
          <img
            src={demoImage}
            alt="O’Reilly scraper demo screenshot"
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
          View Project Repository
        </Button>
      </section>
    </div>
  )
}
