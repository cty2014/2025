# Astro 遷移指南

## 已完成

✅ Astro 專案基礎結構
✅ BaseLayout 與 SEO 優化
✅ Navigation 組件
✅ Footer 組件
✅ Logo 組件
✅ 首頁 (index.astro)
✅ BackgroundAnimation 組件
✅ robots.txt
✅ package.json 更新

## 待完成

- [ ] 遷移 about 頁面
- [ ] 遷移 projects 頁面
- [ ] 遷移 contact 頁面
- [ ] 遷移 build-with-us 頁面
- [ ] 遷移 API routes (聯絡表單)
- [ ] 遷移 ProjectsBackgroundAnimation 組件
- [ ] 創建 sitemap
- [ ] 測試所有功能

## 安裝依賴

```bash
npm install
```

## 開發

```bash
npm run dev
```

## 構建

```bash
npm run build
```

## SEO 優化

已實現的 SEO 功能：
- Meta tags (title, description)
- Open Graph tags
- Twitter Card tags
- Canonical URLs
- Robots.txt
- 結構化數據（可選添加）

## 注意事項

1. Astro 使用 `.astro` 文件格式
2. React 組件需要通過 `@astrojs/react` 集成使用
3. API routes 使用 `APIRoute` 類型
4. 客戶端腳本使用 `<script>` 標籤（非 `is:inline`）


