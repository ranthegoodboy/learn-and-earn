import { type Course } from "@/types";
import React from "react";
import CourseCard from "../homepage/course-card";

interface SearchResultsGridProps {
  results: Course[];
  noResultsMessage?: React.ReactNode;
}

const SearchResultsGrid = ({
  results,
  noResultsMessage,
}: SearchResultsGridProps) => {
  if (results.length === 0) {
    return (
      <div className="text-center py-16 bg-muted/20 rounded-lg">
        <h3 className="font-medium text-lg mb-2">No courses found</h3>
        <p className="text-muted-foreground">
          {`Try adjusting your search or filters to find what you're looking for`}
        </p>
        {noResultsMessage}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {results.map((course) => (
        <CourseCard {...course} key={course.id} />
      ))}
    </div>
  );
};

export default SearchResultsGrid;
