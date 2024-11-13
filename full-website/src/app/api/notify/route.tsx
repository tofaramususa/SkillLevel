// app/api/send/route.ts

import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { EmailTemplate } from './email-template';

const resend = new Resend(process.env.RESEND_API_KEY);

// Define the POST handler function
export async function POST(req: Request) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json({ error: 'Resend API key is not configured' }, { status: 500 });
  }

  try {
    const { email, success } = await req.json();

    if (!email || success === undefined) {
      return NextResponse.json({ error: 'Missing email or success parameter in the request body' }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: 'Skill Level <skilllevel@tofaramususa.me>',
      to: 'tofaramususa07@gmail.com',
      subject: success ? 'User Registration Successful' : 'User Registration Failed',
      react: EmailTemplate({ email, success }),
    });

    if (error) {
      return NextResponse.json(error, { status: 400 });
    }

    return NextResponse.json(data, { status: 200 });
  } catch (err) {
    console.error('Error sending email:', err);
    return NextResponse.json({ error: 'An unexpected error occurred while sending the email' }, { status: 500 });
  }
}
