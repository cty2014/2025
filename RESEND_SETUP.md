# Resend 郵件服務設定指南

## 為什麼使用 Resend？

Resend 是一個專為開發者設計的郵件服務，具有以下優點：
- ✅ 設定簡單，只需要一個 API Key
- ✅ 免費額度：每月 3,000 封郵件
- ✅ 高送達率
- ✅ 無需配置複雜的 SMTP 設定

## 設定步驟

### 1. 註冊 Resend 帳號

1. 訪問 https://resend.com
2. 點擊 "Sign Up" 註冊帳號（可以使用 GitHub 帳號快速註冊）
3. 完成註冊後登入

### 2. 獲取 API Key

1. 登入後，進入 Dashboard
2. 點擊左側選單的 "API Keys"
3. 點擊 "Create API Key"
4. 輸入名稱（例如：WiseCom Website）
5. 選擇權限（選擇 "Sending access"）
6. 點擊 "Add" 創建
7. **重要**：複製 API Key（只會顯示一次，請妥善保存）

### 3. 驗證域名（重要！）

為了發送郵件到 `info@wisecom.biz`，您需要驗證 `wisecom.biz` 域名：

1. 在 Resend Dashboard 中，點擊 "Domains"
2. 點擊 "Add Domain"
3. 輸入 `wisecom.biz`
4. Resend 會顯示需要添加的 DNS 記錄
5. 在您的域名註冊商（DNS 管理後台）添加這些 DNS 記錄：
   - **SPF 記錄**：`v=spf1 include:resend.com ~all`
   - **DKIM 記錄**：Resend 會提供具體的記錄值
   - **DMARC 記錄**（可選）：`v=DMARC1; p=none;`
6. 等待 DNS 生效（通常 5-30 分鐘）
7. 在 Resend Dashboard 中點擊 "Verify" 驗證域名

### 4. 設定環境變數

#### 本地開發環境

在專案根目錄創建 `.env.local` 文件：

```bash
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxx
RESEND_FROM_EMAIL=WiseCom Website <noreply@wisecom.biz>
```

**注意**：`.env.local` 文件已經在 `.gitignore` 中，不會被提交到 Git。

#### Vercel 生產環境

1. 登入 Vercel Dashboard：https://vercel.com/dashboard
2. 選擇您的專案
3. 進入 **Settings** → **Environment Variables**
4. 添加以下環境變數：
   - **Name**: `RESEND_API_KEY`
   - **Value**: 您的 Resend API Key
   - **Environment**: Production, Preview, Development（全部勾選）
5. 添加：
   - **Name**: `RESEND_FROM_EMAIL`
   - **Value**: `WiseCom Website <noreply@wisecom.biz>`
   - **Environment**: Production, Preview, Development（全部勾選）
6. 點擊 "Save"
7. **重要**：重新部署專案以使環境變數生效

### 5. 測試郵件發送

1. 訪問網站的聯絡表單頁面
2. 填寫表單並提交
3. 檢查 `info@wisecom.biz` 是否收到郵件
4. 如果沒有收到，檢查：
   - Resend Dashboard → Logs 查看發送記錄
   - Vercel Dashboard → Functions 查看 API 日誌
   - 確認環境變數已正確設定

## 故障排除

### 問題：郵件發送失敗

**解決方案**：
1. 檢查 Resend API Key 是否正確設定
2. 確認域名已驗證（在 Resend Dashboard 中查看）
3. 檢查 DNS 記錄是否正確添加
4. 查看 Resend Dashboard 的 Logs 了解錯誤原因

### 問題：收到 "郵件服務未正確配置" 錯誤

**解決方案**：
1. 確認 `.env.local` 文件存在且包含 `RESEND_API_KEY`
2. 在 Vercel 中確認環境變數已設定
3. 重新啟動開發伺服器（如果本地開發）
4. 重新部署專案（如果生產環境）

### 問題：郵件進入垃圾郵件

**解決方案**：
1. 確保域名已完全驗證（SPF、DKIM、DMARC）
2. 使用專業的發送地址（如 `noreply@wisecom.biz`）
3. 確保郵件內容符合最佳實踐

## 免費額度

Resend 免費方案提供：
- 每月 3,000 封郵件
- 每天 100 封郵件
- 足夠小型網站使用

如果超過免費額度，可以升級到付費方案。

## 其他郵件服務選項

如果您不想使用 Resend，也可以使用其他服務：

1. **SendGrid**：https://sendgrid.com
2. **Mailgun**：https://www.mailgun.com
3. **AWS SES**：https://aws.amazon.com/ses/
4. **Gmail SMTP**：需要應用程式密碼

如需使用其他服務，請修改 `app/api/contact/route.ts` 中的郵件發送邏輯。


