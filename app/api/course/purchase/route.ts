ConnectionDB();
import { Course } from "@/Model/Course";
import { User } from "@/Model/User";
import { ConnectionDB } from "@/utils/ConnectionDB";
import { NextRequest, NextResponse } from "next/server";
import Razorpay from "razorpay";
import shortid from "shortid";

type courseTypeProps = {
  courseName: String;
  description: String;
  banner: String;
  category: String;
  price: Number;
};

export const PATCH = async (
  req: NextRequest,
  { params }: { params: { id: string } },
  res: NextResponse
) => {
  // const id = params.id;
  const { userID, courseIDs } = await req.json(); // Assuming courseIDs is an array of course IDs

  try {
    // Push the provided courseIDs to the user's PurchasedCourses array
    const Updateduser = await User.findOneAndUpdate(
      { _id: userID },
      { $push: { PurchasedCourses: { $each: courseIDs } } },
      { new: true }
    );

    return NextResponse.json(Updateduser, { status: 200 });
  } catch (error: any) {
    throw new Error(error);
  }
};

// export const PATCH = async (
//   req: NextRequest,
//   { params }: { params: { id: string } },
//   res: NextResponse
// ) => {
//   const id = params.id;
//   const { userID } = await req.json();

//   try {
//     // const user=await User.findOne({_id:userID}).populate("autherID");
//     // push this PurchasedCourse to the user's PurchasedCourses array
//     const Updateduser = await User.findOneAndUpdate(
//       { _id: userID },
//       { $push: { PurchasedCourses: id } },
//       { new: true }
//     ).populate("autherID");
//     return NextResponse.json(Updateduser, { status: 200 });
//   } catch (error: any) {
//     throw new Error(error);
//   }
// };
