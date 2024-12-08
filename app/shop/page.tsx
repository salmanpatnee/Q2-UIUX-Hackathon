import { ChevronRight, Grip, Laptop, SlidersHorizontal } from "lucide-react";
import Link from "next/link";
import React from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ProductCard from "../components/ProductCard";
import Pagination from "../components/Pagination";
import Features from "../components/Features";

const ShopPage = () => {
  const products = [
    {
      imageUrl: "/images/products/Lolito.png",
      title: "Respira",
      slug: "respira",
      subTitle: "Stylish cafe chair",
      salePrice: "2.50",
      price: "3.50",
      discount: null,
      newArrival: true,
    },
    {
      imageUrl: "/images/products/Lev.png",
      title: "Leviosa",
      slug: "leviosa",
      subTitle: "Outdoor bar table and stool",
      salePrice: "7.00",
      price: "14.00",
      discount: "50",
      newArrival: false,
    },
    {
      imageUrl: "/images/products/bed.png",
      title: "Syltherine",
      slug: "syltherine",
      subTitle: "Stylish cafe chair",
      salePrice: "2.500",
      price: "3.500",
      discount: "30",
      newArrival: false,
    },
    {
      imageUrl: "/images/products/Syltherine.png",
      title: "Syltherine",
      slug: "syltherine",
      subTitle: "Stylish cafe chair",
      salePrice: "2.500",
      price: "3.500",
      discount: null,
      newArrival: true,
    },
    {
      imageUrl: "/images/products/Lolito.png",
      title: "Respira",
      slug: "respira",
      subTitle: "Stylish cafe chair",
      salePrice: "2.50",
      price: "3.50",
      discount: null,
      newArrival: true,
    },
    {
      imageUrl: "/images/products/Lev.png",
      title: "Leviosa",
      slug: "leviosa",
      subTitle: "Outdoor bar table and stool",
      salePrice: "7.00",
      price: "14.00",
      discount: "50",
      newArrival: false,
    },
    {
      imageUrl: "/images/products/bed.png",
      title: "Syltherine",
      slug: "syltherine",
      subTitle: "Stylish cafe chair",
      salePrice: "2.50",
      price: "3.50",
      discount: "30",
      newArrival: false,
    },
    {
      imageUrl: "/images/products/Syltherine.png",
      title: "Syltherine",
      slug: "syltherine",
      subTitle: "Stylish cafe chair",
      salePrice: "2.50",
      price: "3.50",
      discount: null,
      newArrival: true,
    },
  ];

  return (
    <div>
      <header className='text-center py-32 bg-[url("/images/banners/shop.png")] bg-cover bg-fixed bg-no-repeat bg-left'>
        <h1 className="font-medium text-5xl mb-4">Shop</h1>
        <nav className="flex justify-center">
          <ul className="flex items-center space-x-2 font-medium text-base">
            <li className="font-medium">
              <Link href="/">Home</Link>
            </li>
            <li>
              <ChevronRight />
            </li>
            <li className="font-light">Shop</li>
          </ul>
        </nav>
      </header>

      <section className="bg-secondary hidden lg:block">
        <div className="wrapper py-10 flex flex-col lg:flex-row items-center lg:space-y-0 space-y-5 lg:justify-between">
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

          {/* Options Section */}
          <div className="flex flex-col lg:flex-row lg:justify-end w-full lg:w-auto lg:space-x-7 space-y-5 lg:space-y-0">
            {/* Show Items Section */}
            <div className="flex items-center space-x-5">
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
            </div>

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
        </div>
      </section>

      {/* <section className="bg-secondary">
        <div className="wrapper py-10 flex lg:flex-row flex-col lg:space-y-0 space-y-5  items-center justify-between">
          <div className="flex">
            <div className="flex items-center space-x-2">
              <SlidersHorizontal size={19} />{" "}
              <span className="text-xl ">Filter</span>
            </div>
            <div className="flex items-center space-x-6 ms-5 pe-7 border-e-2 border-[#9F9F9F]">
              <Grip size={20} />
              <Laptop size={22} />
            </div>
            <div>
              <p className="text-base ms-8">Showing 1–16 of 32 results</p>
            </div>
          </div>
          <div className="flex flex-col lg:justify-end justify-start lg:space-x-7 lg:space-y-0 space-y-5">
            <div className="flex items-center space-x-5">
              <label className="text-xl">Show</label>
              <Select>
                <SelectTrigger className="lg:w-[55px] h-[55px] w-full bg-white rounded-none border-none text-[#9F9F9F] text-lg focus:ring-0">
                  <SelectValue placeholder="16" />
                </SelectTrigger>
                <SelectContent className="text-xl text-[#9F9F9F]">
                  <SelectItem value="light">16</SelectItem>
                  <SelectItem value="dark">25</SelectItem>
                  <SelectItem value="system">50</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex lg:flex-row flex-col items-center space-x-5">
              <label className="text-xl">Soty By</label>
              <Select>
              <SelectTrigger className="lg:w-[155px] h-[55px] w-full bg-white rounded-none border-none text-[#9F9F9F] text-lg focus:ring-0">
                  <SelectValue placeholder="Default" />
                </SelectTrigger>
                <SelectContent className="text-xl text-[#9F9F9F]">
                  <SelectItem value="light">Price</SelectItem>
                  <SelectItem value="dark">Rating</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section> */}
      <section className="wrapper">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-6 mt-8">
          {products.map((p) => {
            return <ProductCard key={p.imageUrl} product={p} />;
          })}
        </div>

        <Pagination />
      </section>

      <Features />
    </div>

    
  );
};

export default ShopPage;
