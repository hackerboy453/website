import React, { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Project1 from "@/components/project1"
import Project2 from "@/components/project2"
import Project3 from "@/components/project3"
import Project4 from "@/components/project4"
import Project5 from "@/components/project5"
import Project6 from "@/components/project6"
import Project7 from "@/components/project7"
import Project8 from "@/components/project8"

// Background images for categories
const categoryBackgrounds: Record<string, string> = {
  cybersecurity: "/images/hacker.jpg",
  webdev: "/images/web.jpg",
  machinelearning: "/images/machine.jpg",
  scraping: "/images/scrape.jpg",
  unreal: "/images/unreal.jpg",
}

// Projects with internal keys only (no external URLs)
// Make sure all project keys match keys used in both projectCategories and internalProjects.
const projectCategories = [
  {
    id: "cybersecurity",
    name: "Cybersecurity",
    projects: [
      { id: "wifi-automate", title: "Automate WiFi Hacking Process" }, // Project1
      { id: "port-scanner", title: "Port Scanner" }, // Project2
    ],
  },
  {
    id: "webdev",
    name: "Web Development Projects",
    projects: [{ id: "hack-secure", title: "Hack Secure Website" }], // Project3
  },
  {
    id: "machinelearning",
    name: "Machine Learning Projects",
    projects: [
      { id: "rag-model", title: "Rag Model" }, // Project4
      { id: "regression-forest", title: "Regression Forest Model" }, // Project5
    ],
  },
  {
    id: "scraping",
    name: "Data Engineering",
    projects: [
      { id: "oreilly", title: "O'Reilly Scraping" }, // Project6
      { id: "libgen", title: "Libgen Scraping" }, // Project7
      { id: "books-to-json", title: "Divide Books into chunks" }, // Project8
    ],
  },
  {
    id: "unreal",
    name: "Unreal Engine Projects",
    projects: [
      { id: "inventory-system", title: "Inventory System (unavailable)" },
      { id: "ragdoll", title: "ragdoll (unavailable)" },
      { id: "ai-combat", title: "AI Combat System (unavailable)" },
      { id: "third-person-combat", title: "Third Person combat system (unavailable)" },
      { id: "ai-car", title: "Auto Car Driving (unavailable)" },
    ],
    message: "unavailable",
  },
]

// Map project keys to components
// Important: keys here MUST match exactly the project ids used above, including case and dashes vs underscores
const internalProjects: Record<string, React.ReactNode> = {
  "wifi-automate": <Project1 />,
  "port-scanner": <Project2 />,
  "hack-secure": <Project3 />,
  "rag-model": <Project4 />,
  "regression-forest": <Project5 />,
  "oreilly": <Project6 />,
  "libgen": <Project7 />,
  "books-to-json": <Project8 />,
}

export default function ProjectsApp() {
  const [activeProjectKey, setActiveProjectKey] = useState<string | null>(null)

  // Open a project internally if it's mapped
  const openProject = (projectId: string) => {
    if (projectId in internalProjects) {
      setActiveProjectKey(projectId)
    }
  }

  // Render the active project page inside the window
  if (activeProjectKey) {
    return (
      <div className="h-full overflow-auto bg-background p-6">
        <Button variant="ghost" className="mb-6" onClick={() => setActiveProjectKey(null)}>
          &larr; Back to Projects
        </Button>
        <div className="bg-card p-6 rounded-lg">{internalProjects[activeProjectKey]}</div>
      </div>
    )
  }

  // Render projects list without external links
  return (
    <div className="h-full overflow-auto bg-background p-6">
      <div className="text-center mb-6 space-y-3">
        <h1 className="text-3xl font-bold text-foreground">My Projects</h1>
        <p className="text-muted-foreground">
          A showcase of categorized projects. Click a project button to view internally.
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
                className="bg-card p-6 space-y-4 text-white relative overflow-hidden rounded-lg"
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
                        <Button size="sm" onClick={() => openProject(proj.id)} disabled={category.message === "unavailable"}>
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
                className="bg-card p-6 space-y-4 text-white relative overflow-hidden rounded-lg"
                style={{
                  backgroundImage: `url(${categoryBackgrounds[catId]})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="absolute inset-0 bg-black/50 pointer-events-none rounded-lg"></div>

                <h2 className="relative text-xl font-semibold border-b border-border pb-2 z-10">{category.name}</h2>
                {category.projects.length > 0 ? (
                  <ul className="relative z-10 space-y-3">
                    {category.projects.map((proj) => (
                      <li
                        key={proj.id}
                        className={`flex items-center${catId !== "unreal" ? " justify-between" : ""}`}
                      >
                        <span>{proj.title}</span>
                        {catId !== "unreal" && (
                          <Button size="sm" onClick={() => openProject(proj.id)} disabled={category.message === "unavailable"}>
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
