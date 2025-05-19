import { callBackendApi } from "@/lib/serverApi";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { userId: string } }
) {
  try {
    const { userId } = await params;
    const response = await callBackendApi(
      request,
      `/api/users/${userId}`,
      "GET"
    );
    return NextResponse.json({
      success: true,
      data: response.data,
      error: null,
    });
  } catch (error: unknown) {
    const errorResponse = {
      success: false,
      data: null,
      error: axios.isAxiosError(error)
        ? error.response?.data?.message
        : "Error retrieving user profile.",
    };

    return NextResponse.json(errorResponse, { status: 200 });
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { userId: string } }
) {
  try {
    const { userId } = await params;
    const body = await request.json();
    const response = await callBackendApi(
      request,
      `/api/users/${userId}`,
      "PUT",
      body
    );
    return NextResponse.json({
      success: true,
      data: response.data,
      error: null,
    });
  } catch (error: unknown) {
    const errorResponse = {
      success: false,
      data: null,
      error: axios.isAxiosError(error)
        ? error.response?.data?.message || error.response?.data?.error
        : "Error updating user profile.",
    };

    return NextResponse.json(errorResponse, { status: 200 });
  }
}
