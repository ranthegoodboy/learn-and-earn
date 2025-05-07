import { useQuery } from "@tanstack/react-query";

export async function fetchCourses(
  category?: string,
  page: number = 1,
  limit: number = 10
) {
  const params = new URLSearchParams();
  if (category) params.append("category", category);
  params.append("page", page.toString());
  params.append("limit", limit.toString());

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/courses?${params.toString()}`,
    {
      credentials: "include",
    }
  );
  if (!res.ok) throw new Error("Failed to fetch courses");
  return res.json();
}

export function useCourses(
  category?: string,
  page: number = 1,
  limit: number = 10
) {
  return useQuery({
    queryKey: ["courses", { category, page, limit }],
    queryFn: () => fetchCourses(category, page, limit),
    retry: false,
  });
}
