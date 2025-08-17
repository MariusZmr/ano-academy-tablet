"use client"

import { useState, useEffect, useCallback } from "react"
import { TabletInterface } from "@/components/tablet-interface"

export default function Home() {
  const [isTabletOpen, setIsTabletOpen] = useState(false)
  const [lastToggle, setLastToggle] = useState(0)
  const [isBlocked, setIsBlocked] = useState(false)

  const COOLDOWN_MS = 600

  const checkBlockingContext = useCallback(() => {
    // In a real implementation, these would check actual game states
    // For demo purposes, we'll simulate some blocking conditions
    const isDowned = false // player.isDowned()
    const isArrested = false // player.isArrested()
    const isInWater = false // player.isInWater()
    const isInFreeFall = false // player.isInFreeFall()
    const isInChase = false // player.isInVehicleChase()
    const isInMinigame = false // player.isInCriticalMinigame()

    return isDowned || isArrested || isInWater || isInFreeFall || isInChase || isInMinigame
  }, [])

  const handleToggleTablet = useCallback(() => {
    const now = Date.now()

    // Check cooldown
    if (now - lastToggle < COOLDOWN_MS) {
      return
    }

    // Check blocking context
    if (checkBlockingContext()) {
      setIsBlocked(true)
      setTimeout(() => setIsBlocked(false), 2000)
      return
    }

    setLastToggle(now)
    setIsTabletOpen((prev) => !prev)
  }, [lastToggle, checkBlockingContext])

  const handleCloseTablet = useCallback(() => {
    setIsTabletOpen(false)
  }, [])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "F2") {
        event.preventDefault()
        handleToggleTablet()
      } else if (event.key === "Escape" && isTabletOpen) {
        event.preventDefault()
        handleCloseTablet()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [handleToggleTablet, handleCloseTablet, isTabletOpen])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 bg-[url('/futuristic-city-night.png')] bg-cover bg-center opacity-60" />

        <div className="absolute top-4 left-4 z-10">
          <div className="bg-black/50 backdrop-blur-sm rounded-lg p-3 border border-white/20">
            <div className="text-sm font-mono">
              <div className="text-green-400">Health: 100%</div>
              <div className="text-blue-400">Armor: 85%</div>
              <div className="text-yellow-400">Cash: $12,450</div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-4 right-4 z-10">
          <div className="bg-black/50 backdrop-blur-sm rounded-lg p-3 border border-white/20">
            <div className="text-sm font-mono text-gray-300">
              Press <span className="text-primary font-bold">F2</span> to open tablet
            </div>
          </div>
        </div>

        {isBlocked && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
            <div className="bg-destructive/90 backdrop-blur-sm rounded-lg p-4 border border-destructive">
              <div className="text-destructive-foreground font-semibold text-center">
                Cannot open tablet in current context
              </div>
            </div>
          </div>
        )}

        {isTabletOpen && <TabletInterface onClose={handleCloseTablet} />}
      </div>
    </div>
  )
}
