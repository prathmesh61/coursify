import { Course } from "@/Model/Course";
import { User } from "@/Model/User";
import { ConnectionDB } from "@/utils/ConnectionDB";
import { NextRequest, NextResponse } from "next/server";

ConnectionDB();
export const GET = async (
  request: NextRequest,
  { params }: { params: { id: string } },
  response: NextResponse
) => {
  try {
    const courses = await Course.find({ autherID: { $in: params.id } });
    return NextResponse.json(courses, { status: 200 });
  } catch (error) {
    NextResponse.json(error, { status: 500 });
  }
};
