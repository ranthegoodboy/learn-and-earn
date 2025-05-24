import { useCourse } from "@/hooks/course/use-course";
import { useSearchParams } from "next/navigation";

export const useCurrentCourse = () => {
  const searchParams = useSearchParams();
  const courseId = searchParams.get("courseId") ?? "";
  const { data, isLoading } = useCourse(courseId);

  const course = data?.data ?? null;

  return {
    course,
    courseId,
    error: data?.error,
    isSuccess: data?.success,
    isLoading,
  };
};
