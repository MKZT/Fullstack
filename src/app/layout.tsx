// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// Імпортуємо твоє меню (переконайся, що в Menu.tsx є useSession)
import Menu from "@/src/components/Menu"; 
// Імпортуємо провайдер сесії
import Providers from "@/src/components/Providers"; 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap', // ФІКС: прибирає помилку preload у консолі
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap', // ФІКС: прибирає помилку preload у консолі
});

export const metadata: Metadata = {
  title: "Next.Taxi | Панель автора",
  description: "Виконання завдання 5: Профіль та Авторизація",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="uk" 
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-gray-50 text-black">
        {/* Providers має бути максимально високо в дереві */}
        <Providers>
          <header className="sticky top-0 z-50">
            <Menu />
          </header>

          <main className="flex-grow">
            {children}
          </main>

          <footer className="p-6 text-center text-gray-400 text-[10px] border-t bg-white uppercase font-black tracking-widest">
            © 2026 Навчальний проєкт Next.js | Zhytomyr Polytechnic
          </footer>
        </Providers>
      </body>
    </html>
  );
}