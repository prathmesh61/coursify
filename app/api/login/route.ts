import { User } from "@/Model/User";
import { ConnectionDB } from "@/utils/ConnectionDB";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
ConnectionDB();
export const POST = async (request: NextRequest) => {
  const reqBody = await request.json();
  const { username, email, password } = reqBody;

  // console.log(reqBody);
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({
        message: "User not exist register",
        success: false,
      });
    }
    const validPassword = await bcrypt.compare(password, user.password);

    //send verification email
    const { password: _, ...rest } = user._doc;
    // console.log(rest);

    return NextResponse.json({
      ...rest,
    });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
};
