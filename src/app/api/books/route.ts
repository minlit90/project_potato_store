import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function GET() {
  try {
    const books = await prisma.book.findMany({
      orderBy: { year: "desc" },
    });
    return Response.json(books);
  } catch {
    return Response.json({ message: "서버 에러 발생" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (!body.title || !body.author || !body.year) {
      return Response.json(
        { error: "모든 필드를 입력해주세요." },
        { status: 400 }
      );
    }
    const newBook = await prisma.book.create({
      data: {
        title: body.title,
        author: body.author,
        year: Number(body.year),
      },
    });
    return Response.json(newBook, { status: 201 });
  } catch {
    return Response.json({ error: "서버 오류 발생" }, { status: 500 });
  }
}
