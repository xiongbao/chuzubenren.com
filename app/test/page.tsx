import { HolidayService } from "@/lib/holiday-service"
import TestClient from "./TestClient"

export default async function TestPage() {
  // 服务端预渲染一些测试数据
  const testDates = [
    { name: "元旦", date: "2024-01-01" },
    { name: "情人节前一周", date: "2024-02-07" },
    { name: "情人节", date: "2024-02-14" },
    { name: "情人节后", date: "2024-02-20" },
    { name: "春节前两周", date: "2024-01-28" },
    { name: "普通日期", date: "2024-03-15" },
    { name: "劳动节前", date: "2024-04-25" },
    { name: "儿童节", date: "2024-06-01" },
  ]

  const initialTestResults = await Promise.all(
    testDates.map(async (test) => {
      const date = new Date(test.date)
      const holidayData = HolidayService.getHolidayData(date)
      return {
        ...test,
        holidayData,
      }
    }),
  )

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">节假日系统测试 (SSR)</h1>
        <p className="text-gray-600">此页面支持服务端渲染，预渲染了测试数据</p>
      </div>

      {/* 服务端渲染的测试结果 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {initialTestResults.map((result) => (
          <div key={result.name} className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">{result.name}</h3>
            <p className="text-sm text-gray-600 mb-2">日期: {result.date}</p>
            <p className="text-sm">
              <strong>节假日:</strong> {result.holidayData.displayName || "无"}
            </p>
            <p className="text-sm">
              <strong>状态:</strong>
              <span
                className={`ml-2 px-2 py-1 rounded text-xs ${
                  result.holidayData.status === "current"
                    ? "bg-red-100 text-red-800"
                    : result.holidayData.status === "upcoming"
                      ? "bg-orange-100 text-orange-800"
                      : "bg-gray-100 text-gray-800" // 默认状态
                }`}
              >
                {result.holidayData.status === "current" && "正在进行"}
                {result.holidayData.status === "upcoming" && "即将到来"}
                {result.holidayData.status === "default" && "日常精选"}
              </span>
            </p>
            <p className="text-sm">
              <strong>商品数量:</strong> {result.holidayData.services.length}
            </p>
          </div>
        ))}
      </div>

      {/* 客户端交互测试 */}
      <TestClient />
    </div>
  )
}
