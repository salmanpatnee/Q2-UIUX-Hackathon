import { Product } from "@/sanity.types";

export const fetchProducts = async (): Promise<Product[]> => {
  const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
  const response = await fetch(`${baseURL}/api/products`, {
    cache: "no-store",
  });
  const products: Product[] = await response.json();
  return products;
};
