"use client";

import MyCourseCard from "@/components/my-course-card";
import { Button } from "@/components/ui/button";
import { useMyCourses } from "@/hooks/course/use-my-courses";
import useCoursesStore from "@/stores/courses-store";
import { Plus } from "lucide-react";

export default function CoursesPage() {
  const { courses: coursesStore, addCourse } = useCoursesStore(
    (state) => state
  );
  const { data, isLoading } = useMyCourses();

  const courses = data?.data?.data?.courses || [];
  const allCourses = [...courses, ...coursesStore];

  console.log("data", courses);
  console.log("isCoursesLimit", coursesStore);

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
          disabled={coursesStore.length >= 3}
          onClick={addCourse}
          className="bg-primary hover:bg-primary/90 cursor-pointer"
        >
          <Plus />
          Create New Course
        </Button>
      </div>

      {allCourses?.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-muted-foreground">
            {`You haven't created any courses yet.`}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allCourses?.map((course, index) => (
            <div
              key={course.title + index}
              className="bg-card rounded-lg shadow-sm overflow-hidden"
            >
              <MyCourseCard {...course} draftIndex={index - courses.length} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
