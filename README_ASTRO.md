# WiseVenture - Astro 專案

基於 Astro 框架的公司官網，使用 Tailwind CSS 進行樣式設計，並針對 SEO 進行優化。

## 🚀 快速開始

### 安裝依賴

```bash
npm install
```

### 開發模式

```bash
npm run dev
```

訪問 http://localhost:4321

### 構建生產版本

```bash
npm run build
```

### 預覽生產構建

```bash
npm run preview
```

## 📁 專案結構

```
/
├── public/          # 靜態資源
├── src/
│   ├── components/  # Astro/React 組件
│   ├── layouts/     # 佈局組件
│   └── pages/       # 頁面路由
│       ├── api/     # API routes
│       └── *.astro  # 頁面文件
├── astro.config.mjs # Astro 配置
└── package.json
```

## ✨ 功能特性

- ✅ SEO 優化（Meta tags, Open Graph, Twitter Cards）
- ✅ 響應式設計
- ✅ Tailwind CSS 樣式
- ✅ 聯絡表單（Resend 郵件服務）
- ✅ 背景動畫效果
- ✅ 專案展示頁面

## 🔧 環境變數

創建 `.env` 文件：

```env
RESEND_API_KEY=your_resend_api_key
RESEND_FROM_EMAIL=WiseCom Website <noreply@wisecom.biz>
```

## 📝 待完成頁面遷移

以下頁面需要從 Next.js 遷移到 Astro：

1. **About 頁面** (`src/pages/about.astro`)
   - 從 `app/about/page.tsx` 遷移

2. **Projects 頁面** (`src/pages/projects.astro`)
   - 從 `app/projects/page.tsx` 遷移
   - 需要遷移 ProjectsBackgroundAnimation 組件

3. **Contact 頁面** (`src/pages/contact.astro`)
   - 從 `app/contact/page.tsx` 遷移
   - 使用 React 組件處理表單狀態

4. **Build With Us 頁面** (`src/pages/build-with-us.astro`)
   - 從 `app/build-with-us/page.tsx` 遷移

## 🎨 樣式

使用 Tailwind CSS，配置文件位於 `tailwind.config.mjs`

## 📦 部署

### Vercel

專案已配置為 Astro，可以直接部署到 Vercel：

```bash
vercel --prod
```

### 環境變數

在 Vercel Dashboard 中設定：
- `RESEND_API_KEY`
- `RESEND_FROM_EMAIL`

## 🔍 SEO

已實現的 SEO 功能：
- Meta tags（title, description）
- Open Graph tags
- Twitter Card tags
- Canonical URLs
- Robots.txt
- 結構化數據（可選）

## 📚 文檔

- [Astro 文檔](https://docs.astro.build)
- [Tailwind CSS 文檔](https://tailwindcss.com/docs)


