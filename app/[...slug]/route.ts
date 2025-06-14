"use server";
import fs from "node:fs/promises";

import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const path = (await params).slug.join("/");

  return await fs.readdir(path).then((data) => {
    console.log(data);
    return Response.json(data);
  });
}
