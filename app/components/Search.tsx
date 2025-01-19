"use client";
import React, { useState } from "react";

interface Props {
  onSearch: (query: string) => void;
}

const Search: React.FC<Props> = ({ onSearch }) => {
  const [query, setQuery] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    onSearch(query); // Pass the search query back to parent
  };

  return (
    <div className="mb-5">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        className="border rounded-lg px-4 py-2"
        placeholder="Search products..."
      />
    </div>
  );
};

export default Search;
