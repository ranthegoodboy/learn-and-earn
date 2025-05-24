"use client";

import CourseOverview from "@/components/checkout/course-overview-card";
import SearchFilters from "@/components/search/search-filters";
import SearchInput from "@/components/search/search-input";
import SearchPagination from "@/components/search/search-pagination";
import SearchResultsGrid from "@/components/search/search-results-grid";
import SearchSortToggle from "@/components/search/search-sort-toggle";
import { useCourses } from "@/hooks/course/use-courses";
import { useSearchParams } from "next/navigation";
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

  const params = useSearchParams();
  const selectedCourseId = params.get("courseId");

  const { data, isLoading } = useCourses(
    keyword || undefined,
    undefined,
    sortBy || undefined,
    priceFilter || undefined,
    level || undefined,
    rating || undefined,
    parseInt(currentPage) || 1
  );

  const courses = data?.data?.data || [];
  const pagination = data?.data?.pagination;

  const selectedCourseInfo = courses.find(
    (course) => course.id === selectedCourseId
  );

  const handleSortByChange = (newSortBy: string) => {
    setSortBy(newSortBy);
  };

  return (
    <div className="container py-8">
      <div className="flex items-center justify-between mb-8">
        <SearchInput
          keyword={keyword || undefined}
          setKeyword={setKeyword}
          setCurrentPage={setCurrentPage}
        />
        <div className="md:flex items-center gap-2">
          <SearchFilters
            priceFilter={priceFilter || undefined}
            onPriceFilterChange={setPriceFilter}
            level={level || undefined}
            onLevelChange={setLevel}
            rating={rating || undefined}
            onRatingChange={setRating}
            setCurrentPage={setCurrentPage}
          />
          <SearchSortToggle
            sortBy={sortBy || undefined}
            onSortChange={handleSortByChange}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="col-span-1 space-y-6 order-1 md:order-last">
          <CourseOverview courseOverview={selectedCourseInfo} />
        </div>
        <div className="col-span-1 md:col-span-2 order-last md:order-1">
          {!data?.success && !isLoading ? (
            <div className="">
              Something went wrong. Please refresh the page.
            </div>
          ) : (
            <div className="col-span-1 md:col-span-2">
              <SearchResultsGrid results={courses} isLoading={isLoading} />

              <div className="flex justify-between mt-6 items-center">
                <div className="text-sm text-muted-foreground w-full">
                  {pagination?.total} courses found{" "}
                  {keyword && `for "${keyword}"`}
                </div>
                {pagination && (
                  <SearchPagination
                    currentPage={parseInt(currentPage || "1")}
                    totalPages={pagination?.totalPages}
                    onPageChange={setCurrentPage}
                  />
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchResultsPage;
