// src/app/(inner)/layout.tsx
import Navbar from "@/src/components/Navbar"; // ПЕРЕВІР, ЩО ТУТ Navbar, А НЕ NavLink!

export default function InnerLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#f0f0f0]">
      <header>
        <Navbar /> 
      </header>
      
      <main className="flex-1 p-6">
        <div className="max-w-7xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}