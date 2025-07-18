import { holidays, type Holiday } from "@/config/holidays.config"
import { isHoliday, isNearHoliday, getHolidayDateInYear } from "./date"

export function getCurrentHolidays(date: Date = new Date()): Holiday[] {
  const currentHolidays: Holiday[] = []
  const nearHolidays: Holiday[] = []

  for (const holiday of holidays) {
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

  // 优先级3: 返回上一个节假日
  const previousHolidays = getPreviousHolidays(date)
  return previousHolidays
}

export function getPreviousHolidays(date: Date = new Date()): Holiday[] {
  const currentYear = date.getFullYear()
  const previousYear = currentYear - 1

  // 收集当前年份和上一年份的所有节假日日期
  const allHolidayDates: Array<{ holiday: Holiday; date: Date; year: number }> = []

  // 添加当前年份的节假日
  holidays.forEach((holiday) => {
    const holidayDate = getHolidayDateInYear(holiday, currentYear)
    allHolidayDates.push({ holiday, date: holidayDate, year: currentYear })
  })

  // 添加上一年份的节假日
  holidays.forEach((holiday) => {
    const holidayDate = getHolidayDateInYear(holiday, previousYear)
    allHolidayDates.push({ holiday, date: holidayDate, year: previousYear })
  })

  // 筛选出已经过去的节假日
  const passedHolidays = allHolidayDates.filter((item) => item.date < date)

  if (passedHolidays.length === 0) {
    // 如果没有已过去的节假日，返回去年最后一个节假日
    const lastYearHolidays = allHolidayDates
      .filter((item) => item.year === previousYear)
      .sort((a, b) => b.date.getTime() - a.date.getTime())

    return lastYearHolidays.length > 0 ? [lastYearHolidays[0].holiday] : []
  }

  // 按日期排序，获取最近的已过去节假日
  passedHolidays.sort((a, b) => b.date.getTime() - a.date.getTime())

  // 获取最近的节假日日期
  const latestDate = passedHolidays[0].date

  // 找出在同一天的所有节假日
  const latestHolidays = passedHolidays
    .filter((item) => item.date.getTime() === latestDate.getTime())
    .map((item) => item.holiday)
    .sort((a, b) => (b.priority || 0) - (a.priority || 0))

  return latestHolidays
}

export function getHolidayDisplayName(holidays: Holiday[]): string {
  return holidays.map((h) => h.name).join("、")
}

export function getHolidayStatus(holidays: Holiday[], date: Date = new Date()): "current" | "upcoming" | "previous" {
  if (!holidays.length) return "previous"

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

  return "previous"
}
