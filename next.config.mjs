/** @type {import('next').NextConfig} */
const nextConfig = {
  /* Keep your active compiler flags */
  reactCompiler: true,

  /* FORCES NEXT.JS TO GENERATE STATIC HTML ENGINES */
  output: 'export', 

  /* DISABLES IMAGE OPTIMIZATION (Required by GitHub Pages for static sites) */
  images: {
    unoptimized: true, 
  },

  /* TRACES ASSETS DIRECTLY TO YOUR REPOSITORY NAME */
  basePath: '/IOT-Presentation',
  assetPrefix: '/IOT-Presentation',
};

export default nextConfig;