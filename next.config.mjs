/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        // Set to false for production builds to catch TypeScript errors
        ignoreBuildErrors: false,
    },
    eslint: {
        // Set to false to ignore ESLint errors during builds
        ignoreDuringBuilds: false,
    },
};

export default nextConfig;
