import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="pt-12 border-t">
      <div className="wrapper flex flex-wrap justify-between space-y-5 text-black pb-14">
        <div className="w-full sm:w-4/12 lg:w-auto md:mb-0 mb-4">
          <Link href="/" className="mb-12 block">
            <span className="font-bold text-2xl">Funiro.</span>
          </Link>
          
          <div className="relative md:me-5">
            <p className="text-[#9F9F9F] text-base leading-6">400 University Drive Suite 200 Coral<br></br> Gables,<br></br>
            FL 33134 USA</p>
          </div>
        </div>
        <div className="w-full sm:w-4/12 lg:w-auto md:mb-0 mb-4">
          <h4 className="text-base font-medium mb-12 text-[#9F9F9F]">Links</h4>
          <ul className="space-y-12 text-base text-black font-medium">
            <li>
              <Link href="/" className="hover:text-primary">
                Home
              </Link>
            </li>
            <li>
              <Link href="/shop" className="hover:text-primary">
                Shop
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-primary">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-primary">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full sm:w-4/12 lg:w-auto md:mb-0 mb-4">
        <h4 className="text-base font-medium mb-12 text-[#9F9F9F] mt-4 sm:mt-0">Help</h4>
          <ul className="space-y-12 text-base text-black font-medium">
            <li>
              <Link href="/" className="hover:text-primary">
                Payment Options
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-primary">
                Returns
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-primary">
                Privacy Policies
              </Link>
            </li>
            
          </ul>
        </div>
        <div className="w-full md:w-1/2 lg:w-auto">
        <h4 className="text-base font-medium mb-12 text-[#9F9F9F] mt-4 sm:mt-0">Newsletter</h4>
          <div className="flex space-x-3">
            <input type="email" placeholder="Enter Your Email Address" className="border-b text-sm pe-4 active:outline-none focus:outline-none" />
            <button className="font-medium text-[14px] border-b">SUBSCRIBE</button>
          </div>
        </div>
      </div>
      <div className="text-center sm:text-start border-t wrapper py-9">
        <p className="text-black  text-base">
        2023 furino. All rights reverved
        </p>
      </div>
    </footer>
    
  );
};

export default Footer;