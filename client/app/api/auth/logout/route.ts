import { callBackendApi } from "@/lib/serverApi";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const response = await callBackendApi(request, "/api/auth/logout", "GET");

    const setCookie = response.headers["set-cookie"];
    const nextResponse = NextResponse.json(
      { success: true, data: response.data, error: null },
      { status: 200 }
    );

    if (setCookie) {
      if (Array.isArray(setCookie)) {
        setCookie.forEach((cookieValue) => {
          nextResponse.headers.append("set-cookie", cookieValue);
        });
      } else {
        nextResponse.headers.set("set-cookie", setCookie);
      }
    }

    return nextResponse;
  } catch (error) {
    const errorResponse = {
      success: false,
      data: null,
      error: axios.isAxiosError(error)
        ? error.response?.data?.message
        : "Error logging out. Please try again later.",
    };

    return NextResponse.json(errorResponse, { status: 200 });
  }
}
