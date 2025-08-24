import React from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Project7() {
  // Replace with your actual demo image URL/path
  const demoImage = "libgen.gif"

  // Replace with your actual project repository or relevant link
  const projectLink = "https://github.com/adi8805/Libgen-Scraping-content"

  return (
    <div className="max-w-4xl mx-auto p-6 bg-card rounded-lg shadow-lg text-foreground">
      <h1 className="text-4xl font-bold mb-6 border-b border-border pb-3">
        Library Genesis (LibGen) Data Scraper & Processor
      </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Motivation</h2>
        <p className="leading-relaxed">
          I’m a huge fan of non-fiction books 📚 and an even bigger fan of free knowledge 💕. Since Library Genesis (LibGen) is one of the largest shadow libraries with millions of books, I decided to scrape and process its massive collection to build my own structured dataset for quick searching and categorization.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">What I Created</h2>
        <p className="leading-relaxed mb-2">
          I developed a high-performance scraping pipeline that:
        </p>
        <ul className="list-disc list-inside leading-relaxed space-y-1">
          <li>Processes millions of records from the LibGen database.</li>
          <li>Extracts detailed book metadata like:
            <ul className="list-disc list-inside ml-5 mt-1 space-y-1">
              <li>Title</li>
              <li>Author(s)</li>
              <li>Publisher</li>
              <li>Year</li>
              <li>ISBN</li>
              <li>Download links</li>
            </ul>
          </li>
          <li>Saves the processed data for personal queries, categorization, and building recommendation systems.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Technologies I Used</h2>
        <ul className="list-disc list-inside leading-relaxed space-y-1">
          <li>Python 3 – core language for the scraper</li>
          <li>asyncio – for handling high-performance asynchronous scraping</li>
          <li>Requests / Playwright – for making fast and reliable web requests</li>
          <li>CSV & JSON – to store structured data</li>
          <li>Pandas – for cleaning and manipulating large datasets</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Workflow</h2>
        <ul className="list-disc list-inside leading-relaxed space-y-1">
          <li>Connect to LibGen – Scrape metadata of available books.</li>
          <li>Asynchronous Scraping – Speed up the process with asyncio for large-scale data.</li>
          <li>Data Storage – Save the extracted data in CSV and JSON for further processing.</li>
          <li>Analysis – Query datasets to explore books by author, topic, or year.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Demo</h2>
        <Card className="overflow-hidden rounded-lg shadow-md">
          <img
            src={demoImage}
            alt="LibGen scraper demo screenshot"
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
