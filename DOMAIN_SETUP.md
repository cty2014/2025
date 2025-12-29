# 配置 wisebiz.com 域名到 Vercel

## 步骤 1：在 Vercel Dashboard 中添加域名

1. **访问 Vercel Dashboard**
   - 打开 https://vercel.com/dashboard
   - 登录你的账号

2. **选择项目**
   - 找到项目：`2025` 或 `venture-captials-projects`
   - 点击进入项目

3. **添加域名**
   - 点击顶部菜单的 **Settings**
   - 在左侧菜单选择 **Domains**
   - 在 "Add Domain" 输入框中输入：`wisebiz.com`
   - 点击 **Add**

4. **获取 DNS 配置信息**
   - Vercel 会显示需要配置的 DNS 记录
   - 通常显示类似：
     - **类型**: CNAME
     - **名称**: @
     - **值**: `cname.vercel-dns.com`
   
   或者：
     - **类型**: A
     - **名称**: @
     - **值**: `76.76.21.21` (Vercel 的 IP 地址)

## 步骤 2：在域名注册商配置 DNS

前往你的域名注册商（如 GoDaddy、Namecheap、Cloudflare 等）的 DNS 管理页面：

### 选项 A：使用 CNAME（推荐）

添加以下记录：
- **类型**: CNAME
- **名称**: @ 或 `wisebiz.com`（取决于你的 DNS 提供商）
- **值**: `cname.vercel-dns.com`
- **TTL**: 3600（或默认值）

### 选项 B：使用 A 记录

如果 CNAME 不支持根域名，使用 A 记录：
- **类型**: A
- **名称**: @
- **值**: `76.76.21.21`
- **TTL**: 3600（或默认值）

### 可选：添加 www 子域名

如果你想支持 `www.wisebiz.com`：
- **类型**: CNAME
- **名称**: www
- **值**: `cname.vercel-dns.com`
- **TTL**: 3600（或默认值）

## 步骤 3：等待 DNS 传播

- DNS 更改通常需要 **5-30 分钟** 才能生效
- 最长可能需要 **24-48 小时**（但通常更快）

## 步骤 4：验证配置

1. **在 Vercel Dashboard 检查**
   - 返回 Vercel → Settings → Domains
   - 查看 `wisebiz.com` 的状态
   - 显示 "Valid Configuration" 表示配置成功

2. **测试访问**
   - 访问 https://wisebiz.com
   - 应该能看到你的网站

## 故障排除

### DNS 未生效
- 使用 https://dnschecker.org 检查 DNS 传播状态
- 清除浏览器缓存
- 尝试使用不同的网络（如手机热点）

### SSL 证书问题
- Vercel 会自动为自定义域名配置 SSL 证书
- 如果显示 "Invalid Configuration"，检查 DNS 记录是否正确

### 域名验证失败
- 确保 DNS 记录已正确添加
- 等待 DNS 传播完成
- 在 Vercel Dashboard 中点击 "Refresh" 重新验证

## 使用 CLI 添加域名（需要先登录）

如果你已经通过 CLI 登录：

```bash
cd /Users/cty/website
npx vercel@latest domains add wisebiz.com
```

然后按照提示配置 DNS 记录。

