import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🚀 Початок заповнення бази fullstack...')

  // Очищаємо старі дані, щоб не було дублікатів
  await prisma.article.deleteMany()

  // Додаємо нові статті
  await prisma.article.createMany({
    data: [
      { 
        title: 'Система', 
        body: 'Опис архітектури проєкту на Next.js та PostgreSQL.', 
        category: 'Розробка' 
      },
      { 
        title: 'Робота з Prisma ORM', 
        body: 'Як ефективно керувати базою даних у Fullstack додатках.', 
        category: 'Технології' 
      },
      { 
        title: 'Налаштуваннясервера', 
        body: 'Конфігурація PostgreSQL та прав доступу для локальної розробки.', 
        category: 'Адміністрування' 
      },
    ],
  })

  console.log('✅ БАЗУ УСПІШНО ЗАПОВНЕНО!')
}

main()
  .catch((e) => {
    console.error('❌ ПОМИЛКА:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })