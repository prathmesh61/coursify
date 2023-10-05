import { Course } from "@/Model/Course";
import { NextRequest, NextResponse } from "next/server";
import { ConnectionDB } from "@/utils/ConnectionDB";
import { User } from "@/Model/User";

export const GET = async (
  req: NextRequest,
  { params }: { params: { id: string } },
  res: NextResponse
) => {
  try {
    await ConnectionDB();
    const course = await Course.findById({ _id: params.id }).populate(
      "autherID"
    );
    // console.log(course);

    return NextResponse.json(course, { status: 200 });
  } catch (error: any) {
    throw new Error(error);
  }
};
