"use client"

import React, { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const categoryBackgrounds: Record<string, string> = {
  cybersecurity: "/images/hacker.jpg",
  webdev: "/images/web.jpg",
  machinelearning: "/images/machine.jpg",
  scraping: "/images/scrape.jpg",
  unreal: "/images/unreal.jpg",
}

const projectCategories = [
  {
    id: "cybersecurity",
    name: "Cybersecurity",
    projects: [
      { id: "wifi-automate", title: "Automate WiFi Hacking Process", url: "https://github.com/adi8805/Automate-Wifi-Process" },
      { id: "port-scanner", title: "Port Scanner", url: "https://github.com/adi8805/Port-Scanner" },
      // { id: "packet-sniffer", title: "Packet Sniffer", url: "https://example.com/packet-sniffer" },
    ],
  },
  {
    id: "webdev",
    name: "Web Development Projects",
    projects: [
      { id: "secure-website", title: "Hack Secure Website", url: "https://www.hacksecure.in/" },
    ],
  },
  {
    id: "machinelearning",
    name: "Machine Learning Projects",
    projects: [
      { id: "rag-model", title: "Rag Model", url: "https://www.kaggle.com/code/hackerboy221/rag-model" },
      { id: "regression-forest", title: "Regression Forest Model", url: "https://www.kaggle.com/code/hackerboy221/forest" },
    ],
  },
  {
    id: "scraping",
    name: "Scraping",
    projects: [
      { id: "oreilly", title: "O'Reilly", url: "https://github.com/adi8805/O-reilly-Scraping-Content" },
      { id: "libgen", title: "Libgen", url: "https://github.com/adi8805/Libgen-Scraping-content" },
    ],
  },
  {
    id: "unreal",
    name: "Unreal Engine Projects",
    projects: [
      { id: "inventory-system (unavailable)", title: "Inventory System (unavailable)", url: "https://example.com/inventory-system" },
      { id: "ragdoll(unavailable)", title: "ragdoll (unavailable)", url: "https://example.com/ragdoll" },
      { id: "AI(unavailable)", title: "AI (unavailable)", url: "https://example.com/ragdoll" },
      { id: "AI Car(unavailable)", title: "Auto Car Driving (unavailable)", url: "https://example.com/ragdoll" },
    ],
    message: "unavailable",
  },
]

export default function ProjectsApp() {
  const openInNewTab = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer")
  }

  // List view with category cards having background images and buttons opening URLs in a new tab
  return (
    <div className="h-full overflow-auto bg-background p-6">
      <div className="text-center mb-6 space-y-3">
        <h1 className="text-3xl font-bold text-foreground">My Projects</h1>
        <p className="text-muted-foreground">
          A showcase of categorized projects. Click a project button to open in a new tab.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left column */}
        <div className="space-y-8">
          {["cybersecurity", "webdev", "machinelearning"].map((catId) => {
            const category = projectCategories.find((c) => c.id === catId)!
            return (
              <Card
                key={category.id}
                className="bg-card p-6 space-y-4 text-white relative overflow-hidden"
                style={{
                  backgroundImage: `url(${categoryBackgrounds[catId]})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="absolute inset-0 bg-black/50 pointer-events-none rounded-lg"></div>

                <h2 className="relative text-xl font-semibold border-b border-border pb-2 z-10">
                  {category.name}
                </h2>
                {category.projects.length > 0 ? (
                  <ul className="relative z-10 space-y-3">
                    {category.projects.map((proj) => (
                      <li key={proj.id} className="flex justify-between items-center">
                        <span>{proj.title}</span>
                        <Button
                          size="sm"
                          onClick={() => openInNewTab(proj.url)}
                        >
                          View Project
                        </Button>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="relative z-10 italic">{category.message}</p>
                )}
              </Card>
            )
          })}
        </div>

        {/* Right column */}
        <div className="space-y-8">
          {["scraping", "unreal"].map((catId) => {
            const category = projectCategories.find((c) => c.id === catId)!
            return (
              <Card
                key={category.id}
                className="bg-card p-6 space-y-4 text-white relative overflow-hidden"
                style={{
                  backgroundImage: `url(${categoryBackgrounds[catId]})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="absolute inset-0 bg-black/50 pointer-events-none rounded-lg"></div>

                <h2 className="relative text-xl font-semibold border-b border-border pb-2 z-10">
                  {category.name}
                </h2>
                {category.projects.length > 0 ? (
                  <ul className="relative z-10 space-y-3">
                    {category.projects.map((proj) => (
                      <li key={proj.id} className={`flex items-center${catId !== "unreal" ? " justify-between" : ""}`}>
                        <span>{proj.title}</span>
                        {catId !== "unreal" && (
                          <Button
                            size="sm"
                            onClick={() => openInNewTab(proj.url)}
                          >
                            View Project
                          </Button>
                        )}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="relative z-10 italic">{category.message}</p>
                )}
              </Card>
            )
          })}
        </div>
      </div>
    </div>
  )
}
