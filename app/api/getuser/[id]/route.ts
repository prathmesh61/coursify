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
    const user = await User.findById(id);
    if (!user) {
      return new NextResponse(`User not found`);
    }
    // console.log(user._doc);

    return new NextResponse(JSON.stringify(user._doc), { status: 200 });
  } catch (error) {
    new NextResponse(`Somthing went wrong `);
  }
};
