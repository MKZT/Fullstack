import Link from "next/link";

async function getArticles() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
}

export default async function ArticlesPage() {
  const articles = await getArticles();

  return (
    <div className="py-6 px-2">
      <h1 className="text-4xl font-black text-taxi-black uppercase mb-8 border-b-4 border-taxi-yellow inline-block">
        Всі статті
      </h1>
      <div className="grid grid-cols-1 laptop:grid-cols-2 gap-4">
        {articles.slice(0, 10).map((art: any) => (
          <Link key={art.id} href={`/articles/${art.id}`} className="group flex items-center bg-white border-2 border-taxi-gray p-4 rounded-taxi hover:border-taxi-black transition-all">
            <span className="text-2xl font-black text-taxi-yellow mr-4 group-hover:scale-125 transition-transform">
              {art.id.toString().padStart(2, '0')}
            </span>
            <span className="text-taxi-black font-bold group-hover:text-taxi-yellow transition-colors truncate">
              {art.title}
            </span>
            <span className="ml-auto text-taxi-gray group-hover:text-taxi-black">→</span>
          </Link>
        ))}
      </div>
    </div>
  );
}