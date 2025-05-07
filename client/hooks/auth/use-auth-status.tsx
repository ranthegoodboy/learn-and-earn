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

  return useQuery({
    queryKey: ["auth-status"],
    queryFn: async () => {
      const data = await fetchAuthStatus();
      setUser(data.user);
      return data;
    },
    retry: false,
  });
}
