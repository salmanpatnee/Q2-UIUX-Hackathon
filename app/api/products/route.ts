import { client } from "@/sanity/lib/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const products = await client.fetch(
      '*[_type == "product"]{title,slug,price,salePrice,"imageUrl": image.asset->url}',
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
