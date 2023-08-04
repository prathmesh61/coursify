import { Course } from "@/Model/Course";
import { User } from "@/Model/User";
import { ConnectionDB } from "@/utils/ConnectionDB";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest, { params }) => {
  const { id } = params;
  try {
    await ConnectionDB();
    const course = await Course.findById({ id });
    if (!course)
      return (
        NextResponse.json("course not found "),
        {
          status: 404,
        }
      );

    return NextResponse.json(course, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.stack }, { status: 403 });
  }
};
export const DELETE = async (req: NextRequest, { params }) => {
  const id = params.id;
  try {
    await ConnectionDB();
    const course = await Course.findByIdAndDelete({ id });
    if (!course)
      return (
        NextResponse.json("course not found "),
        {
          status: 404,
        }
      );

    return NextResponse.json(course, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.stack }, { status: 403 });
  }
};
