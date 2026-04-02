// src/app/(inner)/profile/page.tsx
"use client";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function ProfilePage() {
  const { data: session, update, status } = useSession();
  const [name, setName] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (session?.user?.name) setName(session.user.name);
  }, [session]);

  const handleUpdate = async () => {
    if (!name) return alert("Введіть ім'я");
    setIsSaving(true);
    
    try {
      // 1. Запит до API (Глобально в БД)
      const response = await fetch("/api/user/update", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.details || "Помилка сервера");
      }

      // 2. Оновлення сесії (Локально для Navbar)
      await update({
        ...session,
        user: { ...session?.user, name: name }
      });

      alert("Профіль оновлено в базі даних Docker!");
    } catch (error: any) {
      console.error("Save error:", error);
      alert(`Помилка: ${error.message}`);
    } finally {
      setIsSaving(false);
    }
  };

  if (status === "loading") return <div className="p-10 font-black">СИНХРОНІЗАЦІЯ...</div>;
  if (!session) return <div className="p-10 font-black text-red-500">ДОСТУП ЗАБОРОНЕНО</div>;

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-4xl font-black uppercase italic bg-taxi-yellow inline-block px-4 mb-8 border-4 border-black">
        Мій Профіль
      </h1>

      <div className="bg-white border-4 border-black p-8 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] space-y-6">
        <div>
          <label className="block font-black uppercase text-xs mb-1">Email (Системний)</label>
          <input type="text" value={session.user?.email || ""} disabled className="w-full p-3 border-2 border-gray-200 bg-gray-50 font-bold text-gray-400" />
        </div>

        <div>
          <label className="block font-black uppercase text-xs mb-1">Ім'я автора</label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 border-2 border-black font-black uppercase focus:bg-taxi-yellow/5 focus:outline-none" 
          />
        </div>

        <div className="flex gap-4 pt-4">
          <button 
            onClick={handleUpdate}
            disabled={isSaving}
            className={`${isSaving ? 'opacity-50' : ''} bg-black text-taxi-yellow px-8 py-4 font-black uppercase border-2 border-black hover:bg-taxi-yellow hover:text-black transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-1 active:translate-y-1 active:shadow-none`}
          >
            {isSaving ? "ЗБЕРЕЖЕННЯ..." : "ЗБЕРЕГТИ В БД"}
          </button>
          
          <Link 
            href="/profile/security"
            className="flex items-center border-2 border-black px-8 py-4 font-black uppercase hover:bg-gray-100 transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
          >
            БЕЗПЕКА
          </Link>
        </div>
      </div>
    </div>
  );
}