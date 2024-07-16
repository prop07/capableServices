/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["firebasestorage.googleapis.com", "plus.unsplash.com","images.unsplash.com", 'img.lovepik.com',"cdn.pixabay.com" , "as2.ftcdn.net"], // Add the hostname(s) here
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
