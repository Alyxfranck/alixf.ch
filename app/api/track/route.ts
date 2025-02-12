// /pages/api/track.js
import { NextApiRequest, NextApiResponse } from 'next';
import fetch from 'node-fetch';

interface Data {
  // Define the structure of the data object here
}

interface ErrorResponse {
  message: string;
  error?: string;
}

interface SuccessResponse {
  status: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<SuccessResponse | ErrorResponse>): Promise<void> {
  if (req.method === 'POST') {
    try {
      const data: Data = req.body;
      
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
      res.status(500).json({ message: 'Error processing data', error: (error as Error).message });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
