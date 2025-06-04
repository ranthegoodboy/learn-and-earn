import { callBackendApi } from "@/lib/call-backend-api";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const response = await callBackendApi(
      request,
      `/api/courses/my-courses`,
      "GET"
    );

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
