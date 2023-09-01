import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const mailer = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "contact@metalgroundai.com",
    pass: "ajmdohrkdnytkgql",
  },
});

export const GET = async (req: Request) => {
  try {
    const data = await mailer.sendMail({
      from: '"VIVASYNTH" <contact@metalgroundai.com>',
      to: "nitiahmahawar007@gmail.com",
      subject: "Vercel Cron Job Demo",
      text: "Example of vercel cron job.",
      html: `<h1>Vercel Cron 1 Min</h1>`,
    });
    return new NextResponse(JSON.stringify(data));
  } catch (error: any) {
    return new NextResponse(error.message, { status: 501 });
  }
};
