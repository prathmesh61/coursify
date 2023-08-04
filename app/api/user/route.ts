import { User } from "@/Model/User";
import { ConnectionDB } from "@/utils/ConnectionDB";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest, res: NextResponse) => {
  const { username, email } = await req.json();
  try {
    ConnectionDB();
    const user = await User.findOne({ email });
    if (!user)
      return NextResponse.json("user not found please register", {
        status: 404,
      });

    return NextResponse.json(user, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.stack }, { status: 500 });
  }
};
