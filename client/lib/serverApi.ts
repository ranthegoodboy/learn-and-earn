import axios, { Method } from "axios";
import { NextRequest } from "next/server";

export async function callBackendApi(
  req: NextRequest,
  path: string,
  method: Method = "GET",
  data?: unknown
) {
  const cookie = req.headers.get("cookie");
  const config = {
    method,
    url: `${process.env.NEXT_PUBLIC_API_URL}${path}`,
    headers: {
      "Content-Type": "application/json",
      ...(cookie ? { Cookie: cookie } : {}),
    },
    withCredentials: true,
    ...(data ? { data } : {}),
  };
  return axios(config);
}
