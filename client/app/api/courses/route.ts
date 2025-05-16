import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const params = new URLSearchParams(searchParams);

    //const cookie = request.headers.get("cookie");

    const backendUrl = `${
      process.env.NEXT_PUBLIC_API_URL
    }/api/courses?${params.toString()}`;

    const response = await axios.get(backendUrl, {
      // headers: {
      //   ...(cookie ? { Cookie: cookie } : {}),
      // },
    });

    return NextResponse.json(response.data);
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      return NextResponse.json(
        {
          error: error.response?.data?.message || "Error retrieving courses",
        },
        { status: error.response?.status || 500 }
      );
    }
    return NextResponse.json(
      {
        error: "Unknown error retrieving courses",
      },
      { status: 500 }
    );
  }
}
