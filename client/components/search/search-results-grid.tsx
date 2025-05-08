import { CourseOverview } from "@/types";

import CourseCard from "../homepage/course-card";
import { CourseGridSkeleton } from "../skeletons/course-grid-skeleton";

interface SearchResultsGridProps {
  results: CourseOverview[];
  isLoading?: boolean;
}

const SearchResultsGrid = ({ results, isLoading }: SearchResultsGridProps) => {
  if (isLoading) {
    return <CourseGridSkeleton />;
  }

  if (!results || results.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-muted-foreground">No courses found</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {results.map((course) => (
        <CourseCard key={course.id} {...course} />
      ))}
    </div>
  );
};

export default SearchResultsGrid;
