"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string; 
}

export default function NavLink({ href, children, className = "" }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link 
      href={href} 
      className={`transition-all duration-300 rounded-lg font-black uppercase tracking-tight flex items-center ${className} ${
        isActive 
          ? 'bg-taxi-yellow text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]' 
          : 'hover:bg-white/10 hover:scale-105 text-taxi-yellow'
      }`}
    >
      {children}
    </Link>
  );
}