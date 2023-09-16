import { Course } from "@/Model/Course";
import { User } from "@/Model/User";
import { ConnectionDB } from "@/utils/ConnectionDB";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  request: NextRequest,
  { params }: { params: { id: string } }
) => {
  const { id } = params;

  try {
    // find user by id
    await ConnectionDB();
    const user = await User.findById(id).populate([
      {
        path: "courses",
        model: Course,
      },
      {
        path: "PurchasedCourses",
        model: Course,
      },
    ]);

    return NextResponse.json(user);
  } catch (error) {
    const errorResponse = {
      error: "Something went wrong",
    };
    return NextResponse.json(errorResponse, { status: 500 }); // Set appropriate status code
  }
};
