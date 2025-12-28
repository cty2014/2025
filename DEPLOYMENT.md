# 部署到 Vercel 指南

## 方法一：通过 Vercel Dashboard（推荐）

### 1. 准备工作
- 确保代码已推送到 GitHub、GitLab 或 Bitbucket
- 如果没有 Git 仓库，先初始化并推送：
  ```bash
  git init
  git add .
  git commit -m "Initial commit"
  git remote add origin <your-repo-url>
  git push -u origin main
  ```

### 2. 在 Vercel 部署
1. 访问 [vercel.com](https://vercel.com) 并登录（如果没有账号，使用 GitHub 账号注册）
2. 点击 "Add New Project"
3. 导入你的 Git 仓库
4. 配置项目：
   - **Framework Preset**: Next.js（会自动检测）
   - **Root Directory**: `./`（默认）
   - **Build Command**: `npm run build`（默认）
   - **Output Directory**: `.next`（默认）
   - **Install Command**: `npm install`（默认）
5. 点击 "Deploy"

### 3. 配置自定义域名 wisecom.biz

#### 3.1 在 Vercel 中添加域名
1. 部署完成后，进入项目设置
2. 点击 "Settings" → "Domains"
3. 添加域名：`wisecom.biz`
4. 添加域名：`www.wisecom.biz`（可选）

#### 3.2 配置 DNS 记录
在你的域名注册商（如 GoDaddy、Namecheap 等）配置以下 DNS 记录：

**选项 A：使用 CNAME（推荐）**
- **类型**: CNAME
- **名称**: @ 或 wisecom.biz
- **值**: `cname.vercel-dns.com`

**选项 B：使用 A 记录**
- **类型**: A
- **名称**: @ 或 wisecom.biz
- **值**: `76.76.21.21`

**对于 www 子域名（可选）**
- **类型**: CNAME
- **名称**: www
- **值**: `cname.vercel-dns.com`

#### 3.3 等待 DNS 生效
- DNS 更改通常需要几分钟到几小时生效
- Vercel 会自动检测并显示域名状态

## 方法二：通过 Vercel CLI

### 1. 安装 Vercel CLI
```bash
npm i -g vercel
```

### 2. 登录 Vercel
```bash
vercel login
```

### 3. 部署项目
```bash
# 在项目根目录执行
vercel

# 生产环境部署
vercel --prod
```

### 4. 配置域名
```bash
vercel domains add wisecom.biz
```

## 环境变量（如果需要）
如果项目需要环境变量，在 Vercel Dashboard 中：
1. 进入项目 Settings → Environment Variables
2. 添加所需的变量

## 自动部署
- 每次推送到主分支会自动触发部署
- 可以通过 Vercel Dashboard 查看部署历史和日志

## 注意事项
1. 确保 `package.json` 中有正确的 build 脚本
2. 确保所有依赖都在 `package.json` 中声明
3. 图片使用 Unsplash，已配置在 `next.config.ts` 中
4. 项目使用 Next.js 16，完全兼容 Vercel

## 验证部署
部署完成后，访问：
- Vercel 提供的默认域名：`your-project.vercel.app`
- 自定义域名：`https://wisecom.biz`

## 故障排除
- 如果构建失败，检查 Vercel 的构建日志
- 确保 Node.js 版本兼容（Vercel 默认使用 Node.js 18+）
- 检查 `next.config.ts` 配置是否正确

