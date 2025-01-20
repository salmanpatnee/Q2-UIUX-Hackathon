import {
  ChevronRight,
  SearchIcon
} from "lucide-react";
import Link from "next/link";

import Image from "next/image";

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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-2">
          <div className="col-span-1 lg:col-span-9 p-2">
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
          <div className="lg:col-span-3 p-2">
            <aside>
              
                <form action="">
                  <div className="relative">
                    <SearchIcon className="absolute right-3 top-3"/>
                    <input type="text" className="border border-[#9F9F9F] rounded-lg py-3 w-full px-3" autoComplete="off" />
                  </div>
                </form>


                <div className="mt-11 ms-8">
                  <h3 className="font-medium text-2xl mb-8">Categories</h3>
                  <ul className="text-base text-[#9F9F9F] flex space-y-7 flex-col">
                    <li>
                      <Link href="" className="flex items-center justify-between text-[#9f9f9f] transition-colors hover:text-black">
                        <span>Crafts</span>
                        <span>2</span>
                      </Link>
                    </li>
                    <li >
                      <Link href="" className="flex items-center justify-between text-[#9f9f9f] transition-colors hover:text-black">
                        <span>Design</span>
                        <span>12</span>
                      </Link>
                    </li>
                    <li >
                      <Link href="" className="flex items-center justify-between text-[#9f9f9f] transition-colors hover:text-black">
                        <span>Homemade</span>
                        <span>4</span>
                      </Link>
                    </li>
                    <li >
                      <Link href="" className="flex items-center justify-between text-[#9f9f9f] transition-colors hover:text-black">
                        <span>Interior</span>
                        <span>14</span>
                      </Link>
                    </li>
                    <li >
                      <Link href="" className="flex items-center justify-between text-[#9f9f9f] transition-colors hover:text-black">
                        <span>Wood</span>
                        <span>1</span>
                      </Link>
                    </li>
                  </ul>
                </div>

                
                <div className="mt-11 ms-8">
                  <h3 className="font-medium text-2xl mb-8">Recent Posts</h3>
                  <ul className="text-base  flex space-y-7 flex-col">
                    <li>
                      <Link href="" className="flex items-center justify-between group">
                        <div className="flex gap-2 items-center">
                          <Image src="/images/blog/thumb.png" width={80} height={80} alt="Blog" className="rounded" />
                          <div>
                            <h4 className="text-sm group-hover:text-primary transition-colors">Going all-in with millennial design</h4>
                            <span className="text-xs text-[#9F9F9F]">03 Aug 2022</span>
                          </div>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link href="" className="flex items-center justify-between group">
                        <div className="flex gap-2 items-center">
                          <Image src="/images/blog/thumb.png" width={80} height={80} alt="Blog" className="rounded" />
                          <div>
                            <h4 className="text-sm group-hover:text-primary transition-colors">Going all-in with millennial design</h4>
                            <span className="text-xs text-[#9F9F9F]">03 Aug 2022</span>
                          </div>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link href="" className="flex items-center justify-between group">
                        <div className="flex gap-2 items-center">
                          <Image src="/images/blog/thumb.png" width={80} height={80} alt="Blog" className="rounded" />
                          <div>
                            <h4 className="text-sm group-hover:text-primary transition-colors">Going all-in with millennial design</h4>
                            <span className="text-xs text-[#9F9F9F]">03 Aug 2022</span>
                          </div>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link href="" className="flex items-center justify-between group">
                        <div className="flex gap-2 items-center">
                          <Image src="/images/blog/thumb.png" width={80} height={80} alt="Blog" className="rounded" />
                          <div>
                            <h4 className="text-sm group-hover:text-primary transition-colors">Going all-in with millennial design</h4>
                            <span className="text-xs text-[#9F9F9F]">03 Aug 2022</span>
                          </div>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link href="" className="flex items-center justify-between group">
                        <div className="flex gap-2 items-center">
                          <Image src="/images/blog/thumb.png" width={80} height={80} alt="Blog" className="rounded" />
                          <div>
                            <h4 className="text-sm group-hover:text-primary transition-colors">Going all-in with millennial design</h4>
                            <span className="text-xs text-[#9F9F9F]">03 Aug 2022</span>
                          </div>
                        </div>
                      </Link>
                    </li>
    
                  </ul>
                </div>
              
            </aside>
          </div>
        </div>

      </section>

    </div>
  );
};

export default BlogPage;
