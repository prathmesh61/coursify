import { User } from "@/Model/User";
import { ConnectionDB } from "@/utils/ConnectionDB";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest, res: NextResponse) => {
  const { username, email } = await req.json();
  ConnectionDB();
  try {
    const user = await User.findOne({ username });
    if (user)
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );

    const newUser = new User({
      username,
      email,
    });
    await newUser.save();
    return NextResponse.json(newUser, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.stack }, { status: 500 });
  }
};
