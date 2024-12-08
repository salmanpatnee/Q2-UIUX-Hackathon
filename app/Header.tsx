import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";
import { Heart, Search, ShoppingCart, UserRound } from "lucide-react";
import MobileNavbar from "./components/MobileNavbar";
const Header = () => {
  return (
    <header className="border border-b py-8">
      <div className="wrapper flex items-center justify-between ">
       
        <div className="col logo w-full text-center md:w-auto">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="logo"
              width="185"
              height="41"
              className=""
            />
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
            <Link href="/cart" className="group">
              <ShoppingCart
                size={32}
                className="stroke-current text-black  transition-colors group-hover:stroke-primary"
              />
            </Link>
          </div>
        </div>
        
      </div>
    </header>
  );
};

export default Header;
