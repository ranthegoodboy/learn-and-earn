import { useQuery } from "@tanstack/react-query";

export async function fetchCourses(
  keyword?: string,
  category?: string,
  sortBy?: string,
  price?: string,
  level?: string,
  rating?: string,
  page: number = 1,
  limit: number = 10
) {
  const params = new URLSearchParams();
  if (keyword) params.append("keyword", keyword);
  if (category) params.append("category", category);
  if (sortBy) params.append("sortBy", sortBy);
  if (price) params.append("price", price);
  if (level) params.append("level", level);
  if (rating) params.append("rating", rating);

  params.append("page", page.toString());
  params.append("limit", limit.toString());

  const url = `${
    process.env.NEXT_PUBLIC_API_URL
  }/api/courses?${params.toString()}`;

  const res = await fetch(url, {
    credentials: "include",
  });
  if (!res.ok) throw new Error("Failed to fetch courses");
  return res.json();
}

export function useCourses(
  keyword?: string,
  category?: string,
  sortBy?: string,
  price?: string,
  level?: string,
  rating?: string,
  page: number = 1,
  limit: number = 9
) {
  return useQuery({
    queryKey: [
      "courses",
      { keyword, category, sortBy, price, level, rating, page, limit },
    ],
    queryFn: () =>
      fetchCourses(
        keyword,
        category,
        sortBy,
        price,
        level,
        rating,
        page,
        limit
      ),
    retry: false,
  });
}
