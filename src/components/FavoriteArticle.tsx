"use client";
import { useEffect, useState } from "react";

export default function FavoriteArticle({ id }: { id: number }) {
  const [article, setArticle] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setArticle(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="p-4 border m-2">Завантаження статті #{id}...</div>;

  return (
    <div className="p-4 border m-2 rounded shadow">
      <h3 className="font-bold">{article.title}</h3>
      <p>{article.body.substring(0, 50)}...</p>
    </div>
  );
}