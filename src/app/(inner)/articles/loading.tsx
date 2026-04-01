export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center p-20">
      <div className="w-16 h-16 border-8 border-taxi-gray border-t-taxi-yellow rounded-full animate-spin"></div>
      <p className="mt-4 font-black text-taxi-black uppercase tracking-widest animate-pulse">
        Отримання даних...
      </p>
    </div>
  );
}