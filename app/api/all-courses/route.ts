import { Course } from "@/Model/Course";
import { User } from "@/Model/User";
import { ConnectionDB } from "@/utils/ConnectionDB";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  const q = req.nextUrl.searchParams;
  const filter = {
    ...(q.values && { cat: q.values }),
  };
  try {
    ConnectionDB();
    const courses = await Course.find(filter);

    return NextResponse.json(courses, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.stack }, { status: 403 });
  }
};
