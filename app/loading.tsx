import HomeSlider from "@/app/components/HomeSlider";
import { Skeleton } from "@/components/ui/skeleton";
import { fetchProducts } from "@/utils/helpers";
import Link from "next/link";
import ProductCard from "./components/ProductCard";

const LoadingPage = async () => {
  const products = [1, 2, 3, 4];

  return (
    <div>
      <div className="p-5">
        <Skeleton className="w-full h-96" />
      </div>

      <section className="my-14 ">
        <div className="wrapper">
          {/* Section Title */}
          <header>
            <h2 className="title">Our Products</h2>
          </header>

          {/* Skeleton Loader for Products */}
          <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-6 mt-8">
            {products.map((_, index) => (
              <div key={index} className="animate-pulse">
                <Skeleton className="w-full h-64 mb-4" />
                <Skeleton className="w-3/4 h-6 mb-2" />
                <Skeleton className="w-1/2 h-4" />
              </div>
            ))}
          </div>

          {/* Show More Button */}
          <div className="text-center mt-12">
            <Link
              href="/shop"
              className="bg-white border border-primary text-primary text-center py-3 px-20 text-base font-semibold hover:bg-black hover:text-white hover-border-black"
            >
              Show More
            </Link>
          </div>
        </div>
      </section>

      <HomeSlider />
    </div>
  );
};

export default LoadingPage;
