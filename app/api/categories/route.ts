import { client } from "@/sanity/lib/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    try {
        const categories = await client.fetch(
            '*[_type == "category"]{title,slug}',
            {},
            { cache: "no-store" }
        );

        return NextResponse.json(categories);
    } catch (error) {
        console.error("Error fetching categories:", error);
        return NextResponse.json(
            { error: "Error fetching categories" },
            { status: 500 }
        );
    }
}
