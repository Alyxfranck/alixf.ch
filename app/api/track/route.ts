import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    // Forward data to an external application for processing
    const externalResponse = await fetch("https://data-bucket.vercel.app/api/process", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!externalResponse.ok) {
      throw new Error(`Failed to forward data: ${externalResponse.statusText}`);
    }

    return NextResponse.json({ status: "Tracked and forwarded successfully" });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
