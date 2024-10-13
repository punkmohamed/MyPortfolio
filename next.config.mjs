/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        // Set to false for production builds to catch TypeScript errors
        ignoreBuildErrors: true,
    },
    eslint: {
        // Set to false to ignore ESLint errors during builds
        ignoreDuringBuilds: true,
    },
};

export default nextConfig;
