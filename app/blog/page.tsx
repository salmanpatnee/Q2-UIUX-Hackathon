import {
  Calendar,
  Calendar1,
  ChevronRight,
  Tag,
  TagIcon,
  Trash,
  User,
} from "lucide-react";
import Link from "next/link";
import React from "react";

import Image from "next/image";
import Features from "../components/Features";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import BlogPost from "../components/BlogPost";
import Pagination from "../components/Pagination";

const BlogPage = () => {
  return (
    <div>
      <header className='text-center py-28 bg-[url("/images/banners/shop.png")] bg-cover bg-fixed bg-no-repeat bg-left'>
        <Image
          src="/images/furniro-icon.png"
          width={70}
          height={70}
          alt="Furniro"
          className="mx-auto"
        />
        <h1 className="font-medium text-5xl mb-4">Blog</h1>
        <nav className="flex justify-center">
          <ul className="flex items-center space-x-2 font-medium text-base">
            <li className="font-medium">
              <Link href="/">Home</Link>
            </li>
            <li>
              <ChevronRight />
            </li>
            <li className="font-light">Blog</li>
          </ul>
        </nav>
      </header>

      <section className="wrapper lg:pt-20  py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="col-span-1 lg:col-span-12 p-2">
            <BlogPost
              imageSrc="/images/blog/laptop.png"
              imageAlt="Laptop"
              author="Admin"
              date="14 Oct 2022"
              category="Wood"
              title="Going all-in with millennial design"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum."
              link="/blog"
            />
            <BlogPost
              imageSrc="/images/blog/decorating.png"
              imageAlt="Decorating"
              author="Admin"
              date="14 Oct 2022"
              category="Wood"
              title="Going all-in with millennial design"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum."
              link="/blog"
            />
          </div>
        </div>

        <Pagination />
      </section>

      <Features />
    </div>
  );
};

export default BlogPage;
