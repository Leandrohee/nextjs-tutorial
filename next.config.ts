import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images:{
    remotePatterns:[
      {
        protocol: "https",              
        hostname: "images.pexels.com"         //Configurando imagens desse site para serem importadas
      }
    ]
  }
};

export default nextConfig;
