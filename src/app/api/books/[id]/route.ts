import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const DELETE = async (
  request: Request,
  context: { params: { id: string } }
) => {
  const { params } = context;

  const id = Number(params.id);

  if (isNaN(id)) {
    return NextResponse.json({ error: "유효하지 않은 ID" }, { status: 400 });
  }

  try {
    await prisma.book.delete({
      where: { id },
    });

    return new NextResponse(null, { status: 204 });
  } catch (error: any) {
    console.error("삭제 오류:", error);

    if (error.code === "P2025") {
      return NextResponse.json(
        { error: "책을 찾을 수 없습니다." },
        { status: 404 }
      );
    }

    return NextResponse.json({ error: "삭제 실패" }, { status: 500 });
  }
};
