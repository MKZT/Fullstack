import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  
  // Налаштування для виправлення помилок WebSocket / HMR
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      config.watchOptions = {
        poll: 1000,         // Перевіряти зміни файлів кожну секунду (критично для Linux/Docker)
        aggregateTimeout: 300,
      };
    }
    return config;
  },

};

export default nextConfig;