"use client";
import { signIn } from "next-auth/react";
import { useState, useEffect } from "react";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mounted, setMounted] = useState(false);

  // ФІКС: Чекаємо на повну ініціалізацію клієнтської частини
  useEffect(() => {
    setMounted(true);
  }, []);

  // Поки компонент не змонтований, повертаємо порожній контейнер з фоном,
  // щоб не було "стрибка" інтерфейсу
  if (!mounted) return <div className="min-h-screen bg-[#CFFFB7]" />;

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#CFFFB7] font-sans p-4">
      <div className="bg-white p-8 border-4 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] max-w-sm w-full">
        <h1 className="text-3xl font-black uppercase mb-2 italic text-black">
          Вхід для <span className="bg-taxi-yellow px-2 text-black">Авторів</span>
        </h1>
        <p className="text-[10px] font-bold text-gray-600 mb-6 uppercase tracking-widest text-center">
          Панель керування контентом
        </p>
        
        {/* Секція Credentials */}
        <div className="space-y-4">
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="ВВЕДІТЬ ВАШ EMAIL" 
            className="w-full p-3 border-2 border-black font-black uppercase placeholder:text-gray-400 focus:outline-none focus:bg-taxi-yellow/10 text-black"
          />
          <input 
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="ВАШ ПАРОЛЬ" 
            className="w-full p-3 border-2 border-black font-black uppercase focus:outline-none focus:bg-taxi-yellow/10 text-black"
          />
          <button 
            onClick={() => signIn("credentials", { email, password, callbackUrl: "/profile" })}
            className="w-full bg-black text-taxi-yellow p-4 font-black uppercase hover:bg-taxi-yellow hover:text-black transition-all border-2 border-black active:translate-x-1 active:translate-y-1 active:shadow-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
          >
            УВІЙТИ В СИСТЕМУ →
          </button>
        </div>

        {/* Розділювач */}
        <div className="relative flex py-5 items-center">
          <div className="flex-grow border-t-2 border-black"></div>
          <span className="flex-shrink mx-4 font-black text-xs uppercase text-black">АБО</span>
          <div className="flex-grow border-t-2 border-black"></div>
        </div>

        {/* Секція Google + GitHub */}
        <div className="flex flex-col gap-3">
          <button 
            onClick={() => signIn("google", { callbackUrl: "/profile" })}
            className="w-full flex items-center justify-center gap-3 bg-white text-black p-4 font-black uppercase hover:bg-black hover:text-white transition-all border-2 border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-1 active:translate-y-1"
          >
            <img 
              src="https://authjs.dev/img/providers/google.svg" 
              className="w-5 h-5" 
              alt="Google" 
            />
            Увійти через Google
          </button>

          <button 
            onClick={() => signIn("github", { callbackUrl: "/profile" })}
            className="w-full flex items-center justify-center gap-3 bg-black text-white p-4 font-black uppercase hover:bg-gray-800 transition-all border-2 border-black shadow-[5px_5px_0px_0px_rgba(207,255,183,1)] active:shadow-none active:translate-x-1 active:translate-y-1"
          >
            <img 
              src="https://authjs.dev/img/providers/github.svg" 
              className="w-5 h-5 invert" 
              alt="GitHub" 
            />
            Увійти через GitHub
          </button>
        </div>
      </div>
    </div>
  );
}