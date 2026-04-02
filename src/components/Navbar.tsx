"use client";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import NavLink from "./NavLink"; // Твій існуючий компонент

export default function Navbar() {
  const { data: session, status } = useSession();

  return (
    <nav className="bg-black text-taxi-yellow p-4 border-b-4 border-black flex justify-between items-center font-black uppercase sticky top-0 z-50">
      <Link href="/" className="text-2xl italic tracking-tighter hover:scale-105 transition-transform">
        Portal
      </Link>
      
      <div className="flex gap-4 items-center">
        <NavLink href="/" className="px-4 py-2">Головна</NavLink>
        
        {status === "authenticated" ? (
          <>
            <NavLink href="/articles" className="px-4 py-2">Статті</NavLink>
            <NavLink href="/profile" className="px-4 py-2">
              👤 {session?.user?.name || "Профіль"}
            </NavLink>
            <button 
              onClick={() => signOut({ callbackUrl: '/' })} 
              className="bg-red-500 text-white px-4 py-2 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-red-600 active:translate-x-1 active:translate-y-1 active:shadow-none transition-all font-black uppercase text-[10px]"
            >
              Вихід
            </button>
          </>
        ) : (
          <NavLink href="/auth/signin" className="px-4 py-2 bg-taxi-yellow text-black">
            Увійти
          </NavLink>
        )}
      </div>
    </nav>
  );
}