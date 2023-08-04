import { Course } from "@/Model/Course";
import { User } from "@/Model/User";
import { ConnectionDB } from "@/utils/ConnectionDB";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest, res: NextResponse) => {
  const { courseName, description, banner, category, price, id } =
    await req.json();
  await ConnectionDB();
  try {
    const newCourse = new Course({
      courseName,
      description,
      banner,
      category,
      price,
      userID: id,
    });
    await newCourse.save();
    return NextResponse.json(newCourse, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.stack }, { status: 400 });
  }
};
