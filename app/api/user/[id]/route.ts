import { Course } from "@/Model/Course";
import { User } from "@/Model/User";
import { ConnectionDB } from "@/utils/ConnectionDB";
import { NextRequest, NextResponse } from "next/server";
import NodeCache from "node-cache";

// node-cache init
const nodeCache = new NodeCache();
export const GET = async (
  request: NextRequest,
  { params }: { params: { id: string } }
) => {
  const { id } = params;
  ConnectionDB();

  try {
    // find user by id and get all info about course

    const user = await User.findById({ _id: id })
      .populate([
        {
          path: "courses",
          model: Course,
        },
        {
          path: "PurchasedCourses",
          model: Course,
        },
      ])
      .exec();
    return NextResponse.json(user);
  } catch (error) {
    const errorResponse = {
      error: "Something went wrong",
    };
    return NextResponse.json(errorResponse, { status: 500 }); // Set appropriate status code
  }
};
