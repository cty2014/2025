# 驗證 wisecom.biz 域名 - 詳細步驟

## 步驟 1：在 Resend 中添加域名

1. 登入 Resend Dashboard：https://resend.com/domains
2. 點擊 **"Add Domain"** 按鈕
3. 輸入域名：`wisecom.biz`
4. 點擊 **"Add"**

## 步驟 2：獲取 DNS 記錄

添加域名後，Resend 會顯示需要添加的 DNS 記錄。通常包括：

### 1. SPF 記錄（TXT）
- **類型**：TXT
- **名稱**：`@` 或 `wisecom.biz`
- **值**：`v=spf1 include:resend.com ~all`
- **TTL**：3600（或使用預設值）

### 2. DKIM 記錄（TXT）
- **類型**：TXT
- **名稱**：`resend._domainkey` 或類似格式（Resend 會提供確切名稱）
- **值**：Resend 會提供一個長字串（類似：`p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC...`）
- **TTL**：3600

### 3. DMARC 記錄（TXT，可選但建議）
- **類型**：TXT
- **名稱**：`_dmarc`
- **值**：`v=DMARC1; p=none; rua=mailto:dmarc@wisecom.biz`
- **TTL**：3600

## 步驟 3：在域名註冊商添加 DNS 記錄

前往您的域名註冊商（如 GoDaddy、Namecheap、Cloudflare 等）的 DNS 管理頁面：

### 範例：GoDaddy
1. 登入 GoDaddy
2. 進入 **My Products** → **DNS**
3. 找到 `wisecom.biz` 域名
4. 點擊 **"Manage DNS"**
5. 添加上述 DNS 記錄

### 範例：Cloudflare
1. 登入 Cloudflare
2. 選擇 `wisecom.biz` 域名
3. 進入 **DNS** → **Records**
4. 點擊 **"Add record"** 添加記錄

### 範例：Namecheap
1. 登入 Namecheap
2. 進入 **Domain List** → 點擊 `wisecom.biz` 的 **"Manage"**
3. 進入 **Advanced DNS** 標籤
4. 添加上述 DNS 記錄

## 步驟 4：等待 DNS 傳播

- DNS 更改通常需要 **5-30 分鐘** 才能生效
- 有時可能需要 **24-48 小時**（較少見）
- 可以使用以下工具檢查 DNS 傳播狀態：
  - https://dnschecker.org
  - https://mxtoolbox.com

## 步驟 5：在 Resend 中驗證域名

1. 返回 Resend Dashboard → Domains
2. 找到 `wisecom.biz` 域名
3. 點擊 **"Verify"** 按鈕
4. Resend 會檢查 DNS 記錄
5. 如果所有記錄正確，狀態會變為 **"Verified"**（綠色勾號）

## 步驟 6：設定發送地址

域名驗證完成後，您可以使用以下格式發送郵件：
- `noreply@wisecom.biz`
- `info@wisecom.biz`
- `contact@wisecom.biz`
- 或任何 `@wisecom.biz` 的地址

## 故障排除

### 問題：DNS 記錄添加後仍無法驗證

**解決方案**：
1. 確認 DNS 記錄類型正確（TXT）
2. 確認記錄名稱完全匹配（包括 `_domainkey` 等前綴）
3. 確認記錄值完全複製（不要有多餘空格）
4. 等待更長時間（最多 48 小時）
5. 使用 DNS 檢查工具確認記錄已傳播

### 問題：SPF 記錄衝突

如果已經有 SPF 記錄，需要合併：
- **現有記錄**：`v=spf1 include:_spf.google.com ~all`
- **合併後**：`v=spf1 include:_spf.google.com include:resend.com ~all`

### 問題：驗證失敗

**檢查清單**：
- [ ] DNS 記錄類型是否為 TXT？
- [ ] 記錄名稱是否完全正確？
- [ ] 記錄值是否完全複製（無多餘空格）？
- [ ] 是否等待足夠時間（至少 30 分鐘）？
- [ ] 使用 DNS 檢查工具確認記錄已存在？

## 驗證完成後

域名驗證完成後，請記得：

1. **更新 Vercel 環境變數**：
   - 在 Vercel Dashboard → Settings → Environment Variables
   - 添加 `RESEND_API_KEY=re_NALS6VxF_5sHmSFK4zSnCDZVJmvTxPQqb`
   - 添加 `RESEND_FROM_EMAIL=WiseCom Website <noreply@wisecom.biz>`
   - 重新部署專案

2. **測試郵件發送**：
   - 訪問網站聯絡表單
   - 提交測試訊息
   - 檢查 `info@wisecom.biz` 是否收到郵件

## 快速檢查命令

在終端機中執行以下命令檢查 DNS 記錄：

```bash
# 檢查 SPF 記錄
dig TXT wisecom.biz +short

# 檢查 DKIM 記錄（替換為 Resend 提供的實際名稱）
dig TXT resend._domainkey.wisecom.biz +short

# 檢查 DMARC 記錄
dig TXT _dmarc.wisecom.biz +short
```

