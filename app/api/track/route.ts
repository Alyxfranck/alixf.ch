import { NextRequest, NextResponse } from 'next/server';
import { Pool } from 'pg';

// Initialize the connection pool only once.
// (In practice, you might wrap this in a check so you don't re-init on every hot reload.)
const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // from your .env
  // If you want to enable SSL for Neon, you can do:
  // ssl: { rejectUnauthorized: false }
});

export async function POST(req: NextRequest) {
  try {
    // Parse the JSON body coming from the client
    const data = await req.json();

    // Insert the data into the `tracking` table
    const text = `
      INSERT INTO tracking (data)
      VALUES ($1)
      RETURNING id, timestamp
    `;

    const values = [data];
    const result = await pool.query(text, values);

    // Return a JSON response indicating success
    return NextResponse.json({
      status: 'Tracked Successfully',
      insertedId: result.rows[0].id,
      timestamp: result.rows[0].timestamp
    });
  } catch (error: any) {
    console.error('Error inserting track data:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
