import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import ClientHolidayUpdater from "@/components/ClientHolidayUpdater"

export const metadata: Metadata = {
  title: "本人出租",
  description: "正逢节假日，本人有偿租出！",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <head>
        <link rel="icon" type="image/svg+xml" href="/images/icon.svg"/>
        <link rel="icon" type="image/svg+xml" sizes="144x144" href="/images/icon.svg"/>
        <link rel="apple-touch-icon" type="image/svg+xml" href="/images/icon.svg"/>
      </head>
      <body>
        {children}
        <ClientHolidayUpdater />
      </body>
    </html>
  )
}
