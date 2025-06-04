"use client";

import MyCourseCard from "@/components/my-course-card";
import { Button } from "@/components/ui/button";
import { useMyCourses } from "@/hooks/course/use-my-courses";
import { useRouter } from "next/navigation";

export default function CoursesPage() {
  const router = useRouter();

  const { data, isLoading } = useMyCourses();

  const courses = data?.data.data.courses;

  console.log("data", courses);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">My Courses</h1>
        <Button
          onClick={() => router.push("/dashboard/courses/create")}
          className="bg-primary hover:bg-primary/90"
        >
          Create New Course
        </Button>
      </div>

      {courses?.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-muted-foreground">
            {`You haven't created any courses yet.`}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses?.map((course) => (
            <div
              key={course.id}
              className="bg-card rounded-lg shadow-sm overflow-hidden"
            >
              <MyCourseCard {...course} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
