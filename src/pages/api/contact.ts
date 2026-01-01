import type { APIRoute } from 'astro';
import { Resend } from 'resend';

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
  try {
    const { name, email, company, message } = await request.json();

    // 驗證必填欄位
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: '請填寫所有必填欄位' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // 檢查是否有 Resend API Key
    if (!import.meta.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY 未設定');
      return new Response(
        JSON.stringify({ error: '郵件服務未正確配置，請聯繫網站管理員。' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // 發送郵件
    const { data, error } = await resend.emails.send({
      from: import.meta.env.RESEND_FROM_EMAIL || 'WiseCom Website <onboarding@resend.dev>',
      to: 'info@wisecom.biz',
      replyTo: email,
      subject: `來自網站聯絡表單的訊息${company ? ` - ${company}` : ''}`,
      html: `
        <h2>新的聯絡表單訊息</h2>
        <p><strong>姓名：</strong> ${name}</p>
        <p><strong>電子郵件：</strong> ${email}</p>
        ${company ? `<p><strong>公司：</strong> ${company}</p>` : ''}
        <p><strong>訊息內容：</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p style="color: #666; font-size: 12px;">此郵件來自網站聯絡表單</p>
      `,
      text: `
新的聯絡表單訊息

姓名：${name}
電子郵件：${email}
${company ? `公司：${company}\n` : ''}
訊息內容：
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


