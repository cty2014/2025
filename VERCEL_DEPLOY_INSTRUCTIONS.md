# 部署到 Vercel - 完整指南

## 方法一：自動部署（推薦）

如果您的 Vercel 專案已經連接到 GitHub 倉庫 `cty2014/2025`，推送後會自動觸發部署。

### 檢查自動部署狀態

1. 訪問 Vercel Dashboard：https://vercel.com/dashboard
2. 找到您的專案
3. 查看 **Deployments** 標籤
4. 應該會看到最新的部署（來自 GitHub push）

### 如果沒有自動部署

1. 在 Vercel Dashboard 中，進入專案 **Settings** → **Git**
2. 確認已連接到正確的 GitHub 倉庫
3. 如果沒有連接，點擊 **"Connect Git Repository"** 並選擇 `cty2014/2025`

## 方法二：使用 Vercel CLI 手動部署

### 步驟 1：登入 Vercel

在終端機中執行：

```bash
cd /Users/cty/website＿wiseventure
npx vercel@latest login
```

這會打開瀏覽器，請完成登入流程。

### 步驟 2：部署到生產環境

```bash
npx vercel@latest --prod --yes
```

## 重要：設定環境變數

**部署前必須設定環境變數，否則郵件功能無法正常工作！**

### 在 Vercel Dashboard 中設定：

1. 訪問 Vercel Dashboard：https://vercel.com/dashboard
2. 選擇您的專案
3. 進入 **Settings** → **Environment Variables**
4. 添加以下環境變數：

   **變數 1：**
   - **Name**: `RESEND_API_KEY`
   - **Value**: `re_NALS6VxF_5sHmSFK4zSnCDZVJmvTxPQqb`
   - **Environment**: 勾選 Production, Preview, Development（全部）

   **變數 2：**
   - **Name**: `RESEND_FROM_EMAIL`
   - **Value**: `WiseCom Website <noreply@wisecom.biz>`
   - **Environment**: 勾選 Production, Preview, Development（全部）

5. 點擊 **"Save"**

### 設定後重新部署

環境變數設定後，需要重新部署才能生效：

1. 在 Vercel Dashboard 中，進入 **Deployments** 標籤
2. 找到最新的部署
3. 點擊右側的 **"..."** 選單
4. 選擇 **"Redeploy"**
5. 確認重新部署

或者使用 CLI：

```bash
npx vercel@latest --prod --yes
```

## 驗證部署

部署完成後：

1. 訪問您的網站（Vercel 提供的 URL 或 `wisecom.biz`）
2. 進入聯絡表單頁面
3. 提交測試訊息
4. 檢查 `info@wisecom.biz` 是否收到郵件

## 檢查部署日誌

如果遇到問題，可以查看部署日誌：

1. 在 Vercel Dashboard → Deployments
2. 點擊最新的部署
3. 查看 **Build Logs** 和 **Function Logs**

## 故障排除

### 問題：郵件發送失敗

**檢查清單：**
- [ ] 環境變數是否已正確設定？
- [ ] 是否已重新部署？
- [ ] Resend API Key 是否正確？
- [ ] `wisecom.biz` 域名是否已在 Resend 中驗證？

### 問題：環境變數未生效

**解決方案：**
1. 確認環境變數已保存
2. 重新部署專案
3. 檢查 Function Logs 確認環境變數是否被讀取

### 問題：部署失敗

**解決方案：**
1. 查看 Build Logs 了解錯誤原因
2. 確認 `package.json` 中的依賴正確
3. 確認 Node.js 版本兼容（Vercel 預設使用 Node.js 18+）


