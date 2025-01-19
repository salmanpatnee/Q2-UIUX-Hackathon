import ProductCard from "@/app/components/ProductCard";
import { Product } from "@/sanity.types";

interface Props {
  products: Product[];
}

const ProductList = ({ products }: Props) => {
  return (
    <>
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </>
  );
};

export default ProductList;
