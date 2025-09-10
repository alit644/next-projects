import { TaskBody } from "@/interfaces";
import { addTaskSchema } from "@/schema";
import { prisma } from "@/utils/db";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";
/*
 * @route POST ~/api/task
 * @description Create a new task
 * @access Public
 */
export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as TaskBody;
    const validatedBody = addTaskSchema.safeParse(body);
    if (!validatedBody.success) {
      return NextResponse.json(
        { error: validatedBody.error.issues.map((issue) => issue.message) },
        { status: 400 }
      );
    }
    await prisma.task.create({
      data: {
        title: validatedBody.data.title,
        description: validatedBody.data.description,
        status: validatedBody.data.status,
      },
    });
    revalidatePath("/");
    return NextResponse.json(
      {
        message: "Task created successfully",
        revalidatePath: true,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Internal Server Error",
        revalidatePath: false,
      },
      { status: 500 }
    );
  }
}

/*
 * @route GET ~/api/task
 * @description Get all tasks
 * @access Public
 */

export async function GET() {
  try {
    const tasks = await prisma.task.findMany({
     orderBy:{
      createdAt:"desc"
     }
    });
    return NextResponse.json(
      {
        tasks,
        status: 200,
      },
      { status: 200 },
     
    );
  } catch (error) {
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Internal Server Error",
      },
      { status: 500 }
    );
  }
}
