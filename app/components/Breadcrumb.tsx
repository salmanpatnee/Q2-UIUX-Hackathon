import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

interface Props {
  currentPage: String;
}

const Breadcrumb = ({ currentPage }: Props) => {
  return (
    <section className="bg-bglight mb-9">
      <div className="wrapper py-10 flex items-center justify-between">
        <div className="flex">
          <div className="flex items-center space-x-2">
            <ul className="flex space-x-5 text-base text-[#9F9F9F]">
              <li>
                <Link href="/" className="hover:text-black transition-all">
                  Home
                </Link>
              </li>
              <li>
                <ChevronRight />
              </li>
              <li>
                <Link href="/shop" className="hover:text-black transition-all">
                  Shop
                </Link>
              </li>
            </ul>
          </div>
          <div className="ms-7 border-s-2 border-[#9F9F9F]">
            <p className="text-base ms-8">{currentPage}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Breadcrumb;
