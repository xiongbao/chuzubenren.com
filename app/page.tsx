import { HolidayService } from "@/lib/holiday-service"
import HolidayBanner from "@/components/HolidayBanner"
import ServiceList from "@/components/ServiceList"
import type { Metadata } from "next"
import { headers } from "next/headers"

async function getSiteName(): Promise<string> {
  const host = (await headers()).get('host') || 'chuzubenren.com'
  const domainName = host.replace(/:\d+$/, '') // 移除端口号
  if (domainName === "chuzubenren.com") {
    return "出租本人"
  }  else {
    return "本人出租"
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const holidayData = HolidayService.getHolidayData()
  const siteName = await getSiteName()
  return {
    title: `${holidayData.displayName || "日常"}${siteName}`,
    description: `为您精选的${holidayData.displayName || "日常"}相关商品，让节日更加精彩！`,
    keywords: `${holidayData.displayName}, 节假日商品, 特色商品, 节日礼品`,
  }
}

export default async function HomePage() {
  // 服务端获取节假日数据
  const holidayData = HolidayService.getHolidayData()
  const siteName = await getSiteName()

  return (
    <div className="menu-wrap">
      <div className="menu-frame bg-white drop-shadow-2xl">
        <div className="flex flex-col h-full">
          <HolidayBanner
            holidays={holidayData.holidays}
            status={holidayData.status}
            displayName={holidayData.displayName}
            siteName={siteName}
          />
          <ServiceList services={holidayData.services} />

          <div className="flex items-center gap-4 mt-auto p-5 relative after:content-[''] after:absolute after:inset-x-5 after:inset-y-0 after:h-1 after:bg-gray-200">
            <img
              src="/images/qr-wechat.png"
              alt="微信二维码"
              className="w-15 h-15"
            />
            <div>
              <h2 className="text-xl font-semibold text-gray-700">
                {siteName}
              </h2>
              <p className="text-sm text-gray-500">请扫码添加微信了解更多</p>
            </div>
          </div>
        </div>
      </div>
      <div className="menu-frame menu-frame-shadow"></div>
      <div className="hand bg-[url(/images/hand-back.png)] z-1"></div>
      <div className="hand bg-[url(/images/hand-front.png)] z-3"></div>
    </div>
  )
}
