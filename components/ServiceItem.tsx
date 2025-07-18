import type { Service } from "@/config/services.config"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface ServiceItemProps {
  service: Service
}

export default function ServiceItem({ service }: ServiceItemProps) {
  return (
    <div className="flex gap-3 justify-between items-center py-2 after:content-[''] after:order-2 after:block after:w-full after:h-0 after:border-t after:border-dashed after:border-gray-400">
      <Tooltip>
        <TooltipTrigger className="order-1 shrink-0">
          <h3 className="tracking-wide">{service.name}</h3>
        </TooltipTrigger>
        <TooltipContent className="rounded-sm px-2 py-2" sideOffset={-10}>
          {service.description && <p>{service.description}</p>}
        </TooltipContent>
      </Tooltip>
      <p className="order-3 text-gray-500">
        <span className="mr-1 font-mono">{service.price}</span>
        <span className="font-light text-sm">&yen;</span>
      </p>
    </div>
  )
}
