"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

interface HolidayData {
  holidays: any[]
  services: any[]
  status: "current" | "upcoming" | "default"
  displayName: string
}

export default function ClientHolidayUpdater() {
  const router = useRouter()
  const [lastCheck, setLastCheck] = useState(new Date())

  useEffect(() => {
    // 每小时检查一次是否需要更新
    const interval = setInterval(
      async () => {
        try {
          const response = await fetch("/api/holiday")
          const currentData: HolidayData = await response.json()

          // 检查数据是否发生变化（简化检查）
          const now = new Date()
          if (now.getDate() !== lastCheck.getDate() || now.getMonth() !== lastCheck.getMonth()) {
            setLastCheck(now)
            router.refresh() // 刷新服务端组件
          }
        } catch (error) {
          console.error("Failed to check holiday updates:", error)
        }
      },
      60 * 60 * 1000,
    ) // 每小时检查一次

    return () => clearInterval(interval)
  }, [router, lastCheck])

  return null // 这个组件不渲染任何内容
}
