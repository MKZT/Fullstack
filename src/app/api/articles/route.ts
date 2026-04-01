import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


export async function GET() {
  const articles = await prisma.article.findMany();
  return NextResponse.json(articles);
}


export async function POST(request: Request) {
  const body = await request.json();
  const newArticle = await prisma.article.create({
    data: {
      title: body.title,
      body: body.body,
      category: body.category,
    },
  });
  return NextResponse.json(newArticle, { status: 201 });
}


export async function PUT(request: Request) {
  const body = await request.json();
  const updatedArticle = await prisma.article.update({
    where: { id: body.id },
    data: { title: body.title, body: body.body },
  });
  return NextResponse.json(updatedArticle);
}


export async function DELETE(request: Request) {
  const { id } = await request.json();
  await prisma.article.delete({
    where: { id: Number(id) },
  });
  return NextResponse.json({ message: 'Статтю видалено' });
}