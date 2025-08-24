"use client"

import React, { useState, useEffect, useRef } from "react"

interface TerminalProps {
  onOpenWindow?: (folderId: string) => void
}

const folderAliases: Record<string, string> = {
  "about me": "bio",
  "bio": "bio",
  "projects": "projects",
  "achievements": "achievements",
  "experience": "experience",
  "skills": "skills",
  "certificate": "certificate",
  "contact": "contact",
  "terminal": "terminal",
  "settings": "settings",
}

const helpText = [
  "Available commands:",
  "---------------------------------",
  "help              Show this message",
  "clear             Clear the terminal",
  "date              Show current date and time",
  "open <folder>     Open a folder/app (e.g., open bio, open projects, open skills)",
  "exit              Close this terminal window",
]

const Terminal: React.FC<TerminalProps> = ({ onOpenWindow }) => {
  const [input, setInput] = useState("")
  const [history, setHistory] = useState<string[]>([
    "Welcome to PortfolioOS Terminal 🌐",
    "Type 'help' to see available commands.",
    "Refresh the Website if you see the error.",
  ])
  const terminalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [history])

  function handleCommand(command: string): string[] {
    const args = command.trim().split(" ")
    const base = args[0].toLowerCase()
    if (base === "help") {
      return helpText
    }
    if (base === "clear") {
      setHistory([])
      return []
    }
    if (base === "date") {
      return [new Date().toString()]
    }
    if (base === "open") {
      if (args.length < 2) return ["❌ Usage: open <folder>"]
      const folderName = command.slice(5).trim().toLowerCase() // Support multi-word folder ("about me")
      const folderId = folderAliases[folderName]
      if (!folderId) {
        return [`❌ Unknown folder: "${folderName}"`, "Type 'help' to see available commands."]
      }
      if (onOpenWindow) {
        onOpenWindow(folderId)
        return [`🚀 Opening "${folderName}"...`]
      }
      return ["⚠️ No handler connected to open folders."]
    }
    if (base === "exit") {
      if (onOpenWindow) {
        onOpenWindow("close-terminal")
      }
      return ["👋 Closing terminal..."]
    }
    return [`❌ Unknown command: ${command}`, "Type 'help' to see available commands."]
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && input.trim() !== "") {
      const command = input
      setInput("")
      const output = handleCommand(command)
      setHistory(prev => [...prev, `> ${command}`, ...output])
    }
  }

  return (
    <div className="w-full h-full bg-black text-green-400 font-mono text-sm p-2 flex flex-col">
      <div ref={terminalRef} className="flex-1 overflow-y-auto mb-2">
        {history.map((line, idx) => (
          <div key={idx} className="whitespace-pre-wrap">
            {line}
          </div>
        ))}
      </div>
      <div className="flex items-center">
        <span className="text-green-500 mr-1">$</span>
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 bg-transparent outline-none text-green-400 placeholder-green-600"
          placeholder="Type a command..."
          autoFocus
        />
      </div>
    </div>
  )
}

export default Terminal
