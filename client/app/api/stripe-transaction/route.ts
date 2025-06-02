import { callBackendApi } from "@/lib/call-backend-api";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { amount } = body;

    const amountInCents = Math.round((amount || 0) * 100);

    const response = await callBackendApi(
      request,
      "/api/transactions/stripe/payment-intent",
      "POST",
      {
        amount: amountInCents,
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
        : "Error creating stripe payment intent.",
    };

    return NextResponse.json(errorResponse, { status: 200 });
  }
}
