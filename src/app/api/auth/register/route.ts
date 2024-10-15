// pages/api/hello.ts
import { NextRequest, NextResponse } from 'next/server';
import app from '@/lib/firebase/init';
import { getDatabase, ref, set } from 'firebase/database';
import { register } from '@/lib/firebase/service';


const db = getDatabase(app)

export async function POST(request: NextRequest) {
  const req = await request.json();
  const res = await register(req);
  return NextResponse.json({status: res.status, message: res.message}, {status:res.statusCode});
  
}
