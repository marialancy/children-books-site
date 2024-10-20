/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/children-books-site', // Adjust for GitHub Pages
    images: {
      unoptimized: true, // Disable image optimization for GitHub Pages
    },
};

export default nextConfig;
