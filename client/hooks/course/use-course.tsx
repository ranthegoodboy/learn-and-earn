import api from "@/services/api";
import type { ApiResponseType, CourseOverview } from "@/types";
import { useQuery } from "@tanstack/react-query";

export function useCourse(courseId: string) {
  return useQuery<ApiResponseType<CourseOverview>>({
    queryKey: ["course", courseId],
    queryFn: async () => {
      const response = await api.get(`/course/${courseId}`);
      return response.data;
    },
    enabled: !!courseId,
  });
}
