import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password } = body;

    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`,
      { email, password },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return NextResponse.json(response.data, {
      status: 200,
    });
  } catch (error) {
    console.error("Login error:", error);
    if (axios.isAxiosError(error)) {
      return NextResponse.json(
        {
          message: error.response?.data?.message || "Invalid credentials",
        },
        { status: error.response?.status || 401 }
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
