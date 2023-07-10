import { NextResponse } from "next/server"
import books from "./data.json"

export async function GET(req){
    return NextResponse.json(books);
}