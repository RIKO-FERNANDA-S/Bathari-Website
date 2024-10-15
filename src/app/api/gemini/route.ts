// pages/api/gemini.ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { message } = req.body;

    // Panggil API Gemini menggunakan fetch
    try {
      const response = await fetch('https://api.gemini.ai/your-endpoint', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.GEMINI_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: message }),
      });

      const data = await response.json();
      console.log(data)
      res.status(200).json({ response: data.choices[0].text });
    } catch (error) {
      res.status(500).json({ error: 'Something went wrong' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
