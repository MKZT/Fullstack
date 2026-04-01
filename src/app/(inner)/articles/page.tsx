"use client";

import Link from "next/link";
import useSWR from "swr";

// Функція-завантажувач для SWR
const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function ArticlesPage() {
  const { data: articles, error, isLoading } = useSWR("/api/articles", fetcher, {
    refreshInterval: 5000, // Автоматичне оновлення кожні 5 секунд
  });

  if (error) return <div className="p-6 text-red-500 font-bold">Помилка завантаження даних...</div>;
  if (isLoading) return <div className="p-6 text-taxi-yellow font-black animate-pulse">ЗАВАНТАЖЕННЯ ДАНИХ ТАКСІ...</div>;

  return (
    <div className="py-6 px-2 max-w-5xl mx-auto">
      <h1 className="text-4xl font-black text-taxi-black uppercase mb-8 border-b-4 border-taxi-yellow inline-block italic">
        Всі статті <span className="text-taxi-yellow bg-taxi-black px-2 ml-2">Taxi-DB</span>
      </h1>
      
      {!articles || articles.length === 0 ? (
        <p className="text-taxi-gray font-bold uppercase tracking-tighter">
          База порожня. Перевір Docker та запусти Seed.
        </p>
      ) : (
        <div className="grid grid-cols-1 laptop:grid-cols-2 gap-6">
          {articles.map((art: any) => (
            <Link 
              key={art.id} 
              href={`/articles/${art.id}`} 
              className="group flex items-center bg-white border-2 border-taxi-black p-5 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all"
            >
              <span className="text-3xl font-black text-taxi-yellow mr-5 group-hover:scale-110 transition-transform">
                {art.id.toString().padStart(2, '0')}
              </span>
              <div className="flex flex-col truncate">
                <span className="text-taxi-black font-black uppercase text-lg group-hover:text-taxi-yellow transition-colors truncate">
                  {art.title}
                </span>
                <span className="text-[10px] font-bold text-white bg-taxi-black px-2 py-0.5 w-fit uppercase tracking-widest mt-1">
                  {art.category}
                </span>
              </div>
              <span className="ml-auto text-2xl font-black text-taxi-black group-hover:translate-x-2 transition-transform">
                →
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}