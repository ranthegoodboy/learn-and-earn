import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { courseId: string } }
) {
  try {
    const { courseId } = await params;

    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/courses/${courseId}`
    );

    return NextResponse.json({
      success: true,
      data: response.data.data,
      error: null,
    });
  } catch (error: unknown) {
    const errorResponse = {
      success: false,
      data: null,
      error: axios.isAxiosError(error)
        ? error.response?.data?.message
        : "Error retrieving course overview",
    };

    return NextResponse.json(errorResponse, { status: 200 });
  }
}
