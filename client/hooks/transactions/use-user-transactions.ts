import api from "@/services/api";
import { ApiResponseType, UserBillingTransaction } from "@/types";
import { useQuery } from "@tanstack/react-query";

export function useUserTransactions(userId: string) {
  return useQuery<ApiResponseType<UserBillingTransaction[]>>({
    queryKey: ["userTransactions", userId],
    queryFn: async () => {
      const response = await api.get(`/transactions?userId=${userId}`);
      return response.data;
    },
    enabled: !!userId,
  });
}
