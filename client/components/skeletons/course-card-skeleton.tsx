import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export const CourseCardSkeleton = () => {
  return (
    <Card className="overflow-hidden">
      <Skeleton className="h-40 w-full rounded-none" />
      <CardContent className="p-4">
        <Skeleton className="h-6 w-3/4 mb-2" />
        <div className="flex items-center gap-2 mb-3">
          <Skeleton className="h-6 w-6 rounded-full" />
          <Skeleton className="h-4 w-24" />
        </div>
        <Skeleton className="h-4 w-full mb-1" />
        <Skeleton className="h-4 w-5/6 mb-3" />
        <div className="flex justify-between items-center">
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-4 w-16" />
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between">
        <Skeleton className="h-6 w-16" />
        <div className="flex items-center gap-1">
          <Skeleton className="h-4 w-4" />
          <Skeleton className="h-4 w-8" />
        </div>
      </CardFooter>
    </Card>
  );
};
