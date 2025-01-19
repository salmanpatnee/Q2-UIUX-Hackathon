import { client } from "@/sanity/lib/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get("query");

    const sanityQuery = `
    *[_type == "product" && title match "${query || ''}*"]{
      title,
      slug,
      price,
      salePrice,
      "imageUrl": image.asset->url
    }
  `;

    const products = await client.fetch(sanityQuery,
      {},
      { cache: "no-store" }
    );

    return NextResponse.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json(
      { error: "Error fetching products" },
      { status: 500 }
    );
  }
}
