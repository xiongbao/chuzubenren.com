import { holidays, type Holiday } from "@/config/holidays.config"
import { services, type Service } from "@/config/services.config"
import { isHoliday, isNearHoliday } from "@/utils/date"

export interface HolidayData {
  holidays: Holiday[]
  services: Service[]
  status: "current" | "upcoming" | "default"
  displayName: string
}

export class HolidayService {
  static getCurrentHolidays(date: Date = new Date()): Holiday[] {
    const currentHolidays: Holiday[] = []
    const nearHolidays: Holiday[] = []

    // 过滤掉默认节假日，单独处理
    const regularHolidays = holidays.filter((h) => h.dateType !== "default")
    const defaultHoliday = holidays.find((h) => h.dateType === "default")

    for (const holiday of regularHolidays) {
      if (isHoliday(date, holiday)) {
        currentHolidays.push(holiday)
      } else if (isNearHoliday(date, holiday)) {
        nearHolidays.push(holiday)
      }
    }

    // 优先级1: 如果有当前节假日，返回当前节假日
    if (currentHolidays.length > 0) {
      return currentHolidays.sort((a, b) => (b.priority || 0) - (a.priority || 0))
    }

    // 优先级2: 如果有临近的节假日，返回临近节假日
    if (nearHolidays.length > 0) {
      return nearHolidays.sort((a, b) => (b.priority || 0) - (a.priority || 0))
    }

    // 优先级3: 返回默认节假日
    return defaultHoliday ? [defaultHoliday] : []
  }

  static getHolidayProducts(holidayIds: string[]): Service[] {
    if (!holidayIds.length) return []
    return services.filter((service) => service.holidayIds.some((id) => holidayIds.includes(id)))
  }

  static getHolidayStatus(holidays: Holiday[], date: Date = new Date()): "current" | "upcoming" | "default" {
    if (!holidays.length) return "default"

    // 检查是否为默认节假日
    if (holidays.some((h) => h.dateType === "default")) {
      return "default"
    }

    // 检查是否为当前节假日
    for (const holiday of holidays) {
      if (isHoliday(date, holiday)) {
        return "current"
      }
    }

    // 检查是否为临近节假日
    for (const holiday of holidays) {
      if (isNearHoliday(date, holiday)) {
        return "upcoming"
      }
    }

    return "default"
  }

  static getHolidayDisplayName(holidays: Holiday[]): string {
    return holidays.map((h) => h.name).join("、")
  }

  static getHolidayData(date: Date = new Date()): HolidayData {
    const holidays = this.getCurrentHolidays(date)
    const holidayIds = holidays.map((h) => h.id)
    const services = this.getHolidayProducts(holidayIds)
    const status = this.getHolidayStatus(holidays, date)
    const displayName = this.getHolidayDisplayName(holidays)

    return {
      holidays,
      services,
      status,
      displayName,
    }
  }
}