import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const params = new URLSearchParams(searchParams);

    const backendUrl = `${
      process.env.NEXT_PUBLIC_API_URL
    }/api/courses?${params.toString()}`;

    const response = await axios.get(backendUrl);

    return NextResponse.json(
      {
        success: true,
        data: response.data,
        error: null,
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    const errorResponse = {
      success: false,
      data: null,
      error: axios.isAxiosError(error)
        ? error.response?.data?.message
        : "Error retrieving courses overview",
    };

    return NextResponse.json(errorResponse, { status: 200 });
  }
}
