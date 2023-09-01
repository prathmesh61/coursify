import { Course } from "@/Model/Course";
import { User } from "@/Model/User";
import { ConnectionDB } from "@/utils/ConnectionDB";
import { NextRequest, NextResponse } from "next/server";
ConnectionDB();

export const GET = async (
  request: NextRequest,
  { params }: { params: { id: string } }
) => {
  const { id } = params;

  try {
    // find user by id
    const user = await User.findById(id).populate("PurchasedCourses");
    if (!user) {
      return new NextResponse(`User not found`);
    }

    // console.log(user._doc);
    const { password, ...others } = user._doc;
    return new NextResponse(JSON.stringify(others), { status: 200 });
  } catch (error) {
    new NextResponse(`Somthing went wrong `);
  }
};
