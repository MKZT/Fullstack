import NavLink from "@/src/components/NavLink";

export default function ArticlesLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="max-w-5xl mx-auto p-6">
      <header className="bg-taxi-black p-6 rounded-t-taxi flex flex-col tablet:flex-row justify-between items-center gap-4">
        <h2 className="text-taxi-yellow font-black uppercase italic tracking-widest text-xl">
          Контент-Менеджер
        </h2>
        <nav className="flex gap-4">
          <NavLink href="/articles/favorite" className="text-white hover:text-taxi-yellow font-bold text-sm uppercase">
            ⭐ Обране
          </NavLink>
          <NavLink href="/articles/create" className="bg-taxi-yellow text-taxi-black px-4 py-2 rounded-lg font-black text-xs uppercase hover:bg-white transition-colors">
            + Створити
          </NavLink>
        </nav>
      </header>
      <div className="bg-white border-x-2 border-b-2 border-taxi-black p-6 rounded-b-taxi shadow-xl">
        {children}
      </div>
    </section>
  );
}