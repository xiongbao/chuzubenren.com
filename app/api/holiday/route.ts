import { type NextRequest, NextResponse } from "next/server"
import { HolidayService } from "@/lib/holiday-service"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const dateParam = searchParams.get("date")

    const date = dateParam ? new Date(dateParam) : new Date()

    // 验证日期是否有效
    if (isNaN(date.getTime())) {
      return NextResponse.json({ error: "Invalid date parameter" }, { status: 400 })
    }

    const holidayData = HolidayService.getHolidayData(date)

    return NextResponse.json(holidayData, {
      headers: {
        // 默认节假日可以缓存更长时间
        "Cache-Control":
          holidayData.status === "default"
            ? "public, s-maxage=86400, stale-while-revalidate=604800"
            : "public, s-maxage=3600, stale-while-revalidate=86400",
      },
    })
  } catch (error) {
    console.error("Holiday API error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
