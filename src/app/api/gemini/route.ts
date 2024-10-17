// pages/api/gemini.ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest, res: NextResponse) {
  if (req.method === 'POST') {
    const { message }: any = req.body;

    try {
      const response = await fetch('process.env.URL_GEMINI', {
        method: 'POST',
        headers: {
          'Authorization': ` ${process.env.NEXT_PUBLIC_GEMINI_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: message}),
      });

      const data = await response.json();
      console.log(data)
      return NextResponse.json({ response: data.choices[0].text });
    } catch (error) {
      return NextResponse.json({ error: 'Something went wrong' });
    }
  } else {
    const response = NextResponse.json({ message: 'GET method not allowed' }, { status: 405 });
    response.headers.set('Allow', 'POST');
    return response;
  }
}
