"use client"; // ОБОВ'ЯЗКОВО для використання useSession
import Link from 'next/link';
import { useSession, signOut } from "next-auth/react";
import styles from './Menu.module.css';

export default function Menu() {
  // 1. Отримуємо дані про сесію
  const { data: session, status } = useSession();

  return (
    <nav className={styles.navWrapper}>
      <div className={styles.logo}>🚖 Next.Taxi</div>
      
      <div className="flex gap-4 items-center">
        <Link className={styles.navLink} href="/">Головна</Link>
        <Link className={styles.navLink} href="/articles">Статті</Link>
        
        {/* 2. Динамічна зміна кнопок залежно від статусу */}
        {status === "authenticated" ? (
          <>
            <Link className={styles.navLink} href="/articles/favorite">Обране</Link>
            
            {/* Кнопка профілю з іменем */}
            <Link className={styles.navLink} href="/profile" style={{ fontWeight: '900', color: '#ffcc00' }}>
              👤 {session?.user?.name || "Профіль"}
            </Link>
            
            <button 
              onClick={() => signOut({ callbackUrl: '/' })}
              className="bg-red-600 text-white px-3 py-1 border-2 border-black font-bold uppercase text-[10px] ml-2"
            >
              Вихід
            </button>
          </>
        ) : (
          /* Кнопка входу, якщо статус unauthenticated */
          <Link 
            href="/auth/signin" 
            className="bg-taxi-yellow text-black px-4 py-2 border-2 border-black font-black uppercase ml-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
          >
            Увійти
          </Link>
        )}
      </div>
    </nav>
  );
}