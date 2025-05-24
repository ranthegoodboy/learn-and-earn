import { callBackendApi } from "@/lib/serverApi";
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
