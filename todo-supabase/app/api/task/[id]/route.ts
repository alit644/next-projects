import { prisma } from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function DELETE(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  try {
    // get task by id
    const task = await prisma.task.findUnique({
      where: {
        id: Number(id),
      },
    });
    if (!task) {
      return NextResponse.json(
        {
          error: "Task not found",
        },
        { status: 404 }
      );
    }
    await prisma.task.delete({
      where: {
        id: Number(id),
      },
    });
    revalidatePath("/");
    return NextResponse.json({
      message: "Task deleted successfully",
      revalidatePath: true,
      status: 200,
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Internal Server Error",
      },
      { status: 500 }
    );
  }
}
