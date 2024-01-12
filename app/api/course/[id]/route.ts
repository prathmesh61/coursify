import { Course } from "@/Model/Course";
import { NextRequest, NextResponse } from "next/server";
import { ConnectionDB } from "@/utils/ConnectionDB";
import { User } from "@/Model/User";
import NodeCache from "node-cache";

// node-cache init
const nodeCache = new NodeCache();
export const GET = async (
  req: NextRequest,
  { params }: { params: { id: string } },
  res: NextResponse
) => {
  let course;
  try {
    await ConnectionDB();

    if (nodeCache.has("course")) {
      course = nodeCache.get("course");
    } else {
      course = await Course.findById({ _id: params.id }).populate("autherID");
      nodeCache.set("course", course);
    }
    // console.log(course);

    return NextResponse.json(course, { status: 200 });
  } catch (error: any) {
    throw new Error(error);
  }
};
