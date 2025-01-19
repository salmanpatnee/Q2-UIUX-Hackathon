import { Category, Product } from "@/sanity.types";

export const fetchCategories = async (): Promise<Category[]> => {
  const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
  const response = await fetch(`${baseURL}/api/categories`, {
    cache: "no-store",
  });
  const categories: Category[] = await response.json();
  return categories;
};

export const fetchProducts = async (): Promise<Product[]> => {
  const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
  const response = await fetch(`${baseURL}/api/products`, {
    cache: "no-store",
  });
  const products: Product[] = await response.json();
  return products;
};

export const fetchProduct = async (slug: string): Promise<Product> => {

  try {
    const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
    const response = await fetch(`${baseURL}/api/products/${slug}`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch products: ${response.statusText}`);
    }

    const product: Product = await response.json();
    return product;
  } catch (error) {
    console.error("Error in fetchProduct:", error);
    throw new Error("An error occurred while fetching the product data.");
  }
};
