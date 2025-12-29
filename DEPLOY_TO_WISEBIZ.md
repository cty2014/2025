# 部署到 wisebiz.com - 快速指南

## ✅ 当前状态
- ✅ TypeScript 错误已修复
- ✅ 代码已推送到 GitHub (`cty2014/2025`)
- ✅ 项目已配置 Vercel

## 🚀 部署步骤

### 步骤 1：确保代码已部署到 Vercel

如果代码已经推送到 GitHub 并且 Vercel 已连接仓库，部署会自动触发。

**检查部署状态：**
1. 访问 https://vercel.com/dashboard
2. 查看项目的最新部署
3. 确保部署成功（显示绿色 ✓）

**如果未自动部署，手动触发：**
- 在 Vercel Dashboard 中点击 "Redeploy"

### 步骤 2：添加 wisebiz.com 域名

1. **在 Vercel Dashboard：**
   - 进入项目 → **Settings** → **Domains**
   - 点击 "Add Domain"
   - 输入：`wisebiz.com`
   - 点击 "Add"

2. **Vercel 会显示需要配置的 DNS 记录：**
   - 通常显示类似：
     ```
     类型: CNAME
     名称: @
     值: cname.vercel-dns.com
     ```
   或
     ```
     类型: A
     名称: @
     值: 76.76.21.21
     ```

### 步骤 3：在域名注册商配置 DNS

前往你的域名注册商（GoDaddy、Namecheap、Cloudflare 等）的 DNS 管理页面：

**添加 DNS 记录：**

**选项 A：CNAME（推荐）**
```
类型: CNAME
名称: @
值: cname.vercel-dns.com
TTL: 3600
```

**选项 B：A 记录（如果 CNAME 不支持根域名）**
```
类型: A
名称: @
值: 76.76.21.21
TTL: 3600
```

**可选：添加 www 子域名**
```
类型: CNAME
名称: www
值: cname.vercel-dns.com
TTL: 3600
```

### 步骤 4：等待 DNS 生效

- ⏱️ 通常需要 **5-30 分钟**
- 🔍 使用 https://dnschecker.org 检查 DNS 传播状态
- ✅ 在 Vercel Dashboard 中查看域名状态，显示 "Valid Configuration" 即成功

### 步骤 5：验证部署

访问以下网址测试：
- ✅ https://wisebiz.com
- ✅ https://www.wisebiz.com（如果配置了 www）

## 🔧 使用 CLI 部署（可选）

如果你已通过 CLI 登录：

```bash
# 部署到生产环境
cd /Users/cty/website
npx vercel@latest --prod --yes

# 添加域名
npx vercel@latest domains add wisebiz.com
```

## 📋 检查清单

- [ ] 代码已推送到 GitHub
- [ ] Vercel 部署成功
- [ ] 在 Vercel 中添加了 wisebiz.com 域名
- [ ] 在域名注册商配置了 DNS 记录
- [ ] DNS 已生效（Vercel 显示 "Valid Configuration"）
- [ ] 可以访问 https://wisebiz.com

## 🆘 故障排除

**DNS 未生效：**
- 等待更长时间（最长 48 小时）
- 检查 DNS 记录是否正确
- 清除 DNS 缓存：`sudo dscacheutil -flushcache` (macOS)

**SSL 证书问题：**
- Vercel 会自动配置 SSL，等待几分钟
- 确保 DNS 配置正确

**域名验证失败：**
- 在 Vercel Dashboard 中点击 "Refresh"
- 确认 DNS 记录已正确添加

## 📞 需要帮助？

如果遇到问题，检查：
1. Vercel Dashboard 的部署日志
2. DNS 配置是否正确
3. 域名是否已正确添加到 Vercel 项目

