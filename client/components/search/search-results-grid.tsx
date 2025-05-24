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
          className={`gap-0 rounded-sm p-0 course-card overflow-hidden h-full flex flex-col border-gray-300 shadow-md cursor-pointer ${
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
          </div>

          <CardContent className="p-5 flex-grow">
            <div className="flex justify-between items-center mb-3">
              <span className="bg-muted text-muted-foreground px-2 py-1 rounded text-xs font-medium">
                {course.category}
              </span>
              <div className="flex items-center gap-1">
                <span className="text-amber-500">★</span>
                <span className="text-sm font-medium">{5}</span>
              </div>
            </div>

            <h3 className="text-lg font-semibold mb-2">{course.title}</h3>

            <p className="text-sm text-muted-foreground mb-2">
              by <span className="font-medium">{course.author.name}</span>
            </p>

            <p className="text-sm text-foreground/80 line-clamp-2 mb-2">
              {course.description}
            </p>

            <div className="text-sm text-muted-foreground">
              {course.sections.length} sections{" "}
              {course.sections.reduce(
                (acc, section) => acc + section.chapters.length,
                0
              )}{" "}
              chapters
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
