import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="p-5 bg-blue-500">
      <div className="flex justify-between items-center">
        <p className="font-bold text-white">Header</p>
        <div>
          <Link href="/todos">
            <p className="inline-block px-4 py-1 font-medium bg-white text-blue-500 rounded-lg">
              Todo
            </p>
          </Link>
          <Link href="/">
            <p className="inline-block ml-4 px-4 py-1 font-medium bg-white text-blue-500 rounded-lg">
              Home
            </p>
          </Link>
          <Link href="/search">
            <p className="inline-block ml-4 px-4 py-1 font-medium bg-white text-blue-500 rounded-lg">
              Search
            </p>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
