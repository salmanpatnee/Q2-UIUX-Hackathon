import { Grip, Laptop, SlidersHorizontal } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { fetchCategories, fetchProducts } from "@/utils/helpers";
import CategoryList from "../components/CategoryList";
import PageHeader from "../components/PageHeader";
import Pagination from "../components/Pagination";
import ProductList from "../components/ProductList";

const ShopPage = async ({searchParams}: {searchParams: {category: string, page: string}}) => {
  
  const page = parseInt(searchParams.page) || 1;
  const pageSize = 2;

  const categories = await fetchCategories();
  const products = await fetchProducts();


  return (
    <div>
      <PageHeader title="Shop" />

      <section className="bg-secondary hidden lg:block">
        <div className="wrapper py-10 flex flex-col lg:flex-row items-center lg:space-y-0 space-y-5 lg:justify-between">
          {/* Options Section */}
          <div className="flex flex-col lg:flex-row lg:justify-end w-full lg:w-auto lg:space-x-7 space-y-5 lg:space-y-0">
            {/* Show Items Section */}
            {/* <div className="flex items-center space-x-5">
              <label className="text-lg lg:text-xl">Show</label>
              <Select>
                <SelectTrigger className="w-full lg:w-[55px] h-[45px] lg:h-[55px] bg-white rounded-none border-none text-[#9F9F9F] text-lg focus:ring-0">
                  <SelectValue placeholder="16" />
                </SelectTrigger>
                <SelectContent className="text-lg lg:text-xl text-[#9F9F9F]">
                  <SelectItem value="16">16</SelectItem>
                  <SelectItem value="25">25</SelectItem>
                  <SelectItem value="50">50</SelectItem>
                </SelectContent>
              </Select>
            </div> */}

            {/* Sort By Section */}
            <div className="flex items-center lg:flex-row flex-col lg:space-x-5 space-y-5 lg:space-y-0">
              <label className="text-lg lg:text-xl">Sort By</label>
              <Select>
                <SelectTrigger className="w-full lg:w-[155px] h-[45px] lg:h-[55px] bg-white rounded-none border-none text-[#9F9F9F] text-lg focus:ring-0">
                  <SelectValue placeholder="Default" />
                </SelectTrigger>
                <SelectContent className="text-lg lg:text-xl text-[#9F9F9F]">
                  <SelectItem value="price">Price</SelectItem>
                  <SelectItem value="rating">Rating</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          {/* Filter Section */}
          <div className="flex flex-wrap lg:flex-nowrap items-center w-full lg:w-auto justify-between space-y-5 lg:space-y-0 lg:space-x-8">
            <div className="flex items-center space-x-2">
              <SlidersHorizontal size={19} />
              <span className="text-lg lg:text-xl">Filter</span>
            </div>
            <div className="flex items-center space-x-4 border-e-2 border-[#9F9F9F] pe-7">
              <Grip size={20} />
              <Laptop size={22} />
            </div>
            <div>
              <p className="text-sm lg:text-base">Showing 1–16 of 32 results</p>
            </div>
          </div>
        </div>
      </section>

      <section className="wrapper py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-2">
          <div className="lg:col-span-3 p-2">
            <aside>
              {/* <form action="">
                <div className="relative">
                  <SearchIcon className="absolute right-3 top-3" />
                  <input
                    type="text"
                    className="border border-[#9F9F9F] rounded-lg py-3 w-full px-3"
                    autoComplete="off"
                  />
                </div>
              </form> */}
              <CategoryList
                categories={categories}
                title="Categories"
                
              />
            </aside>
          </div>
          <div className="col-span-1 lg:col-span-9 p-2">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-6">
              <ProductList products={products} />
            </div>
          </div>
        </div>

        <Pagination itemCount={100} pageSize={10} currentPage={1} />
      </section>
    </div>
  );
};

export default ShopPage;
