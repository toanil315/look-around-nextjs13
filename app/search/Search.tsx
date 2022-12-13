"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`search/${searchTerm}`);
    setSearchTerm("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-x-2 ">
      <input
        className="outline-none px-3 py-2 border-2 border-gray-300 border-solid rounded-md"
        placeholder="Search something..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button
        className="p-2 bg-blue-500 text-white font-medium rounded-md"
        type="submit"
      >
        Search
      </button>
    </form>
  );
};

export default Search;
