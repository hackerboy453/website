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
import { useTheme } from "@/components/theme-provider"
import { useSound } from "@/components/sound-provider"
import { Sun, Moon, Volume2, VolumeX } from "lucide-react"

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
  bio: "bio",
  projects: "projects",
  achievements: "achievements",
  experience: "experience",
  skills: "skills",
  certificate: "certificate",
  contact: "contact",
  terminal: "terminal",
}

// Ensure your wallpaper files are in the /public folder
const wallpapers = [
  "/wallpaper/wallpaper1.png",
  "/wallpaper/wallpaper2.png",
  "/wallpaper/wallpaper3.png",
  "/wallpaper/wallpaper4.png",
  "/wallpaper/wallpaper5.png",
  "/wallpaper/wallpaper6.png",
  "/wallpaper/wallpaper7.png",
  "/wallpaper/wallpaper8.png",
  "/wallpaper/wallpaper9.png",
]

export default function Desktop() {
  const [time, setTime] = useState(new Date())
  const [windows, setWindows] = useState<Window[]>([])
  const [activeWindow, setActiveWindow] = useState<string | null>(null)
  const [contextMenu, setContextMenu] = useState<{ x: number; y: number; show: boolean }>({ x: 0, y: 0, show: false })
  const [isLoading, setIsLoading] = useState<string | null>(null)
  const [currentWallpaper, setCurrentWallpaper] = useState<string>("")

  const draggedWindowRef = useRef<string | null>(null)
  const dragOffsetRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 })

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  // Handle window resize to reposition windows that might be outside new boundaries
  useEffect(() => {
    const handleWindowResize = () => {
      setWindows(prev => prev.map(window => {
        const constrainedPosition = constrainWindowPosition(
          window.position.x, 
          window.position.y, 
          window.size.width, 
          window.size.height
        )
        return { ...window, position: constrainedPosition }
      }))
    }

    window.addEventListener('resize', handleWindowResize)
    return () => window.removeEventListener('resize', handleWindowResize)
  }, [])

  useEffect(() => {
    const initialWallpaper = wallpapers[Math.floor(Math.random() * wallpapers.length)]
    setCurrentWallpaper(initialWallpaper)
    const wallpaperInterval = setInterval(() => {
      setCurrentWallpaper(prevWallpaper => {
        const currentIndex = wallpapers.indexOf(prevWallpaper)
        const nextIndex = (currentIndex + 1) % wallpapers.length
        return wallpapers[nextIndex]
      })
    }, 30000)
    return () => clearInterval(wallpaperInterval)
  }, [])

  useEffect(() => {
    const handler = () => openWindow("personalize")
    window.addEventListener("open-personalize-window", handler)
    return () => window.removeEventListener("open-personalize-window", handler)
  }, [windows])

  const desktopIcons = [
    { id: "bio", name: "About Me", image: "/icons/download.jpg" },
    { id: "projects", name: "Projects", image: "/icons/project.jpg" },
    { id: "achievements", name: "Achievements", image: "/icons/achievements.jpg" },
    { id: "contact", name: "Contact", image: "/icons/contacts.jpg" },
    { id: "terminal", name: "Terminal", image: "/icons/terminal.jpg" },
    { id: "about", name: "About Portfolio OS", image: "/icons/settings.jpg" },
    { id: "experience", name: "Experience", image: "/icons/experince.jpg" },
    { id: "skills", name: "Skills", image: "/icons/skills.jpg" },
    { id: "certificate", name: "Certificate", image: "/icons/certificate.jpg" },
    { id: "personalize", name: "Personalize", image: "/icons/settings.jpg" },
  ]

  const { isMuted } = useSound()
  
  const playSound = (type: "click" | "open" | "close" | "minimize" | "drag" | "drop") => {
    // Mute click, open, and close sounds when muted
    // (open is muted because opening windows is triggered by clicks)
    if ((type === "click" || type === "open" || type === "close") && isMuted) return
    const audio = new Audio(`/${type}-sound.mp3`)
    audio.volume = 0.1
    audio.play().catch(() => {})
  }

  // Helper function to constrain window position within screen boundaries
  const constrainWindowPosition = (x: number, y: number, width: number, height: number) => {
    const screenWidth = window.innerWidth
    const screenHeight = window.innerHeight
    const taskbarHeight = 48 // Height of the top taskbar
    const snapThreshold = 20 // Distance from edge to trigger snapping
    
    let constrainedX = x
    let constrainedY = y
    
    // Snap to left edge
    if (x < snapThreshold && x > -snapThreshold) {
      constrainedX = 0
    }
    // Snap to right edge
    else if (x > screenWidth - width - snapThreshold && x < screenWidth - width + snapThreshold) {
      constrainedX = screenWidth - width
    }
    // Ensure window doesn't go off the left edge
    else {
      constrainedX = Math.max(0, Math.min(x, screenWidth - width))
    }
    
    // Snap to top edge (below taskbar)
    if (y < taskbarHeight + snapThreshold && y > taskbarHeight - snapThreshold) {
      constrainedY = taskbarHeight
    }
    // Snap to bottom edge
    else if (y > screenHeight - height - snapThreshold && y < screenHeight - height + snapThreshold) {
      constrainedY = screenHeight - height
    }
    // Ensure window doesn't go off the edges
    else {
      constrainedY = Math.max(taskbarHeight, Math.min(y, screenHeight - height))
    }
    
    return { x: constrainedX, y: constrainedY }
  }

  // Mouse drag handlers
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!draggedWindowRef.current) return
    const windowId = draggedWindowRef.current
    const offset = dragOffsetRef.current
    const newX = e.clientX - offset.x
    const newY = e.clientY - offset.y
    
    setWindows(prev => {
      const window = prev.find(w => w.id === windowId)
      if (!window) return prev
      
      // Constrain the window position to stay within screen boundaries
      const constrainedPosition = constrainWindowPosition(newX, newY, window.size.width, window.size.height)
      
      return prev.map(w => 
        w.id === windowId 
          ? { ...w, position: constrainedPosition } 
          : w
      )
    })
  }, [])

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
    dragOffsetRef.current = { x: e.clientX - win.position.x, y: e.clientY - win.position.y }
    setActiveWindow(windowId)
    playSound("drag")
    document.body.style.userSelect = "none"
    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseup", handleMouseUp)
  }

  // Touch drag handlers
  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!draggedWindowRef.current) return
    const windowId = draggedWindowRef.current
    const offset = dragOffsetRef.current
    const touch = e.touches[0]
    if (!touch) return
    const newX = touch.clientX - offset.x
    const newY = touch.clientY - offset.y
    
    setWindows(prev => {
      const window = prev.find(w => w.id === windowId)
      if (!window) return prev
      
      // Constrain the window position to stay within screen boundaries
      const constrainedPosition = constrainWindowPosition(newX, newY, window.size.width, window.size.height)
      
      return prev.map(w => 
        w.id === windowId 
          ? { ...w, position: constrainedPosition } 
          : w
      )
    })
  }, [])

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
    dragOffsetRef.current = { x: touch.clientX - win.position.x, y: touch.clientY - win.position.y }
    setActiveWindow(windowId)
    playSound("drag")
    document.body.style.userSelect = "none"
    window.addEventListener("touchmove", handleTouchMove, { passive: false })
    window.addEventListener("touchend", handleTouchEnd)
  }

  // Position calculation function
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

  // Open window function
  const openWindow = async (iconId: string) => {
    const icon = desktopIcons.find(i => i.id === iconId)
    if (!icon) return
    const existing = windows.find(w => w.id === iconId)
    if (existing) {
      setWindows(prev => prev.map(w => (w.id === iconId ? { ...w, isMinimized: false } : w)))
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
              position: w.isMaximized ? getNewWindowPosition(windowId) : { x: 0, y: 48 },
              size: w.isMaximized
                ? { ...DEFAULT_WINDOW_SIZE }
                : { width: window.innerWidth, height: window.innerHeight - 48 },
            }
          : w
      )
    )
  }

  const restoreWindow = (windowId: string) => {
    playSound("click")
    setWindows(prev => prev.map(w => (w.id === windowId ? { ...w, isMinimized: false } : w)))
    setActiveWindow(windowId)
  }

  // The missing handleDesktopClick function that was causing ReferenceError
  const handleDesktopClick = () => {
    setContextMenu(prev => ({ ...prev, show: false }))
    setActiveWindow(null)
  }

  const handleRightClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setContextMenu({ x: e.clientX, y: e.clientY, show: true })
  }

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
      case "terminal": return <Terminal onOpenWindow={handleTerminalOpenWindow} />
      case "experience": return <Experience />
      case "skills": return <Skills />
      case "certificate": return <Certificate />
      case "about":
        return (
          <div className="p-6 text-base text-foreground">
            <h2 className="text-2xl font-bold mb-2">About Portfolio OS</h2>
            <p className="mb-2">Portfolio OS is a personal desktop-inspired portfolio system, designed for a unique and interactive experience.</p>
            <p className="mb-2">Version: <span className="font-semibold">v1.3</span></p>
            <p className="mb-2">Changelog: Android optimization, improved mobile touch support, and enhanced theme controls.</p>
            <p className="mb-2">Created by Adi. All rights reserved.</p>
          </div>
        )
      case "personalize": return <PersonalizeWindow />
      default: return <div className="p-4">Window content</div>
    }
  }

  const iconColumns: { id: string; name: string; image: string }[][] = []
  for (let i = 0; i < desktopIcons.length; i += ICONS_PER_COLUMN) {
    iconColumns.push(desktopIcons.slice(i, i + ICONS_PER_COLUMN))
  }

  return (
    <div
      className="h-screen w-full relative overflow-hidden select-none pt-14"
      onClick={handleDesktopClick}
      onContextMenu={handleRightClick}
      style={{
        backgroundImage: `url('${currentWallpaper}')`,
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "black",
        transition: "background-image 1.5s ease-in-out",
      }}
    >
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute top-20 left-4 flex flex-row items-start z-10">
        {iconColumns.map((column, colIdx) => (
          <div key={colIdx} className="flex flex-col items-center" style={{ marginRight: ICON_HORIZONTAL_GAP }}>
            {column.map((icon, rowIdx) => (
              <div
                key={icon.id}
                className="flex flex-col items-center space-y-2 cursor-pointer group relative mb-5"
                style={{ marginBottom: rowIdx === column.length - 1 ? 0 : ICON_VERTICAL_GAP }}
                onClick={e => { e.stopPropagation(); openWindow(icon.id) }}
              >
                <Card className="w-16 h-16 flex items-center justify-center bg-card/90 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl group-hover:bg-card/95 relative">
                  <img src={icon.image} alt={icon.name} className="w-10 h-10 object-contain" />
                  {isLoading === icon.id && <div className="absolute inset-0 bg-primary/20 rounded-lg animate-pulse"></div>}
                </Card>
                <span className="text-xs text-center text-white/90 group-hover:text-white transition-colors duration-200 drop-shadow-lg">
                  {icon.name}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
      {windows.map(window =>
        !window.isMinimized && (
          <div
            key={window.id}
            className={`absolute bg-card border border-border rounded-lg shadow-2xl transition-all duration-300 ${activeWindow === window.id ? "z-50 shadow-3xl" : "z-40"} ${draggedWindowRef.current === window.id ? "cursor-grabbing" : "cursor-default"}`}
            style={{
              left: window.position.x,
              top: window.position.y,
              width: window.size.width,
              height: window.size.height,
              maxHeight: "calc(100vh - 56px)",
              transform: activeWindow === window.id ? "scale(1)" : "scale(0.98)",
            }}
            onClick={e => { e.stopPropagation(); setActiveWindow(window.id) }}
          >
            <div
              className="flex items-center justify-between p-4 bg-primary/10 border-b border-border rounded-t-lg cursor-grab active:cursor-grabbing min-h-[48px]"
              onMouseDown={e => handleMouseDown(e, window.id)}
              onTouchStart={e => handleTouchStart(e, window.id)}
            >
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-red-500 rounded-full hover:bg-red-600 cursor-pointer" onClick={e => { e.stopPropagation(); closeWindow(window.id) }} />
                <div className="w-6 h-6 bg-yellow-500 rounded-full hover:bg-yellow-600 cursor-pointer" onClick={e => { e.stopPropagation(); minimizeWindow(window.id) }} />
                <div className="w-6 h-6 bg-green-500 rounded-full hover:bg-green-600 cursor-pointer" onClick={e => { e.stopPropagation(); maximizeWindow(window.id) }} />
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
            <div className="h-full max-h-full overflow-auto">{window.component}</div>
          </div>
        )
      )}
      {contextMenu.show && <ContextMenu x={contextMenu.x} y={contextMenu.y} onClose={() => setContextMenu(prev => ({ ...prev, show: false }))} />}
      <div className="absolute top-0 left-0 right-0 h-12 bg-black/20 backdrop-blur-md border-b border-white/10 z-50">
        <div className="flex items-center justify-between h-full px-4">
          <Button variant="ghost" size="sm" className="text-white/90 font-semibold hover:bg-white/10">Adi Portfolio</Button>
          <div className="flex items-center space-x-2">
            {windows.map(window => (
              <Button
                key={window.id}
                variant={activeWindow === window.id ? "default" : "ghost"}
                size="sm"
                className={`text-xs hover:scale-105 ${activeWindow === window.id ? "bg-white/20 text-white" : "text-white/80 hover:bg-white/10"}`}
                onClick={() => {
                  if (window.isMinimized) restoreWindow(window.id);
                  else setActiveWindow(window.id);
                }}
              >
                {window.title}
              </Button>
            ))}
            <ThemeToggleButton />
            <MuteButton />
          </div>
          <div className="flex items-center space-x-4 text-sm text-white/90">
            <span>{time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
            <span>{time.toLocaleDateString()}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function MuteButton() {
  const { isMuted, toggleMute } = useSound()
  return (
    <Button
      variant="ghost"
      size="icon"
      className="w-10 h-10 p-0 flex items-center justify-center text-white/90 hover:bg-white/10"
      aria-label="Toggle sound"
      onClick={toggleMute}
    >
      {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
    </Button>
  )
}

function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme()
  return (
    <Button
      variant="ghost"
      size="icon"
      className="w-10 h-10 p-0 flex items-center justify-center text-white/90 hover:bg-white/10"
      aria-label="Toggle theme"
      onClick={toggleTheme}
    >
      {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </Button>
  )
}

function PersonalizeWindow() {
  const { theme, toggleTheme } = useTheme()
  const { isMuted, toggleMute } = useSound()
  return (
    <div className="p-6 text-base text-foreground">
      <h2 className="text-2xl font-bold mb-4">Personalize</h2>
      <div className="flex flex-col gap-4">
        <span className="font-medium">Theme:</span>
        <div className="flex gap-4">
          <button
            className={`px-4 py-2 rounded border ${theme === "light" ? "bg-primary text-white" : "bg-card text-foreground"}`}
            onClick={() => { if (theme !== "light") toggleTheme() }}
          >
            Light
          </button>
          <button
            className={`px-4 py-2 rounded border ${theme === "dark" ? "bg-primary text-white" : "bg-card text-foreground"}`}
            onClick={() => { if (theme !== "dark") toggleTheme() }}
          >
            Dark
          </button>
        </div>
        <div className="flex flex-col gap-4 mt-4">
          <span className="font-medium">Sound:</span>
          <button
            className={`px-4 py-2 rounded border flex items-center gap-2 ${isMuted ? "bg-card text-foreground" : "bg-primary text-white"}`}
            onClick={toggleMute}
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            {isMuted ? "Unmute" : "Mute"}
          </button>
        </div>
      </div>
    </div>
  )
}
