import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";
import { Heart, Search, ShoppingCart, UserRound } from "lucide-react";
import MobileNavbar from "./components/MobileNavbar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const Header = () => {
  return (
    <header className="border border-b py-8">
      <div className="wrapper flex items-center justify-between ">
        <div className="col logo w-full text-center md:w-auto">
          <Link href="/" className="flex items-center gap-1">
            <Image src="/images/logo-icon.png"alt="Furniro" width={50} height={32}/ >
            <h1 className="font-bold text-[34px]">Furniro</h1>
          </Link>
        </div>

        {/* Menu Section */}
        <div className="col menu hidden lg:block">
          <Navbar />
        </div>
        <div className="lg:hidden w-2/12 text-end">
          <MobileNavbar />
        </div>

        <div className="col action hidden lg:block">
          <div className="flex space-x-11 items-center justify-end">
            <Link href="/" className="group">
              <UserRound
                size={32}
                className="stroke-current text-black  transition-colors group-hover:stroke-primary"
              />
            </Link>
            <Link href="/" className="group">
              <Search
                size={32}
                className="stroke-current text-black  transition-colors group-hover:stroke-primary"
              />
            </Link>
            <Link href="/" className="group">
              <Heart
                size={32}
                className="stroke-current text-black  transition-colors group-hover:stroke-primary"
              />
            </Link>
            <Popover>
              <PopoverTrigger className="group">
                <ShoppingCart
                  size={32}
                  className="stroke-current text-black  transition-colors group-hover:stroke-primary"
                />
              </PopoverTrigger>
              <PopoverContent className="rounded-none white w-96 py-7 px-8">
                <h4 className="font-semibold text-xl border-b border-[#D9D9D9] pb-7 mb-10">Shopping Cart</h4>
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <Image src="/images/cart-item-1.png" alt="sofa" width={111} height={90} className="rounded-lg bg-[#efe6d1]"/>
                  </div>
                  <div>
                    <p className="text-base mb-2">Asgaard sofa</p>
                    <p className="flex space-x-4 items-center">
                      <span className="font-light text-base">1</span>
                      <span className="font-light text-base">X</span>
                      <span className="font-medium text-primary text-xs">Rs. 250,000.00 </span>
                    </p>
                  </div>
                  <div>
                    <Image src="/images/icons/close.png" width={20} height={20} alt="close" className="cursor-pointer"/>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Image src="/images/cart-item-1.png" alt="sofa" width={111} height={90} className="rounded-lg bg-[#efe6d1]"/>
                  </div>
                  <div>
                    <p className="text-base mb-2">Asgaard sofa</p>
                    <p className="flex space-x-4 items-center">
                      <span className="font-light text-base">1</span>
                      <span className="font-light text-base">X</span>
                      <span className="font-medium text-primary text-xs">Rs. 250,000.00 </span>
                    </p>
                  </div>
                  <div>
                    <Image src="/images/icons/close.png" width={20} height={20} alt="close" className="cursor-pointer"/>
                  </div>
                </div>
                <div  className="mt-20 flex text-base  justify-between border-b border-[#D9D9D9] pb-6">
                  <p>Subtotal</p>
                  <p className="text-primary font-medium">Rs. 520,000.00</p>
                </div>
                <div className="flex items-center justify-between pt-7 space-x-2">
                <Link href="/cart" className="border rounded-2xl text-xs py-2 px-6 hover:bg-primary hover:text-white transition-colors">Cart</Link>
                <Link href="/checkout" className="border rounded-2xl text-xs py-2 px-6 hover:bg-primary hover:text-white transition-colors">Checkout</Link>
                <Link href="/cart" className="border rounded-2xl text-xs py-2 px-6 hover:bg-primary hover:text-white transition-colors">Comparision</Link>
                </div>
              </PopoverContent>
            </Popover>

            {/* <Link href="/cart" className="group">
              <ShoppingCart
                size={32}
                className="stroke-current text-black  transition-colors group-hover:stroke-primary"
              />
            </Link> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
