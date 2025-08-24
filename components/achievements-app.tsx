"use client"

import React from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const achievements = [
  {
    id: "tryhackme-rank",
    title: "TryHackMe",
    description: "Achieved rank 75,934 in August 2024",
    pdfUrl: null,
  },
  {
    id: "hall-of-fame",
    title: "Hall of the Fame",
    description: "Achieved Hall of the Fame in Hack Secure of the Month",
    pdfUrl: "/pdf/hallof.pdf", // path to your PDF file in /public/pdf/
  },
]

export default function AchievementsApp() {
  const openPdf = (url: string | null) => {
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer")
    }
  }

  return (
    <div className="max-w-3xl mx-auto p-8 space-y-8">
      <h2 className="text-3xl font-bold mb-8 text-center underline decoration-indigo-500 decoration-2 font-[cursive] select-none">
        Achievements
      </h2>
      {achievements.map(({ id, title, description, pdfUrl }) => (
        <Card key={id} className="p-6 flex flex-col md:flex-row items-start md:items-center justify-between space-y-4 md:space-y-0 md:space-x-6">
          <div>
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-muted-foreground">{description}</p>
          </div>
          {pdfUrl && (
            <Button onClick={() => openPdf(pdfUrl)} className="self-stretch md:self-auto">
              View Letter
            </Button>
          )}
        </Card>
      ))}
    </div>
  )
}
