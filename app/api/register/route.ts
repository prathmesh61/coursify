import { User } from "@/Model/User";
import { ConnectionDB } from "@/utils/ConnectionDB";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";

ConnectionDB();
export const POST = async (request: NextRequest) => {
  const reqBody = await request.json();
  const { username, email, password } = reqBody;

  // console.log(reqBody);
  const hashPassword = bcrypt.hashSync(password, 10);
  try {
    const newUser = new User({
      username,
      email,
      password: hashPassword,
    });

    const savedUser = await newUser.save();

    //send verification email
    const { password: _, ...rest } = savedUser._doc;
    return NextResponse.json({
      message: "User created successfully",
      success: true,
      ...rest,
    });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
};
