import { Product } from "@/sanity.types";
import { Plus, Star } from "lucide-react";
import { PortableText } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { urlFor } from "@/sanity/lib/image";
import AddToCart from "../products/[slug]/__components/AddToCart";

interface Props {
  product: Product;
}

const ProductDetails = ({ product }: Props) => {
  const productImageUrl = product.image
    ? urlFor(product.image)?.width(285).height(301).url()
    : "https://placehold.co/550x310/png";

  return (
    <>
      <section className="flex lg:flex-row flex-col wrapper">
        <div className="lg:w-6/12 w-full lg:pe-10 mb-10 lg:mb-0">
          <div className="flex gap-8">
            <Image
              src={productImageUrl}
              alt={product.title || ""}
              width={400}
              height={400}
              className="rounded-t-md w-full"
            />
          </div>
        </div>
        <div className="lg:w-6/12 w-full">
          <h2 className="text-[42px] text-black mb-1">{product.title}</h2>
          <p className="text-2xl mb-4 font-medium text-[#9F9F9F]">
            {product.salePrice ? (
              <>
                <del className="line-through text-red-500 mr-2">
                  PKR {product.price}
                </del>
                <span className="text-gray-500 font-bold">
                  PKR {product.salePrice}
                </span>
              </>
            ) : (
              `PKR ${product.price}`
            )}
          </p>

          <div className="flex items-center gap-3 mb-4">
            <div className="gap-1 flex border-e-2 pe-5">
              <Star
                size={20}
                strokeWidth={0}
                className="fill-yellow-500 border-yellow-500"
              />
              <Star
                size={20}
                strokeWidth={0}
                className="fill-yellow-500 border-yellow-500"
              />
              <Star
                size={20}
                strokeWidth={0}
                className="fill-yellow-500 border-yellow-500"
              />
              <Star
                size={20}
                strokeWidth={0}
                className="fill-yellow-500 border-yellow-500"
              />
              <Star
                size={20}
                strokeWidth={0}
                className="fill-gray-300 border-gray-300"
              />
            </div>
            <p className="text-[#9F9F9F] text-xs">
              {product.reviewsCount
                ? `${product.reviewsCount} Customer Reviews`
                : "No reviews"}
            </p>
          </div>

          {product.description && product.description.length > 0 && (
            <div className="prose max-w-none mb-5">
              <PortableText value={product.description} />
            </div>
          )}

          {/* <p className="text-xs mb-5">
            <PortableText value={product.details}/>
            
          </p> */}
          {/* <div className="flex-col gap-6 items-center mb-6">
            <span className="text-sm text-[#9F9F9F] block mb-2">Size:</span>
            <div className="flex items-center gap-4">
              <button className="transition-all rounded bg-primary text-white border-0  hover:bg-primary hover:text-white w-8 h-8 text-sm">
                XS
              </button>
              <button className="transition-all rounded bg-[#F9F1E7] border-0  hover:bg-primary hover:text-white w-8 h-8 text-sm">
                S
              </button>
              <button className="transition-all rounded bg-[#F9F1E7] border-0  hover:bg-primary hover:text-white w-8 h-8 text-sm">
                M
              </button>
              <button className="transition-all rounded bg-[#F9F1E7] border-0  hover:bg-primary hover:text-white w-8 h-8 text-sm">
                X
              </button>
              <button className="transition-all rounded bg-[#F9F1E7] border-0  hover:bg-primary hover:text-white w-8 h-8 text-sm">
                XL
              </button>
            </div>
          </div>
          <div className="flex-col gap-6 items-center mb-6">
            <span className="text-sm text-[#9F9F9F] block mb-2">Colors:</span>
            <div className="flex items-center gap-2">
              <button className="transition-all rounded-full bg-[#A0BCE0] border-2 border-[#A0BCE0] hover:border-[#000000] w-8 h-8"></button>
              <button className="transition-all opacity-90 hover:opacity-1 rounded-full bg-primary border-2 border-primary hover:border-[#000000] w-8 h-8"></button>
            </div>
          </div> */}

          <div className="flex flex-col md:flex-row gap-2 border-b pb-14 mb-10">
            {/* <Quantity/> */}
            <AddToCart product={product}/>
            <button className="bg-white text-black border border-black rounded-lg text-center h-16 px-12 text-base hover:bg-primary hover:text-white hover:border-primary flex items-center justify-center space-x-2">
              <Plus />
              <span>Compare</span>
            </button>
          </div>
          <div className="pb-10">
            <ul className="space-y-3">
              {" "}
              {/* Adds vertical space */}
              <li className="text-base text-[#9F9F9F] flex">
                <span className="font-medium min-w-[100px]">
                  Units in Stock
                </span>
                <span className="mx-2">:</span>
                <span className="font-medium">{product.stock}</span>
              </li>
              <li className="text-base text-[#9F9F9F] flex">
                <span className="font-medium min-w-[100px]">Category</span>
                <span className="mx-2">:</span>
                <span className="font-medium">
                  <Link href="/shop?category=food" className="hover:underline">
                    Food
                  </Link>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className=" py-12 mb-10">
        <div className="wrapper">
          <Tabs
            defaultValue="account"
            className="lg:w-[1000px] w-full mx-auto "
          >
            <TabsList className="flex flex-col md:flex-row justify-center bg-white space-x-12  lg:mb-9 mb-20 text-center">
              <TabsTrigger
                className="text-2xl font-normal text-[#9F9F9F] "
                value="account"
              >
                Description
              </TabsTrigger>
              <TabsTrigger
                className="text-2xl font-normal text-[#9F9F9F] "
                value="password"
              >
                Additional Information
              </TabsTrigger>
              <TabsTrigger
                className="text-2xl font-normal text-[#9F9F9F] "
                value="reviews"
              >
                Reviews [{product.reviewsCount}]
              </TabsTrigger>
            </TabsList>
            <TabsContent value="account">
              {product.description && product.description.length > 0 && (
                <div className="prose max-w-none mb-5 text-xl">
                  <PortableText value={product.description} />
                </div>
              )}
            </TabsContent>
            <TabsContent value="password">
              <div className="text-xl">
                <p className="mb-8">Additional Information goes here.</p>
              </div>
            </TabsContent>
            <TabsContent value="reviews">
              <div className="text-xl">
                <p className="mb-8">Reviews goes here.</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
