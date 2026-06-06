import type { APIRoute } from 'astro';
import { Resend } from 'resend';

const resend = new Resend(import.meta.env.RESEND_API_KEY);

// 將使用者輸入跳脫，避免被當成 HTML 解析（防止信件內注入連結/圖片/腳本）
const esc = (s: unknown = ''): string =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

// 基本 email 格式驗證
const isValidEmail = (email: string): boolean =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const {
      name = '',
      email = '',
      company = '',
      message = '',
      // honeypot：正常使用者看不到也不會填，機器人通常會自動填
      website = '',
    } = body ?? {};

    // 1) Honeypot 命中 → 假裝成功，不讓機器人知道被擋
    if (typeof website === 'string' && website.trim() !== '') {
      return new Response(
        JSON.stringify({ message: '訊息已成功發送！我們會盡快與您聯繫。' }),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // 2) 必填欄位
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: '請填寫所有必填欄位' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // 3) email 格式
    if (typeof email !== 'string' || !isValidEmail(email)) {
      return new Response(
        JSON.stringify({ error: '請輸入有效的電子郵件地址' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // 4) 長度限制，避免被灌爆
    if (
      String(name).length > 100 ||
      String(company).length > 200 ||
      String(message).length > 5000
    ) {
      return new Response(
        JSON.stringify({ error: '輸入內容過長，請縮短後再試。' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // 5) 確認 Resend API Key
    if (!import.meta.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY 未設定');
      return new Response(
        JSON.stringify({ error: '郵件服務未正確配置，請聯繫網站管理員。' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // 發送郵件（HTML 內所有使用者輸入皆已跳脫）
    const { data, error } = await resend.emails.send({
      from:
        import.meta.env.RESEND_FROM_EMAIL ||
        'WiseCom Website <onboarding@resend.dev>',
      to: 'info@wisecom.biz',
      replyTo: email,
      subject: `來自網站聯絡表單的訊息${company ? ` - ${esc(company)}` : ''}`,
      html: `
        <h2>新的聯絡表單訊息</h2>
        <p><strong>姓名：</strong> ${esc(name)}</p>
        <p><strong>電子郵件：</strong> ${esc(email)}</p>
        ${company ? `<p><strong>公司：</strong> ${esc(company)}</p>` : ''}
        <p><strong>訊息內容：</strong></p>
        <p>${esc(message).replace(/\n/g, '<br>')}</p>
        <hr>
        <p style="color: #666; font-size: 12px;">此郵件來自網站聯絡表單</p>
      `,
      text: `
新的聯絡表單訊息

姓名：${name}
電子郵件：${email}
${company ? `公司：${company}\n` : ''}訊息內容：
${message}
      `,
    });

    if (error) {
      console.error('Resend 錯誤:', error);
      return new Response(
        JSON.stringify({ error: '發送訊息時發生錯誤，請稍後再試。' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    console.log('郵件已成功發送:', data);

    return new Response(
      JSON.stringify({ message: '訊息已成功發送！我們會盡快與您聯繫。' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('發送郵件時發生錯誤:', error);
    return new Response(
      JSON.stringify({ error: '發送訊息時發生錯誤，請稍後再試。' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
