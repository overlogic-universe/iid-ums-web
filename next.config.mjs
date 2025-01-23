/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: false,
    unoptimized: true,
    images: {
        remotePatterns: [
            {
                hostname: "mpyoqbpkfxoyaqrfzbht.supabase.co"
            }
        ]
    },
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
      },
};

export default nextConfig;
