import React from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Project5() {
  // Replace this with your actual demo image URL/path
  const demoImage = "regression.gif"

  // Replace with your actual project link or repo URL
  const projectLink = "https://www.kaggle.com/code/hackerboy221/forest"

  return (
    <div className="max-w-4xl mx-auto p-6 bg-card rounded-lg shadow-lg text-foreground">
      <h1 className="text-4xl font-bold mb-6 border-b border-border pb-3">
        Regression Forest Model for Fraudulent Transaction Detection
      </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Motivation</h2>
        <p className="leading-relaxed">
          I didn’t originally plan to build this project, but I received a task from a private company to analyze a dataset and identify fraudulent transactions within it. This challenge gave me an opportunity to explore regression forest models and apply them to a real-world problem.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">What I Created</h2>
        <p className="leading-relaxed mb-2">
          I developed a Regression Forest-based Machine Learning model that:
        </p>
        <ul className="list-disc list-inside leading-relaxed space-y-1">
          <li>Processes a CSV dataset containing transaction records.</li>
          <li>Detects and lists the number of fraudulent transactions accurately.</li>
          <li>Provides data visualization to help understand trends and patterns in the dataset.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Technologies I Used</h2>
        <ul className="list-disc list-inside leading-relaxed space-y-1">
          <li>Python 3 – for core scripting and analysis</li>
          <li>Scikit-learn (sklearn) – for building and training the regression forest model</li>
          <li>Matplotlib – for visualizing results and insights</li>
          <li>Pandas – for CSV data loading and preprocessing</li>
          <li>NumPy – for numerical operations and optimizations</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Workflow</h2>
        <ul className="list-disc list-inside leading-relaxed space-y-1">
          <li>Data Preprocessing: Loaded and cleaned the CSV dataset using Pandas. Handled missing values and encoded categorical data if necessary.</li>
          <li>Model Building: Implemented a Random Forest Regressor/Classifier using scikit-learn. Tuned hyperparameters for better performance.</li>
          <li>Prediction & Analysis: Predicted fraudulent transactions. Generated visualizations to show transaction patterns and flagged frauds.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Demo</h2>
        <Card className="overflow-hidden rounded-lg shadow-md">
          <img
            src={demoImage}
            alt="Regression Forest model demo screenshot"
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
