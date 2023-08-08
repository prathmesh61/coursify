import { User } from "@/Model/User";
import { ConnectionDB } from "@/utils/ConnectionDB";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";

ConnectionDB();
export const POST = async (request: NextRequest) => {
  const reqBody = await request.json();
  const { username, email, password } = reqBody;
  console.log(username, email);

  // console.log(reqBody);
  try {
    const hashPassword = await bcrypt.hashSync(password, 10);

    const newUser = new User({
      username,
      email,
      password: hashPassword,
    });
    await newUser.save();

    const { password: _, ...rest } = newUser._doc;
    //send verification email
    return NextResponse.json({
      ...rest,
    });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
};
