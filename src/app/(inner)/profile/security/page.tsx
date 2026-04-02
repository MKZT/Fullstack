"use client";

export default function SecurityPage() {
  return (
    <div className="p-8 max-w-md mx-auto">
      <h1 className="text-3xl font-black uppercase mb-6 italic">Зміна пароля</h1>
      
      <form className="space-y-4 border-4 border-black p-6 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <input type="password" placeholder="Поточний пароль" className="w-full p-3 border-2 border-black font-bold uppercase" />
        <input type="password" placeholder="Новий пароль" className="w-full p-3 border-2 border-black font-bold uppercase" />
        <input type="password" placeholder="Підтвердіть пароль" className="w-full p-3 border-2 border-black font-bold uppercase" />
        
        <button className="w-full bg-black text-taxi-yellow p-4 font-black uppercase hover:bg-red-500 hover:text-white transition-all border-2 border-black">
          Оновити пароль
        </button>
      </form>
    </div>
  );
}