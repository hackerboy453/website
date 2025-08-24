import React from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Project8() {
  // Replace with your actual demo image URL/path
  const demoImage = "chunks.gif"

  // Replace with your actual project repo or relevant link
  const projectLink = "https://github.com/adi8805/books_to_json_chunks"

  return (
    <div className="max-w-4xl mx-auto p-6 bg-card rounded-lg shadow-lg text-foreground">
      <h1 className="text-4xl font-bold mb-6 border-b border-border pb-3">
        Book-to-Chunks Converter for RAG Pipeline
      </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Motivation</h2>
        <p className="leading-relaxed">
          This project is part of my RAG (Retrieval-Augmented Generation) pipeline. To make my AI models understand and retrieve information from books efficiently, I needed a way to convert books into structured JSON chunks. This tool automates the splitting, cleaning, and storing of book content, making it ready for ingestion by my RAG system.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">What I Created</h2>
        <p className="leading-relaxed mb-2">
          I developed a book-to-chunks converter that:
        </p>
        <ul className="list-disc list-inside leading-relaxed space-y-1">
          <li>Extracts text and metadata from PDF books.</li>
          <li>Cleans and splits content into manageable, context-aware chunks.</li>
          <li>Stores chunks as JSON files, ready to be used for AI training or retrieval tasks.</li>
          <li>Handles embedded images, converting them into base64 encoded strings for optional use in multimodal models.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Technologies I Used</h2>
        <ul className="list-disc list-inside leading-relaxed space-y-1">
          <li>PyMuPDF (fitz) – for parsing PDFs and extracting text and images</li>
          <li>PIL (Pillow) – for handling and processing extracted images</li>
          <li>os, Pathlib – for handling file and directory management</li>
          <li>JSON – to store the processed chunks in a structured format</li>
          <li>re – for text cleaning and regex operations</li>
          <li>base64 – for encoding images</li>
          <li>hashlib – for generating unique IDs for chunks</li>
          <li>argparse – for adding flexibility to the script via command-line arguments</li>
          <li>datetime, time – for timestamps and logging</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Workflow</h2>
        <ul className="list-disc list-inside leading-relaxed space-y-1">
          <li>Input a PDF – Specify the file path of the book.</li>
          <li>Process Text & Images – Extracts and cleans text, while encoding images.</li>
          <li>Chunking – Splits text into smaller, context-preserving chunks for efficient retrieval.</li>
          <li>Save to JSON – Outputs structured JSON chunks for integration into the RAG pipeline.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Demo</h2>
        <Card className="overflow-hidden rounded-lg shadow-md">
          <img
            src={demoImage}
            alt="Book to Chunks converter demo screenshot"
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
