"use client";
import CourseHeroBanner from "@/components/course-overview/course-hero-banner";
import CourseOverviewContent from "@/components/course-overview/course-overview-content";
import { useCourse } from "@/hooks/course/use-course";
import { useParams } from "next/navigation";

const CourseOverview = () => {
  const params = useParams();
  const courseId = params.courseId as string;

  const { data, isLoading, isError, error } = useCourse(courseId);

  const course = data?.data;

  if (!course || isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return (
      <div className="container py-20 text-center">
        {error.message || "Something went wrong. Please refresh the page."}
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen">
      <CourseHeroBanner course={course} />
      <CourseOverviewContent course={course} />
    </div>
  );
};

export default CourseOverview;
