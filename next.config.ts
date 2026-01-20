import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configuración de Turbopack (necesaria para Next.js 16)
  turbopack: {},
  
  typescript: {
    ignoreBuildErrors: true,
  },
  
  reactStrictMode: false,
  
  // Configuración de webpack (solo se usa si se ejecuta con --webpack)
  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        ignored: ['**/*'],
      };
    }
    return config;
  },
};

export default nextConfig;