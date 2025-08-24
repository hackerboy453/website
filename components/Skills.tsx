"use client"

import React from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Trophy, Code, Users, Zap, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

export default function Skills() {
  const skillsData = [
    {
      field: "Programming & Scripting",
      subfields: [
        { name: "Python", level: 95 },
        { name: "JavaScript (Node.js, React.js, Next.js, React Native)", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "SQL (MySQL, PostgreSQL, Redshift)", level: 88 },
        { name: "Bash scripting", level: 80 },
      ],
      bgImage: "/images/programming.jpg",
    },
    {
      field: "AI/ML & Data Science",
      subfields: [
        { name: "LLMs, Transformers, LangChain, Prompt Engineering", level: 85 },
        { name: "Computer Vision (YOLO, OpenCV, Vision Transformers)", level: 80 },
        { name: "GANs/VAEs/Stable Diffusion/GenAI", level: 80 },
        { name: "Model Training & Fine-Tuning, Hyperparameter Optimization", level: 82 },
        { name: "GPU Acceleration (CUDA, cuDNN, TensorRT)", level: 75 },
        { name: "Model Evaluation (Accuracy, Precision, Recall, F1-score)", level: 85 },
      ],
      bgImage: "/images/Ai.jpg",
    },
    {
      field: "Data Engineering & Analytics",
      subfields: [
        { name: "Data Preprocessing, Feature Engineering, EDA", level: 87 },
        { name: "Data Visualization (Matplotlib, Seaborn, Tableau, Power BI, Google Data Studio)", level: 77 },
        { name: "eCommerce Analytics (Shopify, Google Analytics)", level: 72 },
        { name: "Customer Segmentation, Big Data (Apache Spark)", level: 74 },
      ],
      bgImage: "/images/data_engineering.jpg",
    },
    {
      field: "Web & App Development",
      subfields: [
        { name: "HTML5, CSS3, Tailwind CSS", level: 90 },
        { name: "Node.js, Express.js, Flask, FastAPI", level: 85 },
        { name: "REST API, MERN Stack, Cross-Platform Mobile Apps", level: 82 },
      ],
      bgImage: "/images/web1.jpg",
    },
    {
      field: "Cloud & DevOps",
      subfields: [
        { name: "AWS (EC2, S3, Lambda, SageMaker, CloudWatch)", level: 80 },
        { name: "GCP, Azure", level: 75 },
        { name: "Docker, Kubernetes", level: 80 },
        { name: "Git/GitHub, CI/CD, Serverless Deployment", level: 85 },
      ],
      bgImage: "/images/cloud.jpg",
    },
    {
      field: "Cybersecurity",
      subfields: [
        { name: "Network Sniffing, Ethical Hacking, PenTesting", level: 75 },
        { name: "Email Phishing Detection, System Hardening", level: 72 },
        { name: "Vulnerability Analysis", level: 70 },
      ],
      bgImage: "/images/hacker2.jpg",
    },
    {
      field: "Databases",
      subfields: [
        { name: "MongoDB, Firebase", level: 84 },
        { name: "VectorDB (Pinecone, FAISS, Chroma)", level: 67 },
      ],
      bgImage: "/images/database.jpg",
    },
    {
      field: "Tools & Other",
      subfields: [
        { name: "Jira, Trello, Notion", level: 90 },
        { name: "OpenTelemetry, Voice/Chat AI Integration", level: 68 },
      ],
      bgImage: "/images/obsidian.jpg",
    },
  ]

  return (
    <div className="w-full max-w-5xl mx-auto p-4 md:p-8 space-y-2 overflow-y-auto">
      <h2 className="text-3xl font-bold mb-1 text-center underline decoration-indigo-500 decoration-2 font-[cursive]">
        Technical Skills
      </h2>
      <p className="text-center text-lg font-semibold mb-8 text-muted-foreground">
        7 Years of experience since 2018
      </p>

      {skillsData.map(({ field, subfields, bgImage }) => (
        <Card
          key={field}
          className="relative overflow-hidden w-full max-w-full min-h-[320px] mb-8"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Overlay for readability */}
          <div className="absolute inset-0 bg-black/50 pointer-events-none" />

          <div className="relative p-6">
            <h3 className="text-xl font-semibold mb-6 tracking-wide text-white">{field}</h3>
            <div className="space-y-6">
              {subfields.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between items-center mb-1 text-sm text-white">
                    <span className="font-medium">{skill.name}</span>
                    <span className="font-mono">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}
