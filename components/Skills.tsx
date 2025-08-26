"use client"

import React from "react"

// Mock components for Card and Progress since the originals are not available.
// In your actual project, you would import these from your UI library.
const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={`bg-white text-gray-900 border border-gray-200 rounded-lg shadow-sm ${className}`}
    {...props}
  />
));
Card.displayName = 'Card';

const Progress = ({ className, value, ...props }) => {
  return (
    <div
      className={`relative h-2 w-full overflow-hidden rounded-full bg-gray-200 ${className}`}
      {...props}
    >
      <div
        className="h-full w-full flex-1 bg-indigo-600 transition-all"
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </div>
  );
};


export default function App() {
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
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      <div className="w-full h-full max-w-3xl mx-auto p-4 md:p-8">
        <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-2">
                Technical Skills
            </h2>
            <div className="w-24 h-1 bg-indigo-500 mx-auto mb-4"></div>
            <p className="text-lg font-light text-gray-400">
                7 Years of experience since 2018
            </p>
        </div>

        {/* Changed from a grid to a flex column for a vertical layout */}
        <div className="flex flex-col items-center gap-8">
          {skillsData.map(({ field, subfields, bgImage }) => (
            <Card
              key={field}
              className="relative overflow-hidden w-full max-w-2xl min-h-[350px] bg-gray-800 border-gray-700 rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
            >
              {/* Background Image and Overlay Container */}
              <div className="absolute inset-0 z-0">
                <img
                  src={bgImage}
                  alt={`${field} background`}
                  className="w-full h-full object-cover"
                  onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x400/1a202c/ffffff?text=Image+Error'; }}
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent" />
              </div>

              {/* Content Container */}
              <div className="relative z-10 flex flex-col justify-end h-full p-6">
                <h3 className="text-2xl font-bold mb-4 tracking-wide text-white">{field}</h3>
                <div className="space-y-4">
                  {subfields.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-1 text-sm text-gray-300">
                        <span className="font-medium">{skill.name}</span>
                        <span className="font-mono text-indigo-400">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} />
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
