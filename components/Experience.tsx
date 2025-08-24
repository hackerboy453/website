"use client"

import React from "react"
import { Card } from "@/components/ui/card"

const experience = [
  {
    title: "Web Development & Cyber Malware Instructor",
    company: "Hack Secure",
    period: "Jan, 2025 - April, 2025",
    description: "Freelanced with Hack Secure (Jan–Apr 2025), teaching cybersecurity basics, including malware analysis and secure coding practices through hands-on sessions and practical projects. Also developed the Full Stack website for Students courses. (not finished the website work due administrator)",
  },
  {
    title: "Cybersecurity Intern",
    company: "Grastech",
    period: "June, 2025 - August, 2025",
    description: "Interned at Grastech (Jun–Aug 2025), contributing to threat analysis, vulnerability assessments, penetration testing, malware research, and developing security automation scripts. Gained hands-on experience with network security, incident response, and risk mitigation strategies across multiple projects.",
  },
]

export default function Experience() {
  return (
    <Card className="p-8 bg-white rounded-2xl shadow-sm">
      <h3 className="text-2xl font-semibold mb-8 text-gray-800">Work Experience</h3>
      <div className="space-y-10">
        {experience.map((job, idx) => (
          <div
            key={idx}
            className="relative pl-8 border-l-2 border-gray-300 last:border-l-0"
          >
            {/* Dot */}
            <div
              className="absolute -left-2 top-2 w-4 h-4 bg-sky-500 rounded-full border-4 border-white"
              style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.09)" }}
            />
            <div>
              <h4 className="font-semibold text-gray-800 text-lg">{job.title}</h4>
              <div className="text-sky-700 font-bold text-base leading-normal">
                {job.company}
              </div>
              <div className="text-gray-500 text-sm mb-2">{job.period}</div>
              <div className="text-gray-700 text-base">{job.description}</div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
