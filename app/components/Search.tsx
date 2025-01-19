"use client";
import React, { useState } from "react";
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

const Search = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = (query: string) => {
    const params = new URLSearchParams(searchParams);

    if (query) {
      params.set("query", query);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
    console.log("Here");
    
  };

  return (
    <div className="mb-5">
      <input
        type="text"
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get('query')?.toString()}
        className="border rounded-lg px-4 py-2"
        placeholder="Search products..."
      />
    </div>
  );
};

export default Search;
