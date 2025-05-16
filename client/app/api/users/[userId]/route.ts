import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { userId: string } }
) {
  try {
    const { userId } = params;
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/users/${userId}`
    );

    return NextResponse.json(response.data);
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      return NextResponse.json(
        {
          error:
            error.response?.data?.message || "Error retrieving course overview",
        },
        { status: error.response?.status || 500 }
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

export async function PUT(
  request: NextRequest,
  { params }: { params: { userId: string } }
) {
  try {
    const { userId } = params;
    const body = await request.json();

    const response = await axios.put(
      `${process.env.NEXT_PUBLIC_API_URL}/users/${userId}`,
      body
    );

    return NextResponse.json(response.data);
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      return NextResponse.json(
        {
          error:
            error.response?.data?.message || "Error retrieving course overview",
        },
        { status: error.response?.status || 500 }
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
