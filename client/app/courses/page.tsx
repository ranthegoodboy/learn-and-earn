"use client";

import SearchFilters from "@/components/search/search-filters";
import SearchInput from "@/components/search/search-input";
import SearchPagination from "@/components/search/search-pagination";
import SearchResultsGrid from "@/components/search/search-results-grid";
import SearchSortToggle from "@/components/search/search-sort-toggle";
import { useCourses } from "@/hooks/course/use-courses";
import { CourseOverview } from "@/types";
import { useQueryState } from "nuqs";

const SearchResultsPage = () => {
  const [keyword, setKeyword] = useQueryState("keyword");
  const [sortBy, setSortBy] = useQueryState("sortBy", {
    defaultValue: "newest",
  });
  const [priceFilter, setPriceFilter] = useQueryState("price", {
    defaultValue: "all",
  });
  const [level, setLevel] = useQueryState("level", {
    defaultValue: "all",
  });
  const [rating, setRating] = useQueryState("rating", {
    defaultValue: "all",
  });
  const [currentPage, setCurrentPage] = useQueryState("page", {
    defaultValue: "1",
  });

  const { data, isLoading } = useCourses(
    keyword || undefined,
    undefined, // category
    sortBy || undefined,
    priceFilter || undefined,
    level || undefined,
    rating || undefined,
    parseInt(currentPage) || 1
  );
  const courses = data?.data as CourseOverview[];

  console.log("courses", courses);

  const handleSortByChange = (newSortBy: string) => {
    setSortBy(newSortBy);
  };

  return (
    <div className="container py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold">Search Results</h1>
        <SearchInput
          keyword={keyword || undefined}
          setKeyword={setKeyword}
          setCurrentPage={setCurrentPage}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 space-y-6">
          <SearchFilters
            priceFilter={priceFilter || undefined}
            onPriceFilterChange={setPriceFilter}
            level={level || undefined}
            onLevelChange={setLevel}
            rating={rating || undefined}
            onRatingChange={setRating}
            setCurrentPage={setCurrentPage}
          />
        </div>

        <div className="col-span-1 md:col-span-3">
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm text-muted-foreground">
              {data?.pagination.total} courses found{" "}
              {keyword && `for "${keyword}"`}
            </p>
            <div className="hidden md:block">
              <SearchSortToggle
                sortBy={sortBy || undefined}
                onSortChange={handleSortByChange}
              />
            </div>
          </div>

          <SearchResultsGrid results={courses} isLoading={isLoading} />

          {data && (
            <SearchPagination
              currentPage={parseInt(currentPage || "1")}
              totalPages={data.pagination?.totalPages}
              onPageChange={setCurrentPage}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchResultsPage;
