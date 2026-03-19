import { NextResponse } from 'next/server';
import accommodations from '@/app/data/accommodations.json';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get('type');

  if (type) {
    const filtered = accommodations.filter(item => item.accommodation === type);
    return NextResponse.json(filtered);
  }

  return NextResponse.json(accommodations);
}