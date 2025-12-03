"use client"

import React from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Project10() {
  const projectLink = "https://github.com/adi8805/Open-source-antivirus-with-vulnerability-scanner-and-application-based-firewall"

  // New specified tags
  const tags = [
    "#Python", "#PyTorch", "#Torch", "#CUDA", "#GPU", "#GoogleColab", "#Kaggle", "#Notebook",
    "#RVC", "#RetrievalBasedVoiceConversion", "#RVCModel", "#Applio", "#UVR", "#UltimateVocalRemover",
    "#Demucs", "#MDXNet", "#ffmpeg", "#Librosa", "#NumPy", "#SoundFile", "#torch-cuda",
    "#rvc-webui", "#python3", "#gpu-accelerated-training", "#vocal-separation-models", "#uvr-v5"
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-card rounded-lg shadow-lg text-foreground">
      <h1 className="text-4xl font-bold mb-6 border-b border-border pb-3">
        RVC Voice Cloning - Chloe Model Training
      </h1>

      {/* Motivation */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Motivation</h2>
        <p className="leading-relaxed">
          Experimented with the power of cloud technology using Google Colab and Kaggle to train an RVC 
          (Retrieval-based Voice Conversion) model of my favorite video game character Chloe. 
          This was a fun weekend project exploring voice AI capabilities on free cloud platforms.
        </p>
      </section>

      {/* Project Overview */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Project Overview</h2>
        <p className="leading-relaxed mb-4">
          Trained a custom RVC voice model using cloud notebooks to clone the voice of Chloe from my 
          favorite video game. The project demonstrates end-to-end voice AI workflow including dataset 
          preparation, vocal isolation, model training, and inference using free cloud resources.
        </p>
        <ul className="list-disc list-inside leading-relaxed space-y-2 mb-8">
          <li>Custom dataset creation and cleaning for Chloe's voice characteristics</li>
          <li>Vocal isolation using Ultimate Vocal Remover (UVR) for high-quality training data</li>
          <li>RVC model training on Kaggle/Colab with GPU acceleration</li>
          <li>Real-time voice conversion pipeline using trained model weights</li>
          <li>Complete audio processing workflow from source audio to deployable voice model</li>
        </ul>
      </section>

      {/* Tags Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Tags</h2>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full text-sm font-medium hover:bg-primary/20 transition-all cursor-pointer"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="flex flex-col sm:flex-row gap-4 items-center justify-center pt-8 border-t border-border">
        <Button
          variant="default"
          size="lg"
          className="bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-[1.02] transition-all duration-200 px-8"
          onClick={() =>
            window.open(projectLink, "_blank", "noopener,noreferrer")
          }
        >
          View Project on GitHub
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="hover:scale-[1.02] transition-all duration-200 px-8"
          onClick={() => {
            navigator.clipboard.writeText(tags.join(' '));
          }}
        >
          Copy Tags
        </Button>
      </section>
    </div>
  )
}
