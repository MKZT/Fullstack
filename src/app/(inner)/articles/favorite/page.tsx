import FavoriteArticle from "@/src/components/FavoriteArticle";

export default function FavoritePage() {
  const favoriteIds = [1, 5, 10]; 

  return (
    <div className="py-6">
      <div className="flex items-center gap-4 mb-8">
        <div className="h-10 w-2 bg-taxi-yellow"></div>
        <h1 className="text-4xl font-black text-taxi-black uppercase">Пріоритет</h1>
      </div>
      
      <div className="grid grid-cols-1 laptop:grid-cols-3 gap-6">
        {favoriteIds.map((id) => (
          <FavoriteArticle key={id} id={id} />
        ))}
      </div>
    </div>
  );
}