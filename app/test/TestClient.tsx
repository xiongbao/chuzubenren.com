"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface HolidayData {
  holidays: any[]
  services: any[]
  status: "current" | "upcoming" | "default" // 更新状态类型
  displayName: string
}

export default function TestClient() {
  const [testDate, setTestDate] = useState(new Date())
  const [holidayData, setHolidayData] = useState<HolidayData | null>(null)
  const [loading, setLoading] = useState(false)

  const handleDateChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = new Date(e.target.value)
    setTestDate(newDate)
    await fetchHolidayData(newDate)
  }

  const fetchHolidayData = async (date: Date) => {
    setLoading(true)
    try {
      const response = await fetch(`/api/holiday?date=${date.toISOString()}`)
      const data = await response.json()
      setHolidayData(data)
    } catch (error) {
      console.error("Failed to fetch holiday data:", error)
    } finally {
      setLoading(false)
    }
  }

  const testDates = [
    { name: "今天", date: new Date().toISOString().split("T")[0] },
    { name: "元旦", date: "2024-01-01" },
    { name: "情人节", date: "2024-02-14" },
    { name: "春节", date: "2024-02-10" },
    { name: "劳动节", date: "2024-05-01" },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>客户端动态测试</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">选择测试日期：</label>
          <input
            type="date"
            value={testDate.toISOString().split("T")[0]}
            onChange={handleDateChange}
            className="border rounded px-3 py-2"
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
          {testDates.map((test) => (
            <Button
              key={test.name}
              variant="outline"
              size="sm"
              onClick={() => {
                const newDate = new Date(test.date)
                setTestDate(newDate)
                fetchHolidayData(newDate)
              }}
            >
              {test.name}
            </Button>
          ))}
        </div>

        {loading && (
          <div className="text-center py-4">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto"></div>
            <p className="mt-2 text-gray-600">加载中...</p>
          </div>
        )}

        {holidayData && !loading && (
          <div className="bg-gray-50 p-4 rounded">
            <h3 className="font-semibold mb-2">API 测试结果：</h3>
            <p>
              <strong>测试日期：</strong> {testDate.toLocaleDateString("zh-CN")}
            </p>
            <p>
              <strong>检测到的节假日：</strong> {holidayData.displayName || "无"}
            </p>
            <p>
              <strong>状态：</strong>
              <span
                className={`ml-2 px-2 py-1 rounded text-sm ${
                  holidayData.status === "current"
                    ? "bg-red-100 text-red-800"
                    : holidayData.status === "upcoming"
                      ? "bg-orange-100 text-orange-800"
                      : "bg-gray-100 text-gray-800" // 默认状态使用灰色
                }`}
              >
                {holidayData.status === "current" && "正在进行"}
                {holidayData.status === "upcoming" && "即将到来"}
                {holidayData.status === "default" && "日常精选"}
              </span>
            </p>
            <p>
              <strong>商品数量：</strong> {holidayData.services.length}
            </p>
          </div>
        )}

        <div className="text-center">
          <Button onClick={() => (window.location.href = "/")}>返回主页</Button>
        </div>
      </CardContent>
    </Card>
  )
}
