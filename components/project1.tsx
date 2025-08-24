"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Award, Star, Calendar, Users, Code, Zap } from "lucide-react"

export default function AchievementsApp() {
  const achievements = [
    {
      id: 1,
      title: "AWS Certified Solutions Architect",
      description: "Professional level certification for designing distributed systems on AWS",
      icon: Award,
      date: "2023",
      category: "Certification",
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
    },
    {
      id: 2,
      title: "Best Innovation Award",
      description: "Recognized for developing an AI-powered customer service solution",
      icon: Trophy,
      date: "2023",
      category: "Award",
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10",
    },
    {
      id: 3,
      title: "Open Source Contributor",
      description: "Contributed to 20+ open source projects with 500+ commits",
      icon: Code,
      date: "2022-2023",
      category: "Contribution",
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    },
    {
      id: 4,
      title: "Tech Lead Promotion",
      description: "Promoted to Technical Lead, managing a team of 8 developers",
      icon: Users,
      date: "2022",
      category: "Career",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      id: 5,
      title: "Hackathon Winner",
      description: "First place in Global AI Hackathon with 200+ participants",
      icon: Zap,
      date: "2022",
      category: "Competition",
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
    },
    {
      id: 6,
      title: "Google Developer Expert",
      description: "Recognized as GDE for Web Technologies and Angular",
      icon: Star,
      date: "2021",
      category: "Recognition",
      color: "text-red-500",
      bgColor: "bg-red-500/10",
    },
  ]

  const milestones = [
    { metric: "Years Experience", value: "5+", icon: Calendar },
    { metric: "Projects Delivered", value: "50+", icon: Trophy },
    { metric: "Team Members Led", value: "15+", icon: Users },
    { metric: "Technologies Mastered", value: "25+", icon: Code },
  ]

  const certifications = [
    "AWS Solutions Architect Professional",
    "Google Cloud Professional Developer",
    "Microsoft Azure Developer Associate",
    "Certified Kubernetes Administrator",
    "MongoDB Certified Developer",
    "React Developer Certification",
  ]

  return (
    <div className="h-full overflow-auto bg-background">
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-bold text-foreground">Achievements & Recognition</h1>
          <p className="text-muted-foreground">Milestones and accomplishments throughout my career</p>
        </div>

        {/* Key Milestones */}
        <Card className="p-4">
          <h3 className="text-lg font-semibold mb-4">Key Milestones</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {milestones.map((milestone, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <milestone.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground">{milestone.value}</div>
                <div className="text-sm text-muted-foreground">{milestone.metric}</div>
              </div>
            ))}
          </div>
        </Card>

        {/* Achievements Timeline */}
        <Card className="p-4">
          <h3 className="text-lg font-semibold mb-4">Recent Achievements</h3>
          <div className="space-y-4">
            {achievements.map((achievement) => (
              <div key={achievement.id} className="flex gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors">
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
              </div>
            ))}
          </div>
        </Card>

        {/* Certifications */}
        <Card className="p-4">
          <h3 className="text-lg font-semibold mb-4">Certifications & Credentials</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <Award className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground">{cert}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Skills Progress */}
        <Card className="p-4">
          <h3 className="text-lg font-semibold mb-4">Professional Growth</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Leadership & Management</span>
              <span className="text-sm text-muted-foreground">Advanced</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">System Architecture</span>
              <span className="text-sm text-muted-foreground">Expert</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Cloud Technologies</span>
              <span className="text-sm text-muted-foreground">Advanced</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">AI/ML Integration</span>
              <span className="text-sm text-muted-foreground">Intermediate</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
