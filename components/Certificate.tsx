"use client"

import React from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Trophy, Code, Users, Zap, Star, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AchievementsApp() {
  const achievements = [
    {
      id: 1,
      title: "Intrusion X Hackathon",
      description: "A 24 hour non-stop hackathon of the cybersecurity, where we need to build a ai model which detect the threats like siem",
      icon: Award,
      date: "April, 2025",
      category: "Certification",
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
      pdfUrl: "x_certificate.pdf",
    },
    // {
    //   id: 2,
    //   title: "Best Innovation Award",
    //   description: "Recognized for developing an AI-powered customer service solution",
    //   icon: Trophy,
    //   date: "2023",
    //   category: "Award",
    //   color: "text-yellow-500",
    //   bgColor: "bg-yellow-500/10",
    //   pdfUrl: "/certificates/best_innovation_award.pdf",
    // },
    // {
    //   id: 3,
    //   title: "Open Source Contributor",
    //   description: "Contributed to 20+ open source projects with 500+ commits",
    //   icon: Code,
    //   date: "2022-2023",
    //   category: "Contribution",
    //   color: "text-green-500",
    //   bgColor: "bg-green-500/10",
    //   pdfUrl: "/certificates/open_source_contributor.pdf",
    // },
    // {
    //   id: 4,
    //   title: "Tech Lead Promotion",
    //   description: "Promoted to Technical Lead, managing a team of 8 developers",
    //   icon: Users,
    //   date: "2022",
    //   category: "Career",
    //   color: "text-blue-500",
    //   bgColor: "bg-blue-500/10",
    //   pdfUrl: "/certificates/tech_lead_promotion.pdf",
    // },
    // {
    //   id: 5,
    //   title: "Hackathon Winner",
    //   description: "First place in Global AI Hackathon with 200+ participants",
    //   icon: Zap,
    //   date: "2022",
    //   category: "Competition",
    //   color: "text-purple-500",
    //   bgColor: "bg-purple-500/10",
    //   pdfUrl: "/certificates/hackathon_winner.pdf",
    // },
    // {
    //   id: 6,
    //   title: "Google Developer Expert",
    //   description: "Recognized as GDE for Web Technologies and Angular",
    //   icon: Star,
    //   date: "2021",
    //   category: "Recognition",
    //   color: "text-red-500",
    //   bgColor: "bg-red-500/10",
    //   pdfUrl: "/certificates/google_developer_expert.pdf",
    // },
  ]

  const openPdf = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer")
  }

  return (
    <div className="h-full overflow-auto bg-background p-6">
      <Card className="p-4">
        <h3 className="text-lg font-semibold mb-4">Certificates</h3>
        <div className="space-y-4">
          {achievements.map((achievement) => (
            <div
              key={achievement.id}
              className="flex gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors"
            >
              <div
                className={`w-12 h-12 rounded-full ${achievement.bgColor} flex items-center justify-center flex-shrink-0`}
              >
                <achievement.icon className={`w-6 h-6 ${achievement.color}`} />
              </div>
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-foreground">{achievement.title}</h4>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs">
                      {achievement.category}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{achievement.date}</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{achievement.description}</p>
              </div>
              <div className="flex items-center">
                <Button size="sm" onClick={() => openPdf(achievement.pdfUrl)}>
                  View Certificate
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
