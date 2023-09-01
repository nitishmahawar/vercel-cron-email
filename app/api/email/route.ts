import { mailer } from "@/lib/nodemailer";
import { NextResponse } from "next/server";

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
