import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';

export async function POST(req: NextRequest) {
  const data = await req.json();
  const logEntry = `${new Date().toISOString()} - ${JSON.stringify(data)}\n`;
  fs.appendFileSync('tracking.log', logEntry, 'utf-8');
  return NextResponse.json({ status: 'Tracked Successfully' });
}