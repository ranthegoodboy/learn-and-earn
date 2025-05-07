import { useQuery } from "@tanstack/react-query";

export async function fetchCourse(courseId: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/courses/${courseId}`,
    {
      credentials: "include",
    }
  );
  if (!res.ok) throw new Error("Failed to fetch courses");
  return res.json();
}

export function useCourses(courseId: string) {
  return useQuery({
    queryKey: ["course", courseId],
    queryFn: () => fetchCourse(courseId),
    retry: false,
  });
}
