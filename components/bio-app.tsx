"use client"

import { Card } from "@/components/ui/card"
import { MapPin, Calendar, Mail } from "lucide-react"
import React from "react"

export default function BioApp() {
  return (
    <div className="h-full overflow-auto bg-background">
      <div className="p-6 space-y-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="flex-shrink-0">
            <img
              src="/person.png"
              alt="Profile Picture"
              className="w-30 h-30 rounded-full border-4 border-primary/20"
            />
          </div>
          <div className="flex-1 space-y-4">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Aditys Singh Varma</h1>
              <p className="text-xl text-primary">Computer Science</p>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Passionate developer with 5+ years of experience creating innovative web applications. I love turning
              complex problems into simple, beautiful solutions that users enjoy.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                Delhi, India
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                Available for hire
              </div>
              <div className="flex items-center gap-1">
                <Mail className="w-4 h-4" />
                indiedevadi@gmail.com
              </div>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <Card className="p-4 bg-card">
          <h3 className="text-lg font-bold mb-3 tracking-widest text-foreground flex items-center">
            <span className="inline-block w-3 h-3 mr-2 rounded-sm bg-primary"></span>
            EDUCATION
          </h3>
          <div className="pl-4 space-y-4">
            <div>
              <div className="font-bold leading-tight uppercase text-foreground">• Class 12th with PCMB with Physical Education</div>
              <div className="text-muted-foreground">Govt Sarvodaya Boys SSS Radhey Sham Park DL</div>
            </div>
            <div>
              <div className="font-bold leading-tight uppercase text-foreground">• Pursuing BCA from IP University</div>
              <div className="text-muted-foreground">
                Sri Guru Tegh Bahadur Institute of Management &amp; IT
              </div>
            </div>
          </div>
        </Card>

        {/* Personal Interests */}
        <Card className="p-4 bg-card">
          <h3 className="text-lg font-semibold mb-4 text-foreground">When I'm Not Coding</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-muted-foreground">
            <div className="space-y-2">
              <p>📚Read Non-Fiction books</p>
              <p>🎮 Play Triple A and Esports Video games</p>
              <p>🏃‍♂️ GYM</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
