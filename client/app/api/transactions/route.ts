import { callBackendApi } from "@/lib/call-backend-api";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { userId, courseId, transactionId, amount, paymentProvider } = body;

    const response = await callBackendApi(
      request,
      "/api/transactions",
      "POST",
      {
        userId,
        courseId,
        transactionId,
        paymentProvider,
        amount,
      }
    );

    return NextResponse.json(
      { success: true, data: response.data.data, error: null },
      { status: 200 }
    );
  } catch (error) {
    const errorResponse = {
      success: false,
      data: null,
      error: axios.isAxiosError(error)
        ? error.response?.data?.message
        : "Error creating transaction.",
    };

    return NextResponse.json(errorResponse, { status: 200 });
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const params = new URLSearchParams(searchParams);

    const response = await callBackendApi(
      request,
      `/api/transactions?userId=${params.get("userId")}`,
      "GET"
    );

    return NextResponse.json(
      { success: true, data: response.data.data, error: null },
      { status: 200 }
    );
  } catch (error) {
    const errorResponse = {
      success: false,
      data: null,
      error: axios.isAxiosError(error)
        ? error.response?.data?.message
        : "Error fetching user transactions.",
    };

    return NextResponse.json(errorResponse, { status: 200 });
  }
}
