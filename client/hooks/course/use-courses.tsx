import api from "@/services/api";
import { type ApiResponseType, type CourseListResponse } from "@/types";
import { useQuery } from "@tanstack/react-query";

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
  return useQuery<ApiResponseType<CourseListResponse>>({
    queryKey: [
      "courses",
      { keyword, category, sortBy, price, level, rating, page, limit },
    ],
    queryFn: async () => {
      const params = new URLSearchParams();
      if (keyword) params.append("keyword", keyword);
      if (category) params.append("category", category);
      if (sortBy) params.append("sortBy", sortBy);
      if (price) params.append("price", price);
      if (level) params.append("level", level);
      if (rating) params.append("rating", rating);

      params.append("page", page.toString());
      params.append("limit", limit.toString());

      const response = await api.get(`/courses?${params.toString()}`);

      return response.data;
    },

    retry: false,
  });
}
