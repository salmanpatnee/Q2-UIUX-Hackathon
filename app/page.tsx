import HomeSlider from "@/app/components/HomeSlider";
import { fetchProducts } from "@/utils/helpers";
import Link from "next/link";
import Hero from "./components/Hero";
import ProductList from "./components/ProductList";

const HomePage = async () => {
  const products = await fetchProducts();

  return (
    <div>
      <Hero />

      <section className="my-14 ">
        <div className="wrapper">
          {/* Section Title */}
          <header>
            <h2 className="title">Today's Menu</h2>
          </header>

          {/* Product Grid */}
          <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-6 mt-8">
            <ProductList products={products} />
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

export default HomePage;
