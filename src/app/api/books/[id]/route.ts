import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const DELETE = async (
  _req: Request,
  { params: { id } }: { params: { id: string } }
) => {
  const bookId = Number(id);

  if (!Number.isInteger(bookId)) {
    return NextResponse.json(
      { error: "유효하지 않은 ID입니다." },
      { status: 400 }
    );
  }

  try {
    await prisma.book.delete({ where: { id: bookId } });
    return new NextResponse(null, { status: 204 });
  } catch (error: any) {
    console.error("삭제 실패:", error);

    if (error?.code === "P2025") {
      return NextResponse.json(
        { error: "책이 존재하지 않습니다." },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { error: "서버 오류로 삭제에 실패했습니다." },
      { status: 500 }
    );
  }
};
