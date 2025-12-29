# Vercel 部署指南

## 快速部署步骤

### 方法一：通过 Vercel Dashboard（推荐，最简单）

1. **访问 Vercel**
   - 打开 https://vercel.com
   - 使用 GitHub 账号登录

2. **导入项目**
   - 点击 "Add New Project"
   - 选择 GitHub 账号
   - 找到并选择仓库：`cty2014/2025`
   - 点击 "Import"

3. **配置项目**
   - Framework Preset: Next.js（自动检测）
   - Root Directory: `./`（默认）
   - Build Command: `npm run build`（默认）
   - Output Directory: `.next`（默认）
   - Install Command: `npm install`（默认）

4. **部署**
   - 点击 "Deploy"
   - 等待构建完成（约 1-2 分钟）

5. **配置域名 wisecom.biz**
   - 部署完成后，进入项目 Settings → Domains
   - 添加域名：`wisecom.biz`
   - 按照提示配置 DNS 记录

### 方法二：使用 Vercel CLI

1. **登录 Vercel**
   ```bash
   cd /Users/cty/website
   npx vercel@latest login
   ```
   - 会打开浏览器进行认证
   - 完成后返回终端

2. **部署到生产环境**
   ```bash
   npx vercel@latest --prod
   ```

3. **配置域名**
   ```bash
   npx vercel@latest domains add wisecom.biz
   ```

## DNS 配置（配置 wisecom.biz 域名）

在您的域名注册商处添加以下 DNS 记录：

**选项 A：使用 CNAME（推荐）**
- **类型**: CNAME
- **名称**: @ 或 wisecom.biz
- **值**: `cname.vercel-dns.com`

**选项 B：使用 A 记录**
- **类型**: A
- **名称**: @
- **值**: `76.76.21.21`

**对于 www 子域名（可选）**
- **类型**: CNAME
- **名称**: www
- **值**: `cname.vercel-dns.com`

## 自动部署

- 每次推送到 GitHub main 分支会自动触发部署
- 可以通过 Vercel Dashboard 查看部署历史和日志

## 验证部署

部署完成后访问：
- Vercel 默认域名：`your-project.vercel.app`
- 自定义域名：`https://wisecom.biz`（DNS 配置后）

## 故障排除

- 如果构建失败，检查 Vercel 的构建日志
- 确保 Node.js 版本兼容（Vercel 默认使用 Node.js 18+）
- 检查 `next.config.ts` 和 `package.json` 配置

