import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { courseId: string } }
) {
  try {
    const { courseId } = params;

    //const cookie = request.headers.get("cookie");

    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/courses/${courseId}`
      // {
      //   headers: {
      //     ...(cookie ? { Cookie: cookie } : {}),
      //   },
      // }
    );

    return NextResponse.json(response.data);
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      return NextResponse.json(
        {
          error:
            error.response?.data?.message || "Error retrieving course overview",
        },
        { status: error.response?.status || 500 }
      );
    }
    return NextResponse.json(
      {
        error: "Unknown error retrieving course overview",
      },
      { status: 500 }
    );
  }
}
