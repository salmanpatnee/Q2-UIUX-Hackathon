import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const ProductDetailLoadingPage = () => {
  return (
    <>
      <section className="bg-bglight mb-2">
        <div className="wrapper py-10 ">
          <Skeleton className="w-full h-8" />
        </div>
      </section>
      <section className="flex lg:flex-row flex-col wrapper">
        <div className="lg:w-6/12 w-full lg:pe-10 mb-10 lg:mb-0">
          <div className="flex gap-8">
            <Skeleton className="w-[600px] h-[400px]" />
          </div>
        </div>
        <div className="lg:w-6/12 w-full">
          <h2 className="text-[42px] text-black mb-3">
            <Skeleton className="w-[300px] py-6" />
          </h2>
          <p className="text-2xl mb-0 font-medium text-[#9F9F9F]">
            <del className="line-through text-red-500 mr-2">
              <Skeleton className="w-[150px] py-3" />
            </del>
          </p>
          <div className="flex items-center gap-3 mb-4">
            <div className="gap-1 flex  pe-5">
              <Skeleton className="w-[200px] py-3" />
            </div>
            <Skeleton className="w-[200px] py-3" />
          </div>
          <div className="prose max-w-none mb-5">
            <Skeleton className="w-[600px] h-[150px]" />
          </div>

          <div className="flex items-center gap-3 mb-4">
            <div className="gap-1 flex  pe-5">
              <Skeleton className="w-[200px] h-[50px] " />
            </div>
            <Skeleton className="w-[200px] h-[50px] " />
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetailLoadingPage;
