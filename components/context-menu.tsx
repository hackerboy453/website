"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { RefreshCw, Settings, Info, Palette } from "lucide-react"

interface ContextMenuProps {
  x: number
  y: number
  onClose: () => void
}

export default function ContextMenu({ x, y, onClose }: ContextMenuProps) {
  const menuItems = [
    { icon: RefreshCw, label: "Refresh", action: () => window.location.reload() },
    { icon: Palette, label: "Personalize", action: () => {
      window.dispatchEvent(new CustomEvent("open-personalize-window"))
    } },
    // { icon: Settings, label: "Display Settings", action: () => console.log("Display Settings") },
    { icon: Info, label: "About PortfolioOS", action: () => console.log("About") },
  ]

  return (
    <Card
      className="absolute z-[100] min-w-48 p-1 bg-card/95 backdrop-blur-sm border-border/50 shadow-xl animate-in fade-in-0 zoom-in-95 duration-200"
      style={{ left: x, top: y }}
      onClick={(e) => e.stopPropagation()}
    >
      {menuItems.map((item, index) => (
        <div key={index}>
          <Button
            variant="ghost"
            size="sm"
            className="w-full justify-start text-sm h-8 px-2 hover:bg-muted/50"
            onClick={() => {
              item.action()
              onClose()
            }}
          >
            <item.icon className="w-4 h-4 mr-2" />
            {item.label}
          </Button>
          {index === 1 && <Separator className="my-1" />}
        </div>
      ))}
    </Card>
  )
}
