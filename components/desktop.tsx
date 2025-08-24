"use client"

import React, { useState, useEffect, useRef, useCallback } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { X, Minus, Square } from "lucide-react"
import BioApp from "@/components/bio-app"
import ProjectsApp from "@/components/projects-app"
import AchievementsApp from "@/components/achievements-app"
import ContextMenu from "@/components/context-menu"
import Certificate from "@/components/Certificate"
import Contact from "@/components/Contact"
import Experience from "@/components/Experience"
import Skills from "@/components/Skills"
import Terminal from "@/components/Terminal"

interface Window {
  id: string
  title: string
  component: React.ReactNode
  isMinimized: boolean
  position: { x: number; y: number }
  size: { width: number; height: number }
  isMaximized: boolean
}

const ICONS_PER_COLUMN = 5
const ICON_VERTICAL_GAP = 36
const ICON_HORIZONTAL_GAP = 120

const DEFAULT_WINDOW_SIZE = { width: 700, height: 500 }
const START_POS_X = 100
const START_POS_Y = 100
const WINDOW_STEP_X = 30
const WINDOW_STEP_Y = 30
const NEXT_ROW_OFFSET_Y = 160
const WINDOWS_PER_ROW = 3

const FOLDER_ALIASES: Record<string, string> = {
  "about me": "bio",
  "bio": "bio",
  "projects": "projects",
  "achievements": "achievements",
  "experience": "experience",
  "skills": "skills",
  "certificate": "certificate",
  "contact": "contact",
  "terminal": "terminal",
}

export default function Desktop() {
  const [time, setTime] = useState(new Date())
  const [windows, setWindows] = useState<Window[]>([])
  const [activeWindow, setActiveWindow] = useState<string | null>(null)
  const [contextMenu, setContextMenu] = useState<{ x: number; y: number; show: boolean }>({ x: 0, y: 0, show: false })
  const [isLoading, setIsLoading] = useState<string | null>(null)

  const draggedWindowRef = useRef<string | null>(null)
  const dragOffsetRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 })

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const desktopIcons = [
    { id: "bio", name: "About Me", image: "/icons/download.jpg" },
    { id: "projects", name: "Projects", image: "/icons/project.jpg" },
    { id: "achievements", name: "Achievements", image: "/icons/achievements.jpg" },
    { id: "contact", name: "Contact", image: "/icons/contacts.jpg" },
    { id: "terminal", name: "Terminal", image: "/icons/terminal.jpg" },
    // { id: "settings", name: "Settings", image: "/icons/settings.jpg" },
    { id: "experience", name: "Experience", image: "/icons/experince.jpg" },
    { id: "skills", name: "Skills", image: "/icons/skills.jpg" },
    { id: "certificate", name: "Certificate", image: "/icons/certificate.jpg" },
  ]

  const playSound = (type: "click" | "open" | "close" | "minimize" | "drag" | "drop") => {
    const audio = new Audio(`/${type}-sound.mp3`)
    audio.volume = 0.1
    audio.play().catch(() => {})
  }

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!draggedWindowRef.current) return
      const windowId = draggedWindowRef.current
      const offset = dragOffsetRef.current
      const newX = e.clientX - offset.x
      const newY = e.clientY - offset.y
      setWindows(prev =>
        prev.map(w =>
          w.id === windowId
            ? { ...w, position: { x: newX, y: newY } }
            : w,
        ),
      )
    },
    [],
  )

  const handleMouseUp = useCallback(() => {
    if (draggedWindowRef.current) {
      playSound("drop")
      draggedWindowRef.current = null
      dragOffsetRef.current = { x: 0, y: 0 }
      document.body.style.userSelect = ""
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseup", handleMouseUp)
    }
  }, [handleMouseMove])

  const handleMouseDown = (e: React.MouseEvent, windowId: string) => {
    if ((e.target as HTMLElement).closest(".window-controls")) return
    const win = windows.find(w => w.id === windowId)
    if (!win) return

    draggedWindowRef.current = windowId
    dragOffsetRef.current = {
      x: e.clientX - win.position.x,
      y: e.clientY - win.position.y,
    }
    setActiveWindow(windowId)
    playSound("drag")
    document.body.style.userSelect = "none"
    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseup", handleMouseUp)
  }

  // Touch drag support
  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      if (!draggedWindowRef.current) return
      const windowId = draggedWindowRef.current
      const offset = dragOffsetRef.current
      const touch = e.touches[0]
      if (!touch) return
      const newX = touch.clientX - offset.x
      const newY = touch.clientY - offset.y
      setWindows(prev =>
        prev.map(w =>
          w.id === windowId
            ? { ...w, position: { x: newX, y: newY } }
            : w,
        ),
      )
    },
    [],
  )

  const handleTouchEnd = useCallback(() => {
    if (draggedWindowRef.current) {
      playSound("drop")
      draggedWindowRef.current = null
      dragOffsetRef.current = { x: 0, y: 0 }
      document.body.style.userSelect = ""
      window.removeEventListener("touchmove", handleTouchMove)
      window.removeEventListener("touchend", handleTouchEnd)
    }
  }, [handleTouchMove])

  const handleTouchStart = (e: React.TouchEvent, windowId: string) => {
    if ((e.target as HTMLElement).closest(".window-controls")) return
    const win = windows.find(w => w.id === windowId)
    if (!win) return
    const touch = e.touches[0]
    if (!touch) return
    draggedWindowRef.current = windowId
    dragOffsetRef.current = {
      x: touch.clientX - win.position.x,
      y: touch.clientY - win.position.y,
    }
    setActiveWindow(windowId)
    playSound("drag")
    document.body.style.userSelect = "none"
    window.addEventListener("touchmove", handleTouchMove, { passive: false })
    window.addEventListener("touchend", handleTouchEnd)
  }

  function getNewWindowPosition(iconId: string): { x: number; y: number } {
    if (windows.length === 0) {
      return { x: START_POS_X, y: START_POS_Y }
    }
    const n = windows.length
    const row = Math.floor(n / WINDOWS_PER_ROW)
    const col = n % WINDOWS_PER_ROW
    return {
      x: START_POS_X + col * WINDOW_STEP_X,
      y: START_POS_Y + row * (NEXT_ROW_OFFSET_Y + WINDOW_STEP_Y),
    }
  }

  // Prevent duplicate windows! If already open, focus/unminimize instead.
  const openWindow = async (iconId: string) => {
    const icon = desktopIcons.find(i => i.id === iconId)
    if (!icon) return
    const existing = windows.find(w => w.id === iconId)
    if (existing) {
      // Unminimize if minimized
      setWindows(prev =>
        prev.map(w =>
          w.id === iconId
            ? { ...w, isMinimized: false }
            : w
        )
      )
      setActiveWindow(iconId)
      playSound("click")
      return
    }
    setIsLoading(iconId)
    playSound("open")
    await new Promise(resolve => setTimeout(resolve, 500))
    const newWindow: Window = {
      id: iconId,
      title: icon.name,
      component: getWindowContent(iconId),
      isMinimized: false,
      isMaximized: false,
      position: getNewWindowPosition(iconId),
      size: { ...DEFAULT_WINDOW_SIZE },
    }
    setWindows(prev => [...prev, newWindow])
    setActiveWindow(iconId)
    setIsLoading(null)
  }

  const closeWindow = (windowId: string) => {
    playSound("close")
    setWindows(prev => prev.filter(w => w.id !== windowId))
    if (activeWindow === windowId) setActiveWindow(null)
  }

  const minimizeWindow = (windowId: string) => {
    playSound("minimize")
    setWindows(prev => prev.map(w => (w.id === windowId ? { ...w, isMinimized: true } : w)))
    if (activeWindow === windowId) setActiveWindow(null)
  }

  const maximizeWindow = (windowId: string) => {
    playSound("click")
    setWindows(prev =>
      prev.map(w =>
        w.id === windowId
          ? {
              ...w,
              isMaximized: !w.isMaximized,
              position: w.isMaximized ? getNewWindowPosition(windowId) : { x: 0, y: 0 },
              size: w.isMaximized
                ? { ...DEFAULT_WINDOW_SIZE }
                : { width: window.innerWidth, height: window.innerHeight - 48 },
            }
          : w,
      ),
    )
  }

  const restoreWindow = (windowId: string) => {
    playSound("click")
    setWindows(prev => prev.map(w => (w.id === windowId ? { ...w, isMinimized: false } : w)))
    setActiveWindow(windowId)
  }

  const handleRightClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setContextMenu({ x: e.clientX, y: e.clientY, show: true })
  }

  const handleDesktopClick = () => {
    setContextMenu(prev => ({ ...prev, show: false }))
    setActiveWindow(null)
  }

  // Used by Terminal for "open <folder>" support
  const handleTerminalOpenWindow = (folder: string) => {
    if (folder === "close-terminal") {
      closeWindow("terminal")
    } else {
      const normalized = folder.trim().toLowerCase()
      const windowId = FOLDER_ALIASES[normalized]
      if (windowId) {
        openWindow(windowId)
      }
    }
  }

  const getWindowContent = (windowId: string) => {
    switch (windowId) {
      case "bio": return <BioApp />
      case "projects": return <ProjectsApp />
      case "achievements": return <AchievementsApp />
      case "contact": return <Contact />
      case "terminal":
        return <Terminal onOpenWindow={handleTerminalOpenWindow} />
      case "experience": return <Experience />
      case "skills": return <Skills />
      case "certificate": return <Certificate />
      default: return <div className="p-4">Window content</div>
    }
  }

  // Arrange icons in columns
  const iconColumns: { id: string; name: string; image: string }[][] = []
  for (let i = 0; i < desktopIcons.length; i += ICONS_PER_COLUMN) {
    iconColumns.push(desktopIcons.slice(i, i + ICONS_PER_COLUMN))
  }

  return (
    <div
      className="h-screen w-full relative overflow-hidden select-none"
      onClick={handleDesktopClick}
      onContextMenu={handleRightClick}
      style={{
        backgroundImage: "url('/intp2.png')",
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "black",
      }}
    >
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Desktop Icons */}
      <div className="absolute top-8 left-4 flex flex-row items-start z-10">
        {iconColumns.map((column, colIdx) => (
          <div key={colIdx} className="flex flex-col items-center" style={{ marginRight: ICON_HORIZONTAL_GAP }}>
            {column.map((icon, rowIdx) => (
              <div
                key={icon.id}
                className="flex flex-col items-center space-y-2 cursor-pointer group relative mb-5"
                style={{ marginBottom: rowIdx === column.length - 1 ? 0 : ICON_VERTICAL_GAP }}
                onClick={e => {
                  e.stopPropagation()
                  openWindow(icon.id)
                }}
              >
                <Card className="w-16 h-16 flex items-center justify-center bg-card/90 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl group-hover:bg-card/95 relative">
                  {/* Icon Image */}
                  <img src={icon.image} alt={icon.name} className="w-10 h-10 object-contain" />
                  {isLoading === icon.id && (
                    <div className="absolute inset-0 bg-primary/20 rounded-lg animate-pulse"></div>
                  )}
                </Card>
                <span className="text-xs text-center text-white/90 group-hover:text-white transition-colors duration-200 drop-shadow-lg">
                  {icon.name}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Windows */}
      {windows.map(window =>
        !window.isMinimized && (
          <div
            key={window.id}
            className={`absolute bg-card border border-border rounded-lg shadow-2xl transition-all duration-300 ${
              activeWindow === window.id ? "z-50 shadow-3xl" : "z-40"
            } ${draggedWindowRef.current === window.id ? "cursor-grabbing" : "cursor-default"}`}
            style={{
              left: window.position.x,
              top: window.position.y,
              width: window.size.width,
              height: window.size.height,
              transform: activeWindow === window.id ? "scale(1)" : "scale(0.98)",
            }}
            onClick={e => {
              e.stopPropagation()
              setActiveWindow(window.id)
            }}
          >
            {/* Window Title Bar */}
            <div
              className="flex items-center justify-between p-4 bg-primary/10 border-b border-border rounded-t-lg cursor-grab active:cursor-grabbing min-h-[48px]"
              onMouseDown={e => handleMouseDown(e, window.id)}
              onTouchStart={e => handleTouchStart(e, window.id)}
            >
              <div className="flex items-center space-x-3">
                <div
                  className="w-6 h-6 bg-red-500 rounded-full hover:bg-red-600 cursor-pointer flex items-center justify-center"
                  onClick={e => {
                    e.stopPropagation()
                    closeWindow(window.id)
                  }}
                />
                <div
                  className="w-6 h-6 bg-yellow-500 rounded-full hover:bg-yellow-600 cursor-pointer flex items-center justify-center"
                  onClick={e => {
                    e.stopPropagation()
                    minimizeWindow(window.id)
                  }}
                />
                <div
                  className="w-6 h-6 bg-green-500 rounded-full hover:bg-green-600 cursor-pointer flex items-center justify-center"
                  onClick={e => {
                    e.stopPropagation()
                    maximizeWindow(window.id)
                  }}
                />
                <span className="text-base font-medium ml-3 select-none">{window.title}</span>
              </div>
              <div className="flex items-center space-x-2 window-controls">
                <Button variant="ghost" size="icon" className="w-8 h-8 p-0 hover:bg-muted/50" onClick={e => { e.stopPropagation(); minimizeWindow(window.id) }}>
                  <Minus className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="w-8 h-8 p-0 hover:bg-muted/50" onClick={e => { e.stopPropagation(); maximizeWindow(window.id) }}>
                  <Square className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="w-8 h-8 p-0 hover:bg-destructive/20" onClick={e => { e.stopPropagation(); closeWindow(window.id) }}>
                  <X className="w-5 h-5" />
                </Button>
              </div>
            </div>
            <div className="h-full overflow-auto">{window.component}</div>
          </div>
        )
      )}

      {contextMenu.show && (
        <ContextMenu x={contextMenu.x} y={contextMenu.y} onClose={() => setContextMenu(prev => ({ ...prev, show: false }))} />
      )}

      {/* Taskbar */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-card/90 backdrop-blur-sm border-t border-border/50 z-50">
        <div className="flex items-center justify-between h-full px-4">
          <Button variant="ghost" size="sm" className="text-primary font-semibold hover:bg-primary/10">
            Adi OS
          </Button>
          <div className="flex items-center space-x-2">
            {windows.map(window => (
              <Button
                key={window.id}
                variant={activeWindow === window.id ? "default" : "ghost"}
                size="sm"
                className="text-xs hover:scale-105"
                onClick={() => {
                  if (window.isMinimized) restoreWindow(window.id)
                  else setActiveWindow(window.id)
                }}
              >
                {window.title}
              </Button>
            ))}
          </div>
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <span>{time.toLocaleTimeString()}</span>
            <span>{time.toLocaleDateString()}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
