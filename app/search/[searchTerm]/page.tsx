import React from "react";
import { SearchResult } from "../../../types/SeachType";

interface Props {
  params: {
    searchTerm: string;
  };
}

const handleSearch = async (searchTerm: string) => {
  const result = await fetch(
    `https://serpapi.com/search.json?q=${searchTerm}&api_key=${process.env.API_KEY}`
  );
  const data: SearchResult = await result.json();
  return data;
};

const SearchResultPage = async ({ params }: Props) => {
  const searchResult = await handleSearch(params.searchTerm);

  return (
    <div>
      <p className="mb-4">Search: {params.searchTerm}</p>
      <div>
        {searchResult.organic_results.map((searchItem) => {
          return (
            <div key={searchItem.position}>
              <p className="text-gray-600 font-medium text-base mb-2">
                {searchItem.position}. {searchItem.title}
              </p>
              <p className="text-gray-400 font-normal text-sm">
                {searchItem.date}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchResultPage;
