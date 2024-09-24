// pages/api/hello.ts

import { NextResponse } from 'next/server';

// type Data = {
//   message: string;
// };

// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   res.status(200).json({ message: 'Hello, Next.js API with TypeScript!' });
// }

export async function GET() {
    return NextResponse.json( {status: 200, message:"api aman"})
}