import Link from 'next/link';

export default function Home() {
  const navigation = [
    { 
      name: 'База статей', 
      href: '/articles', 
      description: 'Повний перелік публікацій з JSONPlaceholder API',
      category: 'Архів',
      icon: '📂'
    },
    { 
      name: 'Обрані матеріали', 
      href: '/articles/favorite', 
      description: 'Ваші пріоритетні статті з незалежними індикаторами',
      category: 'Топ',
      icon: '⭐'
    },
    { 
      name: 'Статичний контент', 
      href: '/articles/1', 
      description: 'Демонстрація технології SSG (Static Site Generation)',
      category: 'Швидка',
      icon: '⚡'
    },
    { 
      name: 'Налаштування', 
      href: '/profile/settings', 
      description: 'Керування профілем користувача та безпекою',
      category: 'Кабінет',
      icon: '⚙️'
    },
  ];

  return (
    <main className="min-h-screen bg-white py-12 px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Хедер блоку */}
        <div className="border-l-8 border-taxi-yellow pl-6 mb-16">
          <h1 className="text-6xl font-black text-taxi-black uppercase leading-none">
            Матеріали<br/>Проєкту
          </h1>
          <p className="text-gray-500 mt-4 font-medium text-lg max-w-md">
            Досліджуйте дані через сучасний інтерфейс з використанням Next.js та Tailwind.
          </p>
        </div>
        
        {/* Сітка карток */}
        <nav className="grid grid-cols-1 tablet:grid-cols-2 gap-8">
          {navigation.map((item) => (
            <Link 
              key={item.href} 
              href={item.href}
              className="group flex flex-col bg-taxi-gray p-8 rounded-taxi border-2 border-transparent hover:border-taxi-black hover:bg-white transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-6">
                <span className="text-4xl">{item.icon}</span>
                <span className="bg-taxi-yellow text-taxi-black text-[10px] font-black px-2 py-1 uppercase italic">
                  {item.category}
                </span>
              </div>
              
              <h2 className="text-2xl font-black text-taxi-black mb-3 group-hover:text-taxi-yellow transition-colors">
                {item.name}
              </h2>
              
              <p className="text-gray-600 text-sm mb-8 flex-grow leading-relaxed">
                {item.description}
              </p>

              <div className="flex items-center text-xs font-black uppercase tracking-widest border-t border-gray-200 pt-4 group-hover:border-taxi-yellow">
                Читати далі <span className="ml-2 group-hover:translate-x-3 transition-transform">→</span>
              </div>
            </Link>
          ))}
        </nav>

        {/* Футер для звіту */}
        <footer className="mt-20 flex justify-between items-end border-b-4 border-taxi-black pb-4">
          <div className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">
            Next.js App Router / TypeScript / Tailwind CSS
          </div>
          <div className="text-right">
            <span className="block text-[10px] font-bold uppercase text-gray-400">Розробник</span>
            <span className="font-black text-taxi-black text-xl italic">NIKITA.</span>
          </div>
        </footer>
      </div>
    </main>
  );
}