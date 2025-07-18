import type { Holiday } from "@/config/holidays.config"

interface HolidayBannerProps {
  holidays: Holiday[]
  status: "current" | "upcoming" | "default"
  displayName: string
  siteName: string
}

export default function HolidayBanner({ holidays, status, displayName, siteName }: HolidayBannerProps) {
  if (!holidays.length) {
    return (
      <div className="bg-gray-100 rounded-lg p-6 mb-8 text-center">
        <h1 className="text-2xl font-bold text-gray-600">暂无特殊节假日</h1>
        <p className="text-gray-500 mt-2">敬请期待下一个节假日的特色商品</p>
      </div>
    )
  }

  const getBannerConfig = () => {
    switch (status) {
      case "current":
        return {
          bgClass: "bg-gradient-to-r from-red-500 to-pink-500",
          textClass: "text-white",
          title: `${displayName}${siteName}`,
          subtitle: `正值${displayName}，情感陪伴！`,
          subtitleClass: "text-red-100",
        }
      case "upcoming":
        return {
          bgClass: "bg-gradient-to-r from-orange-500 to-yellow-500",
          textClass: "text-white",
          title: `${displayName}${siteName}`,
          subtitle: `${displayName}即将到来，提前预订你我幸福时光！`,
          subtitleClass: "text-orange-100",
        }
      case "default":
        return {
          bgClass: "bg-gradient-to-r from-blue-500 to-purple-500",
          textClass: "text-white",
          title: `${displayName}${siteName}`,
          subtitle: `生活所迫，童叟无欺！`,
          subtitleClass: "text-blue-100",
        }
    }
  }

  const config = getBannerConfig()

  return (
    <div className="flex justify-between relative p-5 pt-4">
      <div className="flex flex-col items-start gap-2">
        <h1 className="relative text-3xl font-semibold pin-sticky -indent-1">{config.title}</h1>
        <p className="text-gray-500">{config.subtitle}</p>
      </div>
      <div className="badge">
        {status === "current" && <><span>火热</span><span>进行</span></>}
        {status === "upcoming" && <><span>提前</span><span>预定</span></>}
        {status === "default" && <><span>淡季</span><span>促销</span></>}
      </div>
    </div>
  )
}
