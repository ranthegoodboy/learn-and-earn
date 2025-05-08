"use client";
import { Search, X } from "lucide-react";
import { Options } from "nuqs";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const SearchInput = ({
  keyword,
  setKeyword,
  setCurrentPage,
}: {
  keyword: string | undefined;
  setKeyword: (keyword: string | null) => void;
  setCurrentPage: (
    value: string | ((old: string) => string | null) | null,
    options?: Options
  ) => Promise<URLSearchParams>;
}) => {
  const [searchInput, setSearchInput] = useState(keyword || "");

  const handleSearch = () => {
    setKeyword(searchInput || null);
    setCurrentPage("1");
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleClear = () => {
    setSearchInput("");
    setKeyword(null);
    setCurrentPage("1");
  };

  return (
    <div className="w-96 relative flex gap-2">
      <div className="relative flex-1">
        <Input
          placeholder="Search for courses"
          className="pl-10 pr-8"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        {searchInput && (
          <button
            onClick={handleClear}
            className="absolute cursor-pointer right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>
      <Button onClick={handleSearch}>Search</Button>
    </div>
  );
};

export default SearchInput;
