export interface Holiday {
  id: string
  name: string
  dateType: "solar" | "lunar" | "default"
  month: number
  day: number
  priority?: number
  advanceDays?: number
}

export const holidays: Holiday[] = [
  {
    id: "new-year",
    name: "元旦",
    dateType: "solar",
    month: 1,
    day: 1,
    advanceDays: 7,
  },
  {
    id: "valentine",
    name: "情人节",
    dateType: "solar",
    month: 2,
    day: 14,
    advanceDays: 7,
  },
  {
    id: "womens-day",
    name: "妇女节",
    dateType: "solar",
    month: 3,
    day: 8,
    advanceDays: 7,
  },
  {
    id: "spring-festival",
    name: "春节",
    dateType: "lunar",
    month: 1,
    day: 1,
    advanceDays: 14,
    priority: 1,
  },
  {
    id: "lantern-festival",
    name: "元宵节",
    dateType: "lunar",
    month: 1,
    day: 15,
    advanceDays: 7,
  },
  {
    id: "qingming",
    name: "清明节",
    dateType: "solar",
    month: 4,
    day: 5,
    advanceDays: 7,
  },
  {
    id: "labor-day",
    name: "劳动节",
    dateType: "solar",
    month: 5,
    day: 1,
    advanceDays: 7,
  },
  {
    id: "childrens-day",
    name: "儿童节",
    dateType: "solar",
    month: 6,
    day: 1,
    advanceDays: 7,
  },
  {
    id: "dragon-boat",
    name: "端午节",
    dateType: "lunar",
    month: 5,
    day: 5,
    advanceDays: 7,
  },
  {
    id: "mid-autumn",
    name: "中秋节",
    dateType: "lunar",
    month: 8,
    day: 15,
    advanceDays: 7,
  },
  {
    id: "national-day",
    name: "国庆节",
    dateType: "solar",
    month: 10,
    day: 1,
    advanceDays: 7,
  },
  {
    id: "christmas",
    name: "圣诞节",
    dateType: "solar",
    month: 12,
    day: 25,
    advanceDays: 7,
  },
  {
    id: "default",
    name: "日常",
    dateType: "default",
    month: 0,
    day: 0,
    priority: -1,
  },
]
