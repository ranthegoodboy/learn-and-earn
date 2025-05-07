"use client";

import SearchFilters from "@/components/search/SearchFilters";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import SearchPagination from "@/components/search/search-pagination";
import SearchResultsGrid from "@/components/search/search-results-grid";
import SearchSortToggle from "@/components/search/search-sort-toggle";
import type { Course } from "@/data/mockCourses";
import { mockCourses } from "@/data/mockCourses";

const SearchResultsPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const query = searchParams.get("q") || "";
  const [showOnlyFree, setShowOnlyFree] = useState(false);
  const [category, setCategory] = useState<string | undefined>(undefined);
  const [sortBy, setSortBy] = useState<string>("relevance");
  const [currentPage, setCurrentPage] = useState(1);
  const resultsPerPage = 12;

  // Filter search results based on criteria
  const filteredResults = mockCourses.filter((result) => {
    const priceCondition = showOnlyFree ? result.price === 0 : true;
    const categoryCondition = category ? result.category === category : true;
    const queryCondition =
      result.title.toLowerCase().includes(query.toLowerCase()) ||
      result.description.toLowerCase().includes(query.toLowerCase());
    return priceCondition && categoryCondition && queryCondition;
  });

  // Sort search results
  const sortedResults = [...filteredResults].sort((a, b) => {
    if (sortBy === "price-asc") {
      return a.price - b.price;
    } else if (sortBy === "price-desc") {
      return b.price - a.price;
    } else if (sortBy === "rating") {
      return b.rating - a.rating;
    }
    return 0; // Default: relevance (no change)
  });

  // Calculate pagination
  const totalPages = Math.ceil(sortedResults.length / resultsPerPage);
  const startIndex = (currentPage - 1) * resultsPerPage;
  const paginatedResults = sortedResults.slice(
    startIndex,
    startIndex + resultsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSearch = (newQuery: string) => {
    navigate(`/search?q=${newQuery}`);
  };

  const handleCategoryChange = (newCategory: string | undefined) => {
    setCategory(newCategory);
    setCurrentPage(1); // Reset to first page on filter change
  };

  const handlePriceToggle = (checked: boolean) => {
    setShowOnlyFree(checked);
    setCurrentPage(1); // Reset to first page on filter change
  };

  const handleSortByChange = (newSortBy: string) => {
    setSortBy(newSortBy);
  };

  const resetFilters = () => {
    setShowOnlyFree(false);
    setCategory(undefined);
    setSortBy("relevance");
    setCurrentPage(1);
  };

  return (
    <div className="container py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold">Search Results</h1>
        <div className="w-96 relative">
          <Input
            placeholder="Search for courses"
            className="pl-10"
            value={query}
            onChange={(e) => handleSearch(e.target.value)}
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 space-y-6">
          <SearchFilters
            showOnlyFree={showOnlyFree}
            category={category}
            sortBy={sortBy}
            onPriceToggle={handlePriceToggle}
            onCategoryChange={handleCategoryChange}
            onSortByChange={handleSortByChange}
            resetFilters={resetFilters}
          />
        </div>

        {/* Search Results */}
        <div className="col-span-1 md:col-span-3">
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm text-muted-foreground">
              {filteredResults.length} courses found
            </p>
            <div className="hidden md:block">
              <SearchSortToggle
                sortBy={sortBy}
                onSortChange={handleSortByChange}
              />
            </div>
          </div>

          <SearchResultsGrid results={paginatedResults} />

          <SearchPagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchResultsPage;
