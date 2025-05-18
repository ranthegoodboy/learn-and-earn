import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { userId: string } }
) {
  try {
    const { userId } = await params;
    const cookie = request.headers.get("cookie");

    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/users/${userId}`,
      {
        headers: {
          "Content-Type": "application/json",
          ...(cookie ? { Cookie: cookie } : {}),
        },
        withCredentials: true,
      }
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
    console.log("00000");

    const { userId } = await params;
    const cookie = request.headers.get("cookie");
    const body = await request.json();

    const response = await axios.put(
      `${process.env.NEXT_PUBLIC_API_URL}/api/users/${userId}`,
      body,
      {
        headers: {
          "Content-Type": "application/json",
          ...(cookie ? { Cookie: cookie } : {}),
        },
        withCredentials: true,
      }
    );

    console.log("1111111", response.data);

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
