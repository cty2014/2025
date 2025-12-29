#!/bin/bash

# Vercel 部署脚本

echo "🚀 开始部署到 Vercel..."

# 检查是否已登录
if ! npx vercel@latest whoami &>/dev/null; then
    echo "📝 需要先登录 Vercel..."
    echo "请按照提示完成登录："
    npx vercel@latest login
fi

# 部署项目
echo "📦 开始部署..."
npx vercel@latest --yes --prod

echo "✅ 部署完成！"

