import type { Service } from "@/config/services.config"
import ServiceItem from "./ServiceItem"

interface ServiceListProps {
  services: Service[]
}

export default function ServiceList({ services }: ServiceListProps) {
  if (!services.length) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">暂无服务内容</p>
      </div>
    )
  }

  return (
    <div className="flex flex-col flex-1 overflow-y-scroll px-5 py-2 snap-mandatory">
      {services.map((service) => (
        <ServiceItem key={service.id} service={service} />
      ))}
    </div>
  )
}
