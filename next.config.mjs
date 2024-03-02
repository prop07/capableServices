/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["www.onlineoptimism.com","plus.unsplash.com","images.unsplash.com","img.freepik.com", 'img.lovepik.com' ], // Add the hostname(s) here
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },

    
};

export default nextConfig;
