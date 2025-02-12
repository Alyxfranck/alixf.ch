// /pages/api/track.js
import { NextApiRequest, NextApiResponse } from 'next';
import fetch from 'node-fetch';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const data = await req.json();

      // Forward the data to the external application's API endpoint
      const externalResponse = await fetch('https://data-bucket.vercel.app/api/process', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!externalResponse.ok) {
        throw new Error(`Failed to forward data: ${externalResponse.statusText}`);
      }

      res.status(200).json({ status: 'Tracked and forwarded successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error processing data', error: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
