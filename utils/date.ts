import type { Holiday } from "@/config/holidays.config"

// 简化的农历转换函数（实际项目中建议使用专业的农历库）
export function getLunarDate(date: Date): { month: number; day: number; year: number } {
  // 这里使用简化的农历转换逻辑
  // 实际项目中应该使用如 lunar-javascript 等专业库
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  // 简化处理：假设农历日期与公历相近（仅用于演示）
  // 实际应用中需要准确的农历转换算法
  return {
    year: year,
    month: month > 2 ? month - 1 : month + 11,
    day: day,
  }
}

export function isHoliday(date: Date, holiday: Holiday): boolean {
  // 默认节假日永远不匹配当前日期（它只在没有其他节假日时使用）
  if (holiday.dateType === "default") {
    return false
  }

  if (holiday.dateType === "solar") {
    return date.getMonth() + 1 === holiday.month && date.getDate() === holiday.day
  } else {
    const lunar = getLunarDate(date)
    return lunar.month === holiday.month && lunar.day === holiday.day
  }
}

export function isNearHoliday(date: Date, holiday: Holiday): boolean {
  // 默认节假日永远不是临近节假日
  if (holiday.dateType === "default") {
    return false
  }

  const advanceDays = holiday.advanceDays || 7

  if (holiday.dateType === "solar") {
    const holidayDate = new Date(date.getFullYear(), holiday.month - 1, holiday.day)
    const diffTime = holidayDate.getTime() - date.getTime()
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

    return diffDays >= 0 && diffDays <= advanceDays
  } else {
    // 农历日期的临近判断（简化处理）
    const lunar = getLunarDate(date)
    const daysDiff = Math.abs(holiday.month * 30 + holiday.day - (lunar.month * 30 + lunar.day))
    return daysDiff <= advanceDays
  }
}

export function getNextHolidayDate(holiday: Holiday, currentYear: number): Date {
  if (holiday.dateType === "solar") {
    const holidayDate = new Date(currentYear, holiday.month - 1, holiday.day)
    if (holidayDate < new Date()) {
      return new Date(currentYear + 1, holiday.month - 1, holiday.day)
    }
    return holidayDate
  } else {
    // 农历日期转换（简化处理）
    return new Date(currentYear, holiday.month - 1, holiday.day)
  }
}

export function getHolidayDateInYear(holiday: Holiday, year: number): Date {
  if (holiday.dateType === "solar") {
    return new Date(year, holiday.month - 1, holiday.day)
  } else {
    // 农历日期转换（简化处理，实际项目中需要专业库）
    // 这里假设农历日期大致对应公历日期
    const approximateMonth = holiday.month === 12 ? 0 : holiday.month
    const approximateDay = holiday.day
    return new Date(year, approximateMonth, approximateDay)
  }
}

export function daysBetween(date1: Date, date2: Date): number {
  const diffTime = date2.getTime() - date1.getTime()
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24))
}

export function isDatePassed(date: Date, holiday: Holiday): boolean {
  const currentYear = date.getFullYear()
  const holidayDate = getHolidayDateInYear(holiday, currentYear)
  return date > holidayDate
}
