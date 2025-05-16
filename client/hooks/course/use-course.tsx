import api from "@/services/api";
import { useQuery } from "@tanstack/react-query";

export function useCourse(courseId: string) {
  return useQuery({
    queryKey: ["course", courseId],
    queryFn: async () => {
      const response = await api.get(`/course/${courseId}`);
      return response.data;
    },
    enabled: !!courseId,
  });
}
