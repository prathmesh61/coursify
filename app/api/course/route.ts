import { Course } from "@/Model/Course";
import { User } from "@/Model/User";
import { ConnectionDB } from "@/utils/ConnectionDB";
import { NextRequest, NextResponse } from "next/server";
type courseTypeProps = {
  courseName: String;
  description: String;
  banner: String;
  category: String;
  price: Number;
};
import NodeCache from "node-cache";

// node-cache init
const nodeCache = new NodeCache();
export const POST = async (req: NextRequest, res: NextResponse) => {
  const { courseName, description, banner, category, price, id } =
    await req.json();
  try {
    ConnectionDB();

    const newCourse = await Course.create({
      courseName,
      description,
      banner,
      category,
      price,
      autherID: id,
    });
    // push this newcourse to the user's course array
    await User.findOneAndUpdate(
      { _id: id },
      { $push: { courses: newCourse._id } },
      { new: true }
    );

    return NextResponse.json(newCourse, { status: 200 });
  } catch (error: any) {
    throw new Error(error);
  }
};

export const GET = async (req: NextRequest, res: NextResponse) => {
  ConnectionDB();

  try {
    const courses = await Course.find({}).populate("autherID");
    return NextResponse.json(courses, { status: 200 });
  } catch (error: any) {
    throw new Error(error);
  }
};

export const PATCH = async (
  req: NextRequest,
  { params }: { params: { id: string } },
  res: NextResponse
) => {
  const id = params.id;
  try {
    ConnectionDB();

    // push this PurchasedCourse to the user's PurchasedCourses array
    const Updateduser = await User.findOneAndUpdate(
      { _id: id },
      { $push: { PurchasedCourses: id } },
      { new: true }
    );
    return NextResponse.json(Updateduser, { status: 200 });
  } catch (error: any) {
    throw new Error(error);
  }
};
