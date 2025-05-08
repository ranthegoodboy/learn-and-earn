import { CourseCardSkeleton } from "./course-card-skeleton";

interface CourseGridSkeletonProps {
  count?: number;
}

export const CourseGridSkeleton = ({ count = 9 }: CourseGridSkeletonProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {Array(count)
        .fill(null)
        .map((_, index) => (
          <CourseCardSkeleton key={index} />
        ))}
    </div>
  );
};
