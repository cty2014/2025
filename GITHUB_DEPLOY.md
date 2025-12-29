# GitHub 部署指南

## 当前状态

代码已经提交到本地仓库，但推送到 GitHub 需要身份验证。

## 推送步骤

### 方法一：使用 GitHub Personal Access Token（推荐）

1. **创建 Personal Access Token**
   - 访问 https://github.com/settings/tokens
   - 点击 "Generate new token" → "Generate new token (classic)"
   - 设置权限：至少勾选 `repo`
   - 生成并复制 token

2. **推送代码**
   ```bash
   cd /Users/cty/website
   git remote set-url github https://YOUR_TOKEN@github.com/cty2014/2025.git
   git push github main
   ```
   
   或者使用用户名和 token：
   ```bash
   git push https://YOUR_TOKEN@github.com/cty2014/2025.git main
   ```

### 方法二：使用 GitHub CLI

1. **安装 GitHub CLI**（如果未安装）
   ```bash
   brew install gh
   ```

2. **登录 GitHub**
   ```bash
   gh auth login
   ```

3. **推送代码**
   ```bash
   cd /Users/cty/website
   git push github main
   ```

### 方法三：使用 SSH Key

1. **检查是否有 SSH key**
   ```bash
   ls -la ~/.ssh/id_rsa.pub
   ```

2. **如果没有，生成 SSH key**
   ```bash
   ssh-keygen -t ed25519 -C "your_email@example.com"
   ```

3. **添加 SSH key 到 GitHub**
   - 复制公钥：`cat ~/.ssh/id_ed25519.pub`
   - 访问 https://github.com/settings/keys
   - 点击 "New SSH key"，粘贴公钥

4. **测试连接**
   ```bash
   ssh -T git@github.com
   ```

5. **推送代码**
   ```bash
   cd /Users/cty/website
   git remote set-url github git@github.com:cty2014/2025.git
   git push github main
   ```

## 当前远程仓库配置

- **GitHub**: `github` → `https://github.com/cty2014/2025.git`
- **GitLab**: `origin` → `https://gitlab.com/info3551-group/info3551-project.git`

## 验证部署

推送成功后，访问：
- GitHub 仓库：https://github.com/cty2014/2025

## 后续部署到 Vercel

代码推送到 GitHub 后，可以：
1. 访问 https://vercel.com
2. 导入 GitHub 仓库 `cty2014/2025`
3. 自动部署到 Vercel

