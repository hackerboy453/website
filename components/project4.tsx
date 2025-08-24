import React from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Project4() {
  // Replace with your actual demo image URL/path
  const demoImage = "rag-model.gif"

  // Replace with your actual project link or Kaggle notebook URL
  const projectLink = "https://www.kaggle.com/code/hackerboy221/rag-model"

  return (
    <div className="max-w-4xl mx-auto p-6 bg-card rounded-lg shadow-lg text-foreground">
      <h1 className="text-4xl font-bold mb-6 border-b border-border pb-3">
        Retrieval-Augmented Generation (RAG) Model for Machine Learning Notes
      </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Motivation</h2>
        <p className="leading-relaxed">
          I was reading through 124 books on Machine Learning, but manually taking notes and finding key concepts became time-consuming and exhausting. To make learning faster, structured, and interactive, I decided to build my own RAG (Retrieval-Augmented Generation) model. Now, this tool automates daily note-making and summarizes information whenever I query it — making my study process far more efficient.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">What I Created</h2>
        <p className="leading-relaxed">
          I developed a custom Retrieval-Augmented Generation system that:
        </p>
        <ul className="list-disc list-inside leading-relaxed space-y-1">
          <li>Processes and chunks the content of 124 machine learning books into structured JSON data.</li>
          <li>Retrieves contextually relevant chunks when prompted.</li>
          <li>Uses a Mistral LLM to generate clean and concise summaries, explanations, or structured notes.</li>
          <li>Can run experiments efficiently on Kaggle notebooks.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Technologies I Used</h2>
        <ul className="list-disc list-inside leading-relaxed space-y-1">
          <li>Python 3 – core programming language</li>
          <li>PyTorch – for model handling and fine-tuning</li>
          <li>Mistral LLM – lightweight, powerful open-source language model</li>
          <li>JSON – to store and structure the chunked book data</li>
          <li>Kaggle – for training, testing, and running experiments with GPU support</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Workflow</h2>
        <ul className="list-disc list-inside leading-relaxed space-y-1">
          <li>Preprocessed 124 books and chunked the content into JSON format for efficient retrieval.</li>
          <li>Integrated retriever and generator pipeline for querying.</li>
          <li>Used PyTorch to handle model inference smoothly in Kaggle notebooks.</li>
          <li>Optimized the RAG pipeline for daily note-making and on-demand summaries.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Demo</h2>
        <Card className="overflow-hidden rounded-lg shadow-md">
          <img
            src={demoImage}
            alt="RAG Model demo screenshot"
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
          View Kaggle Notebook
        </Button>
      </section>
    </div>
  )
}
