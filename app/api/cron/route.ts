import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  console.log("Hello Nitish!");

  return new NextResponse("Hello Nitish!");
};
