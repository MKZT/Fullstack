import { Card, CardContent, Typography, Divider, Chip } from '@mui/material';

// 1. Функція для статичної генерації (SSG для ID 1-10)
export async function generateStaticParams() {
  return Array.from({ length: 10 }, (_, i) => ({
    id: (i + 1).toString(),
  }));
}

// 2. Функція отримання даних (Article + Comments)
async function getArticleData(id: string) {
  if (!id) return null;

  try {
    const [postRes, commentsRes] = await Promise.all([
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { next: { revalidate: 3600 } }),
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, { next: { revalidate: 3600 } })
    ]);
    
    if (!postRes.ok) return null;
    
    return {
      post: await postRes.json(),
      comments: await commentsRes.json(),
    };
  } catch (error) {
    console.error("Помилка завантаження даних:", error);
    return null;
  }
}

// 3. Основний компонент сторінки
export default async function ArticleDetails({ 
  params 
}: { 
  params: Promise<{ id: string }> 
}) {
  const { id } = await params; 
  const data = await getArticleData(id);

  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="p-10 font-black text-center text-red-500 border-4 border-red-500 uppercase italic bg-white shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
          Помилка 404: Статтю #{id} не знайдено
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      {/* Кастомний Chip через Tailwind, бо MUI Chip важче фарбувати на льоту */}
      <span className="inline-block bg-taxi-yellow text-taxi-black font-black px-3 py-1 text-xs uppercase italic mb-6 shadow-[4px_4px_0px_0px_rgba(30,30,30,1)]">
        Стаття #{id}
      </span>
      
      <Typography variant="h2" className="font-black text-taxi-black uppercase mb-8 leading-[1.1] tracking-tighter text-4xl tablet:text-5xl laptop:text-6xl">
        {data.post.title}
      </Typography>
      
      <div className="text-xl text-gray-700 leading-relaxed mb-12 border-l-8 border-taxi-yellow pl-8 italic bg-taxi-gray/30 py-4 rounded-r-lg">
        {data.post.body}
      </div>

      <Divider className="mb-12 border-t-2 border-taxi-black opacity-10" />

      <h2 className="text-3xl font-black text-taxi-black uppercase mb-8 flex items-center gap-3">
        <span className="bg-taxi-black text-taxi-yellow px-2 py-1 rounded">💬</span> 
        Обговорення 
        <span className="text-gray-300 text-lg">[{data.comments.length}]</span>
      </h2>

      <div className="space-y-6">
        {data.comments.map((comment: any) => (
          <Card key={comment.id} className="border-2 border-taxi-gray shadow-none hover:border-taxi-yellow transition-all duration-300 rounded-xl overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 bg-taxi-yellow rounded-full"></div>
                <Typography className="font-black text-[10px] text-gray-400 uppercase tracking-widest">
                  {comment.email}
                </Typography>
              </div>
              <Typography className="text-taxi-black font-bold text-lg leading-snug">
                "{comment.body}"
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}