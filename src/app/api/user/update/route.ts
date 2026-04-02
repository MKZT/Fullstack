// src/app/api/user/update/route.ts
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth/next";
import { headers } from "next/headers";

const prisma = new PrismaClient();

// Ті самі опції, що й у [...nextauth]
const authOptions = {
  session: { strategy: "jwt" as const },
  secret: process.env.NEXTAUTH_SECRET,
};

export async function PUT(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    
    // Перевірка авторизації
    if (!session?.user?.email) {
      return NextResponse.json({ error: "Неавторизовано" }, { status: 401 });
    }

    const body = await request.json();
    const { name } = body;

    if (!name) {
      return NextResponse.json({ error: "Ім'я обов'язкове" }, { status: 400 });
    }

    // Оновлення в БД
    const updatedUser = await prisma.user.update({
      where: { email: session.user.email },
      data: { name: name },
    });

    console.log(">>> БД ОНОВЛЕНО ДЛЯ:", session.user.email);
    return NextResponse.json(updatedUser);
  } catch (error: any) {
    console.error(">>> DATABASE ERROR:", error.message);
    // Якщо юзера немає в БД, Prisma видасть помилку P2025
    return NextResponse.json({ error: "Помилка бази даних", details: error.message }, { status: 500 });
  }
}