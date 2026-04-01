// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// Імпортуємо твоє нове меню
import Menu from "@/src/components/Menu"; 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Навчальний проєкт | Next.js",
  description: "Виконання завдання 3 та 4",
};

console.log(">>> SERVER CONSOLE: API URL =", process.env.NEXT_PUBLIC_API_URL);
console.log(">>> SERVER CONSOLE: SECRET =", process.env.SERVER_SECRET_KEY);

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
      <body className="min-h-full flex flex-col bg-gray-50">
        {/* Підключаємо меню, яке тепер буде на кожній сторінці */}
        <header>
          <Menu />
        </header>

        {/* Основний контент сторінок */}
        <main className="flex-grow">
          {children}
        </main>

        <footer className="p-4 text-center text-gray-400 text-sm border-t bg-white">
          © 2026 Навчальний проєкт Next.js
        </footer>
      </body>
    </html>
  );
}