# 节假日服务销售清单系统

<div align="center">

![节假日服务销售清单](https://img.shields.io/badge/假日-出租本人-brightgreen)
![Next.js](https://img.shields.io/badge/Next.js-15-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3-38B2AC)

一个基于 Next.js 的趣味的节假日出租本人的站点。

[在线演示](https://chuzubenren.com) · [功能特性](#功能特性) · [快速开始](#快速开始) · [部署指南](#部署指南)

</div>

## 📋 目录

- [功能特性](#功能特性)
- [技术栈](#技术栈)
- [快速开始](#快速开始)
- [项目结构](#项目结构)
- [配置说明](#配置说明)
- [部署指南](#部署指南)
- [API 文档](#api-文档)
- [贡献指南](#贡献指南)
- [许可证](#许可证)

## ✨ 功能特性

### 🎯 核心功能
- **智能节假日识别** - 自动识别当前日期对应的节假日
- **三级优先级展示** - 当前节假日 → 临近节假日 → 没有假日（日常出租）
- **公农历支持** - 同时支持公历和农历节假日
- **提前展示机制** - 在临近节假日时提前展示相关服务
- **默认服务展示** - 确保任何时候都有出租服务

### 🎨 用户体验
- **响应式设计** - 完美适配桌面端、平板和移动设备
- **SSR 支持** - 服务端渲染，SEO 友好
- **实时更新** - 自动检测日期变化并更新内容

### 🛠 技术特性
- **TypeScript** - 完整的类型安全
- **模块化配置** - 节假日和服务信息完全可配置
- **缓存优化** - 智能缓存策略提升性能
- **测试页面** - 内置测试工具验证功能

## 🚀 技术栈

- **框架**: [Next.js 15](https://nextjs.org/) - React 全栈框架
- **语言**: [TypeScript](https://www.typescriptlang.org/) - 类型安全的 JavaScript
- **样式**: [Tailwind CSS](https://tailwindcss.com/) - 实用优先的 CSS 框架
- **组件**: [shadcn/ui](https://ui.shadcn.com/) - 现代化 UI 组件库
- **部署**: [Vercel](https://vercel.com/) - 现代化部署平台

## 🚀 快速开始

### 环境要求

- Node.js 18.0 或更高版本
- npm、yarn 或 pnpm 包管理器

### 安装步骤

1. **克隆项目**
   \`\`\`bash
   git clone https://github.com/xiongbao/chuzubenren.com.git
   cd chuzubenren.com
   \`\`\`

2. **安装依赖**
   \`\`\`bash
   npm install
   # 或
   yarn install
   # 或
   pnpm install
   \`\`\`

3. **启动开发服务器**
   \`\`\`bash
   npm run dev
   # 或
   yarn dev
   # 或
   pnpm dev
   \`\`\`

4. **访问应用**
   
   打开浏览器访问 [http://localhost:3000](http://localhost:3000)

### 测试功能

访问 [http://localhost:3000/test](http://localhost:3000/test) 来测试不同日期的节假日检测功能。

## 📁 项目结构

\`\`\`
holiday-product-system/
├── app/                          # Next.js App Router
│   ├── api/                      # API 路由
│   │   └── holiday/              # 节假日 API
│   ├── test/                     # 测试页面
│   ├── globals.css               # 全局样式
│   ├── layout.tsx                # 根布局
│   └── page.tsx                  # 主页面
├── components/                   # React 组件
│   ├── ui/                       # shadcn/ui 组件
│   ├── ClientHolidayUpdater.tsx  # 客户端更新器
│   ├── HolidayBanner.tsx         # 节假日横幅
│   ├── LoadingSpinner.tsx        # 加载组件
│   ├── ServiceItem.tsx           # 服务项
│   └── ServiceList.tsx           # 服务列表
├── config/                       # 配置文件
│   ├── holidays.config.ts        # 节假日配置
│   └── services.config.ts        # 出租服务配置
├── lib/                          # 工具库
│   └── holiday-service.ts        # 节假日服务
├── utils/                        # 工具函数
│   ├── date.ts                   # 日期工具
│   └── holiday.ts                # 节假日工具
├── public/                       # 静态资源
├── README.md                     # 项目文档
├── package.json                  # 项目配置
└── vercel.json                   # Vercel 部署配置
\`\`\`

## ⚙️ 配置说明

### 节假日配置

在 \`config/holidays.config.ts\` 中配置节假日信息：

\`\`\`typescript
interface Holiday {
  id: string                                // 节假日唯一标识
  name: string                              // 节假日名称
  dateType: "solar" | "lunar" | "default"   // 日期类型
  month: number                             // 月份
  day: number                               // 日期
  priority?: number                         // 优先级
  advanceDays?: number                      // 提前展示天数
}
\`\`\`

### 服务配置

在 \`config/products.config.ts\` 中配置服务信息：

\`\`\`typescript
interface Product {
  id: string              // 服务品唯一标识
  name: string            // 服务名称
  price: number           // 服务价格
  description?: string    // 服务描述
  image?: string          // 服务图片
  holidayIds: string[]    // 关联的节假日ID
}
\`\`\`

### 系统优先级

1. **当前节假日** - 正在进行的节假日服务
2. **临近节假日** - 即将到来的节假日服务（默认一周内）
3. **默认节假日** - 默认的日常出租服务

## 🌐 部署指南

### Vercel 一键部署

点击下面的按钮一键部署到 Vercel：

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/xiongbao/chuzubenren.com.git)

### 手动部署到 Vercel

1. **安装 Vercel CLI**
   \`\`\`bash
   npm i -g vercel
   \`\`\`

2. **登录 Vercel**
   \`\`\`bash
   vercel login
   \`\`\`

3. **部署项目**
   \`\`\`bash
   vercel
   \`\`\`

### 其他部署平台

#### Netlify
\`\`\`bash
npm run build
npm run export
\`\`\`

#### 自托管
\`\`\`bash
npm run build
npm start
\`\`\`

## 📚 API 文档

### GET /api/holiday

获取指定日期的节假日信息。

**参数:**
- \`date\` (可选): ISO 格式的日期字符串，默认为当前日期

**响应:**
\`\`\`json
{
  "holidays": [...],
  "products": [...],
  "status": "current" | "upcoming" | "default",
  "displayName": "节假日名称"
}
\`\`\`

**示例:**
\`\`\`bash
curl "https://your-domain.com/api/holiday?date=2024-02-14"
\`\`\`

## 🤝 贡献指南

我们欢迎所有形式的贡献！

### 贡献方式

1. **Fork 项目**
2. **创建功能分支** (\`git checkout -b feature/AmazingFeature\`)
3. **提交更改** (\`git commit -m 'Add some AmazingFeature'\`)
4. **推送到分支** (\`git push origin feature/AmazingFeature\`)
5. **创建 Pull Request**

### 开发规范

- 使用 TypeScript 进行开发
- 遵循 ESLint 和 Prettier 配置
- 为新功能添加测试
- 更新相关文档

### 问题反馈

如果您发现了 bug 或有功能建议，请在 [Issues](https://github.com/xiongbao/chuzubenren.com/issues) 页面提交。

## 📝 更新日志

### v1.0.0 (2025-07-18)
- ✨ 初始版本发布
- 🎯 支持节假日自动识别
- 📱 响应式设计
- 🚀 SSR 支持

## 🙏 致谢

- [Next.js](https://nextjs.org/) - 强大的 React 框架
- [Tailwind CSS](https://tailwindcss.com/) - 优秀的 CSS 框架
- [shadcn/ui](https://ui.shadcn.com/) - 精美的 UI 组件
- [Vercel](https://vercel.com/) - 优秀的部署平台

## 📄 许可证

本项目基于 [MIT License](LICENSE) 开源协议。

---

<div align="center">

**如果这个项目对您有帮助，请给它一个 ⭐️**

Made with ❤️ by [熊宝](https://x.prof)

</div>