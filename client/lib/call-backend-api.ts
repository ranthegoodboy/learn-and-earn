import axios, { Method } from "axios";
import { NextRequest } from "next/server";

async function getCsrfToken(cookie?: string) {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/api/csrf-token`,
    {
      headers: cookie ? { Cookie: cookie } : {},
      withCredentials: true,
    }
  );
  return res.data.csrfToken;
}

export async function callBackendApi(
  req: NextRequest,
  path: string,
  method: Method = "GET",
  data?: unknown
) {
  const cookie = req.headers.get("cookie");
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    ...(cookie ? { Cookie: cookie } : {}),
  };

  if (["POST", "PUT", "DELETE", "PATCH"].includes(method.toUpperCase())) {
    const csrfToken = await getCsrfToken(cookie || undefined);
    headers["x-csrf-token"] = csrfToken;
  }

  const config = {
    method,
    url: `${process.env.NEXT_PUBLIC_API_URL}${path}`,
    headers,
    withCredentials: true,
    ...(data ? { data } : {}),
  };
  return axios(config);
}
