import NavLink from "@/src/components/NavLink";

export default function InnerLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="border-b p-4 flex gap-4 bg-white shadow-sm">
        <NavLink href="/">На головну</NavLink>
        <NavLink href="/articles">Статті</NavLink>
        <NavLink href="/profile/settings">Налаштування</NavLink>
        <NavLink href="/profile/security">Безпека</NavLink>
      </nav>
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
