"use client";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
interface Props {
  itemCount: number;
  pageSize: number;
  currentPage: number;
}

const Pagination = ({ itemCount, pageSize, currentPage }: Props) => {
  const pageCount = Math.ceil(itemCount / pageSize);
  const router = useRouter();
  const searchParams = useSearchParams();

  if (pageCount <= 1) return null;

  const changePage = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());
    router.push("?" + params.toString());
  };

  // return (
  //   <p>Page {currentPage} of {pageCount}</p>
  // )
  return (
    <div className="my-10 lg:my-20 text-center flex items-center justify-center space-x-5">
      <p className="text-sm">
        Page {currentPage} of {pageCount}
      </p>
      <nav aria-label="Page navigation example">
        <ul className="inline-flex lg:space-x-9 space-x-4 text-sm lg:text-base flex-wrap justify-center">
          {/* Page 1 */}
          <li
            onClick={() => changePage(1)}
            className={`w-[50px] lg:w-[60px] h-[50px] lg:h-[60px] rounded-lg font-normal bg-primary text-white flex items-center justify-center text-lg lg:text-xl hover:bg-primary hover:text-white transition ${
              currentPage === 1
                ? "cursor-not-allowed opacity-25"
                : "cursor-pointer opacity-1"
            }`}
          >
            <ChevronsLeft />
          </li>

          <li
            onClick={() => changePage(currentPage - 1)}
            className={`w-[50px] lg:w-[60px] h-[50px] lg:h-[60px] rounded-lg font-normal bg-primary text-white flex items-center justify-center text-lg lg:text-xl hover:bg-primary hover:text-white transition ${
              currentPage === 1
                ? "cursor-not-allowed opacity-25"
                : "cursor-pointer opacity-1"
            }`}
          >
            <ChevronLeft />
          </li>

          <li
            onClick={() => changePage(currentPage + 1)}
            className={`w-[50px] lg:w-[60px] h-[50px] lg:h-[60px] rounded-lg font-normal bg-primary text-white flex items-center justify-center text-lg lg:text-xl hover:bg-primary hover:text-white transition ${
              currentPage === pageCount
                ? "cursor-not-allowed opacity-25"
                : "cursor-pointer opacity-1"
            }`}
          >
            <ChevronRight />
          </li>

          <li
            onClick={() => changePage(pageCount)}
            className={`w-[50px] lg:w-[60px] h-[50px] lg:h-[60px] rounded-lg font-normal bg-primary text-white flex items-center justify-center text-lg lg:text-xl hover:bg-primary hover:text-white transition ${
              currentPage === pageCount
                ? "cursor-not-allowed opacity-25"
                : "cursor-pointer opacity-1"
            }`}
          >
            <ChevronsRight />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
