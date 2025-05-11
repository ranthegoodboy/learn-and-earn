import { useAuthStore } from "@/stores/auth-store";
import { useQuery } from "@tanstack/react-query";

export async function fetchAuthStatus() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/auth/status`,
    {
      credentials: "include",
    }
  );
  if (!res.ok) throw new Error("Not authenticated");
  return res.json();
}

export function useAuthStatus() {
  const setUser = useAuthStore((state) => state.setUser);
  const clearUser = useAuthStore((state) => state.clearUser);

  return useQuery({
    queryKey: ["auth-status"],
    queryFn: async () => {
      try {
        const data = await fetchAuthStatus();
        setUser(data.user);
        return data;
      } catch (error) {
        clearUser();
        throw error;
      }
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 60 * 60 * 1000, // 1 hour
    refetchOnWindowFocus: true,
    refetchOnMount: true,
    retry: false,
    throwOnError: false,
  });
}
