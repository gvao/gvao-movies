import { TMDB } from "@/domain/entities/tmdb";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const tmdb = new TMDB

    const { searchParams } = new URL(request.url)
    const query = searchParams.get('query')
    if(!query) return NextResponse.json({ message: `query is required` }, { status: 404 })
    
    const result = await tmdb.search(query)
    return NextResponse.json(result)
}