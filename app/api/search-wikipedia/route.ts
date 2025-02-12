import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("query");

  if (!query) {
    return NextResponse.json({ error: "Query parameter is required" }, { status: 400 });
  }

  try {
    const response = await fetch(
      `https://en.wikipedia.org/w/api.php?origin=*&action=query&list=search&format=json&srsearch=${query}`
    );
    const data = await response.json();
    return NextResponse.json({ results: data.query?.search || [] });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch Wikipedia search results" }, { status: 500 });
  }
}
