import { DEFAULT_LOGIN_ROUTE } from "@/config/routes";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

async function checkAuth() {
  const cookieStore = cookies();
  const sessionCookie = (await cookieStore).get("connect.sid");

  if (!sessionCookie?.value) {
    return false;
  }

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/auth/status`,
      {
        headers: {
          Cookie: `connect.sid=${sessionCookie.value}`,
        },
        credentials: "include",
        next: { revalidate: 60 },
      }
    );

    return response.ok;
  } catch (error) {
    console.error("Auth check failed:", error);
    return false;
  }
}

export default async function RouteGuardServer({
  children,
}: {
  children: React.ReactNode;
}) {
  const isAuthenticated = await checkAuth();
  console.log("isAuthenticated", isAuthenticated);

  if (!isAuthenticated) {
    redirect(DEFAULT_LOGIN_ROUTE);
  }

  return <>{children}</>;
}
