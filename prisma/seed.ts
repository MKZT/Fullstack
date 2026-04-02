import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🚀 Початок заповнення бази контентом...')

  await prisma.article.deleteMany()
  await prisma.user.deleteMany()

  const user = await prisma.user.create({
    data: {
      email: 'test-author@news.ua',
      name: 'Test Editor',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Editor',
    },
  })

  console.log(`👤 Тестового автора ${user.email} створено!`)


  await prisma.article.createMany({
    data: [
      { 
        title: 'Система', 
        body: 'Опис архітектури проєкту на Next.js та PostgreSQL.', 
        category: 'Розробка',
        authorId: user.id 
      },
      { 
        title: 'Робота з Prisma ORM', 
        body: 'Як ефективно керувати базою даних у Fullstack додатках.', 
        category: 'Технології',
        authorId: user.id
      },
      { 
        title: 'Налаштування сервера', 
        body: 'Конфігурація PostgreSQL та прав доступу для локальної розробки.', 
        category: 'Адміністрування',
        authorId: user.id
      },
    ],
  })

  console.log('✅ БАЗУ УСПІШНО ЗАПОВНЕНО ТА ПРИВ’ЯЗАНО ДО АВТОРА!')
}

main()
  .catch((e) => {
    console.error('❌ ПОМИЛКА:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })