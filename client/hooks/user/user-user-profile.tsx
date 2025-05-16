import { ApiResponseType, UserProfile } from "@/types";
import { useQuery } from "@tanstack/react-query";

export async function fetchUserProfile(userId: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/users/${userId}`,
    {
      credentials: "include",
    }
  );
  if (!res.ok) throw new Error("Failed to fetch user profile");
  return res.json();
}

export function useUserProfile(userId: string) {
  return useQuery<ApiResponseType<UserProfile>>({
    queryKey: ["userProfile", userId],
    queryFn: () => fetchUserProfile(userId),
    retry: false,
  });
}
