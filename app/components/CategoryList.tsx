
'use client'
import { Category } from "@/sanity.types";
import React from "react";

interface Props {
  title: String;
  categories: Category[];
}

const CategoryList = ({ categories, title  }: Props) => {

  return (
    <div className="">
      <h3 className="font-medium text-2xl mb-8">{title}</h3>
      <ul className="text-base text-[#9F9F9F] flex space-y-7 flex-col">
        {categories.map((category) => (
          <li key={category._id}>
            <span
              
             
              className="cursor-pointer flex items-center justify-between text-[#9f9f9f] transition-colors hover:text-black"
            >
              <span>{category.title}</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
