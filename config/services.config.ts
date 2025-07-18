export interface Service {
  id: string
  name: string
  price: number
  description?: string
  image?: string
  holidayIds: string[]
}

export const services: Service[] = [
  // 元旦商品
  {
    id: "fireworks",
    name: "烟花",
    price: 88,
    description: "庆祝新年的绚烂烟花",
    holidayIds: ["new-year"],
  },
  {
    id: "calendar",
    name: "新年日历",
    price: 25,
    description: "精美的新年台历",
    holidayIds: ["new-year"],
  },

  // 情人节商品
  {
    id: "rose",
    name: "玫瑰花束",
    price: 99,
    description: "精美包装的红玫瑰花束",
    holidayIds: ["valentine"],
  },
  {
    id: "chocolate",
    name: "巧克力礼盒",
    price: 168,
    description: "进口巧克力精装礼盒",
    holidayIds: ["valentine"],
  },
  {
    id: "movie-ticket",
    name: "电影票",
    price: 45,
    description: "浪漫电影双人票",
    holidayIds: ["valentine"],
  },

  // 妇女节商品
  {
    id: "skincare-set",
    name: "护肤套装",
    price: 299,
    description: "女士专用护肤品套装",
    holidayIds: ["womens-day"],
  },
  {
    id: "perfume",
    name: "香水",
    price: 199,
    description: "优雅女士香水",
    holidayIds: ["womens-day"],
  },

  // 春节商品
  {
    id: "firecracker",
    name: "鞭炮",
    price: 25,
    description: "传统春节鞭炮",
    holidayIds: ["spring-festival"],
  },
  {
    id: "red-envelope",
    name: "红包",
    price: 15,
    description: "精美红包袋",
    holidayIds: ["spring-festival", "lantern-festival"],
  },
  {
    id: "spring-couplets",
    name: "春联",
    price: 30,
    description: "手写春联对联",
    holidayIds: ["spring-festival"],
  },

  // 元宵节商品
  {
    id: "lantern",
    name: "灯笼",
    price: 45,
    description: "传统红色灯笼",
    holidayIds: ["lantern-festival"],
  },
  {
    id: "tangyuan",
    name: "汤圆",
    price: 20,
    description: "手工制作汤圆",
    holidayIds: ["lantern-festival"],
  },

  // 清明节商品
  {
    id: "flowers-memorial",
    name: "祭祀花束",
    price: 35,
    description: "清明祭祀用花束",
    holidayIds: ["qingming"],
  },

  // 劳动节商品
  {
    id: "work-gloves",
    name: "劳保手套",
    price: 18,
    description: "优质劳保手套",
    holidayIds: ["labor-day"],
  },

  // 儿童节商品
  {
    id: "toy-car",
    name: "玩具汽车",
    price: 59,
    description: "儿童遥控玩具车",
    holidayIds: ["childrens-day"],
  },
  {
    id: "puzzle",
    name: "拼图玩具",
    price: 39,
    description: "益智拼图玩具",
    holidayIds: ["childrens-day"],
  },

  // 端午节商品
  {
    id: "zongzi",
    name: "粽子",
    price: 28,
    description: "传统手工粽子",
    holidayIds: ["dragon-boat"],
  },
  {
    id: "dragon-boat-model",
    name: "龙舟模型",
    price: 88,
    description: "精美龙舟工艺品",
    holidayIds: ["dragon-boat"],
  },

  // 中秋节商品
  {
    id: "mooncake",
    name: "月饼",
    price: 128,
    description: "传统中秋月饼礼盒",
    holidayIds: ["mid-autumn"],
  },
  {
    id: "tea-set",
    name: "茶具套装",
    price: 199,
    description: "中秋赏月茶具",
    holidayIds: ["mid-autumn"],
  },

  // 国庆节商品
  {
    id: "flag",
    name: "国旗",
    price: 15,
    description: "五星红旗",
    holidayIds: ["national-day"],
  },

  // 圣诞节商品
  {
    id: "christmas-tree",
    name: "圣诞树",
    price: 158,
    description: "装饰圣诞树",
    holidayIds: ["christmas"],
  },
  {
    id: "christmas-gift",
    name: "圣诞礼品",
    price: 99,
    description: "精美圣诞礼品盒",
    holidayIds: ["christmas"],
  },
  // 默认节假日商品（日常精选）
  {
    id: "daily-snacks",
    name: "精选零食大礼包",
    price: 58,
    description: "多种口味零食组合装",
    holidayIds: ["default"],
  },
  {
    id: "home-decor",
    name: "居家装饰品",
    price: 89,
    description: "温馨家居装饰小物件",
    holidayIds: ["default"],
  },
  {
    id: "daily-necessities",
    name: "生活必需套装",
    price: 128,
    description: "日常生活用品组合",
    holidayIds: ["default"],
  },
  {
    id: "book-set",
    name: "畅销书籍套装",
    price: 99,
    description: "精选畅销书籍组合",
    holidayIds: ["default"],
  },
  {
    id: "health-supplement",
    name: "健康营养品",
    price: 168,
    description: "日常保健营养补充品",
    holidayIds: ["default"],
  },
  {
    id: "digital-accessories",
    name: "数码配件",
    price: 79,
    description: "实用数码产品配件",
    holidayIds: ["default"],
  },
]
