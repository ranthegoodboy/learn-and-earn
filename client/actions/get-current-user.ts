"use server";
import type { User } from "@/types";
import { cookies } from "next/headers";

export async function getCurrentUser() {
  const cookieStore = await cookies();
  const cookieHeader = cookieStore.toString();

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/auth/status`,
    {
      headers: {
        Cookie: cookieHeader,
      },
      credentials: "include",
    }
  );

  if (res.ok) {
    return await res.json().then((data) => data.user as User);
  }
  return null;
}
