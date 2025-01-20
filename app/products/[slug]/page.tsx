import Breadcrumb from "@/app/components/Breadcrumb";
import ProductDetails from "@/app/components/ProductDetails";
import { fetchProduct } from "@/utils/helpers";

interface Props {
  params: { slug: string };
}


export async function generateMetadata({ params }: Props) {
  const product = await fetchProduct(params.slug);

  if (!product) {
    return {
      title: "Product Not Found - My Store",
      description: "The product you are looking for does not exist.",
    };
  }

  return {
    title: `${product.title} - NextCart`,
    description: "Buy the best products at NextCart!", 
  };
}

const ProductDetailPage = async ({ params }: Props) => {
  const product = await fetchProduct(params.slug);

  return (
    <article className={`product-${product.slug?.current}`}>
      <Breadcrumb currentPage={product.title!} />
      <ProductDetails product={product} />
    </article>
  );
};

export default ProductDetailPage;
