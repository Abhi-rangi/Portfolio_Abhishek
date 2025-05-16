import { NextResponse } from 'next/server';
import { sendMail } from '@/lib/mailer';

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    const emailText = `
Name: ${name}
Email: ${email}

Message:
${message}

---
Sent from your portfolio website contact form`;

    const emailHtml = `
<h2>New Contact Form Submission</h2>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<h3>Message:</h3>
<p>${message.replace(/\n/g, '<br>')}</p>
<hr>
<p><em>Sent from your portfolio website contact form</em></p>`;

    await sendMail({
      to: process.env.SMTP_FROM!,
      subject: `New Portfolio Contact: ${name}`,
      text: emailText,
      html: emailHtml,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
} 