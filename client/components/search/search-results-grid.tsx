"use client";

import { CourseOverview } from "@/types";
import Image from "next/image";
import { useQueryState } from "nuqs";
import { useEffect } from "react";
import { CourseGridSkeleton } from "../skeletons/course-grid-skeleton";
import { Card, CardContent, CardFooter } from "../ui/card";

interface SearchResultsGridProps {
  results: CourseOverview[];
  isLoading?: boolean;
}

const SearchResultsGrid = ({ results, isLoading }: SearchResultsGridProps) => {
  const [courseId, setCourseId] = useQueryState("courseId");

  useEffect(() => {
    const isSelectedCourseValid = results.find(
      (course) => course.id === courseId
    );

    if (!courseId || !isSelectedCourseValid) {
      setCourseId(results[0]?.id);
    }
  }, [courseId, results, setCourseId]);

  const handleCardClick = (id: string) => {
    setCourseId(id);
  };

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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {results.map((course) => (
        <Card
          onClick={() => handleCardClick(course.id)}
          key={course.id}
          className={`rounded-sm p-0 course-card overflow-hidden h-full flex flex-col border-gray-300 shadow-md cursor-pointer ${
            courseId === course.id
              ? "ring-4 ring-secondary shadow-xl transition-all duration-300 shadow-secondary/50"
              : ""
          }`}
        >
          <div className="relative">
            <Image
              src={course.image}
              alt={course.title}
              className="w-full h-36 object-cover"
              width={300}
              height={200}
              priority
            />
            <div className="absolute top-3 left-3 text-sm text-white bg-black/60 px-2 py-1 rounded">
              By {course.author.name} | {course.category}
            </div>
          </div>

          <CardContent className="px-5 py-4 flex-grow">
            <h3 className="text-xl font-semibold mb-3">{course.title}</h3>
            <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
              {course.description}
            </p>

            <div className="space-y-1 mb-3">
              <h4 className="text-sm font-medium mb-2">Course Content</h4>
              {course.sections.slice(0, 3).map((section, index) => (
                <div key={index} className="flex items-center gap-2 text-sm">
                  <div className="w-5 h-5 flex items-center justify-center bg-muted rounded-full text-xs">
                    {index + 1}
                  </div>
                  <span className="truncate">{section.sectionTitle}</span>
                </div>
              ))}
              {course.sections.length > 3 && (
                <div className="text-xs text-muted-foreground pl-7">
                  +{course.sections.length - 3} more sections
                </div>
              )}
            </div>
          </CardContent>

          <CardFooter className="flex justify-between items-center p-5 pt-0 mt-auto">
            <div className="font-bold text-lg">
              {course.price === 0 ? "Free" : `$${course.price.toFixed(2)}`}
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default SearchResultsGrid;
