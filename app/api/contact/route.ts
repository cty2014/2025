import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const { name, email, company, message } = await request.json();

    // 驗證必填欄位
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "請填寫所有必填欄位" },
        { status: 400 }
      );
    }

    // 創建郵件傳輸器
    let transporter;
    
    // 如果沒有配置 SMTP，使用測試模式（僅用於開發）
    if (!process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
      // 使用測試帳號（僅用於開發測試）
      const testAccount = await nodemailer.createTestAccount();
      transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
          user: testAccount.user,
          pass: testAccount.pass,
        },
      });
    } else {
      // 使用環境變數配置 SMTP
      transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || "smtp.gmail.com",
        port: parseInt(process.env.SMTP_PORT || "587"),
        secure: false, // true for 465, false for other ports
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASSWORD,
        },
      });
    }

    // 郵件內容
    const mailOptions = {
      from: process.env.SMTP_FROM || `"${name}" <${email}>`,
      to: "info@wisecom.biz",
      replyTo: email,
      subject: `來自網站聯絡表單的訊息${company ? ` - ${company}` : ""}`,
      html: `
        <h2>新的聯絡表單訊息</h2>
        <p><strong>姓名：</strong> ${name}</p>
        <p><strong>電子郵件：</strong> ${email}</p>
        ${company ? `<p><strong>公司：</strong> ${company}</p>` : ""}
        <p><strong>訊息內容：</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
        <hr>
        <p style="color: #666; font-size: 12px;">此郵件來自網站聯絡表單</p>
      `,
      text: `
新的聯絡表單訊息

姓名：${name}
電子郵件：${email}
${company ? `公司：${company}\n` : ""}
訊息內容：
${message}
      `,
    };

    // 發送郵件
    const info = await transporter.sendMail(mailOptions);

    // 如果是測試模式，輸出測試郵件 URL
    if (!process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
      console.log("測試郵件已發送:", nodemailer.getTestMessageUrl(info));
    }

    return NextResponse.json(
      { message: "訊息已成功發送！我們會盡快與您聯繫。" },
      { status: 200 }
    );
  } catch (error) {
    console.error("發送郵件時發生錯誤:", error);
    return NextResponse.json(
      { error: "發送訊息時發生錯誤，請稍後再試。" },
      { status: 500 }
    );
  }
}

