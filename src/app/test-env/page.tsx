"use client"; 
import { useEffect } from 'react';

export default function EnvTestPage() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const envMode = process.env.NEXT_PUBLIC_ENVIRONMENT;
  
  const serverSecret = process.env.SERVER_SECRET_KEY;

  useEffect(() => {
    console.log("--- Browser Console ---");
    console.log("API URL:", apiUrl);
    console.log("Env Mode:", envMode);
    console.log("Server Secret (should be undefined):", serverSecret);
  }, [apiUrl, envMode, serverSecret]);

  return (
    <div className="p-8 bg-white border-4 border-taxi-black shadow-[10px_10px_0px_0px_rgba(255,204,0,1)] max-w-2xl mx-auto mt-10">
      <h1 className="text-3xl font-black uppercase italic mb-6 border-b-4 border-taxi-yellow inline-block">
        Env Variables Test
      </h1>
      
      <div className="space-y-4 font-mono bg-taxi-gray p-6 border-2 border-taxi-black">
        <p><strong>NEXT_PUBLIC_API_URL:</strong> <span className="text-blue-600">{apiUrl}</span></p>
        <p><strong>NEXT_PUBLIC_ENVIRONMENT:</strong> <span className="text-green-600">{envMode}</span></p>
        <p><strong>SERVER_SECRET_KEY:</strong> <span className="text-red-500">{serverSecret || "HIDDEN (Server Only)"}</span></p>
      </div>

      <p className="mt-6 text-xs font-bold text-gray-400 uppercase italic">
        Перевірте консоль браузера та термінал сервера
      </p>
    </div>
  );
}