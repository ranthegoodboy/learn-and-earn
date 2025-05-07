export interface FetcherOptions extends RequestInit {
  headers?: Record<string, string>;
}

export async function fetcher<T>(
  path: string,
  options: FetcherOptions = {}
): Promise<T> {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/api${
    path.startsWith("/") ? path : `/${path}`
  }`;

  const fetchOptions: RequestInit = {
    credentials: "include",
    ...options,
    headers: {
      ...(options.headers || {}),
    },
  };

  const res = await fetch(url, fetchOptions);

  if (!res.ok) {
    throw new Error(`Request failed: ${res.status}`);
  }

  return res.json();
}
