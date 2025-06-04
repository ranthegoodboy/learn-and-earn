import api from "@/services/api";
import { type ApiResponseType, type MyCourseListResponse } from "@/types";
import { useQuery } from "@tanstack/react-query";

export function useMyCourses(page: number = 1, limit: number = 9) {
  return useQuery<ApiResponseType<MyCourseListResponse>>({
    queryKey: ["my-courses", { page, limit }],
    queryFn: async () => {
      const params = new URLSearchParams();
      params.append("page", page.toString());
      params.append("limit", limit.toString());
      const response = await api.get(`/my-courses?${params.toString()}`);

      return response.data;
    },

    retry: false,
  });
}
