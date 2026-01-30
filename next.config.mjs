/** @type {import('next').NextConfig} */
const nextConfig = {
    // Optimize images
    images: {
        formats: ['image/webp'],
    },

    // Disable x-powered-by header for security
    poweredByHeader: false,

    // Enable compiler optimizations
    compiler: {
        removeConsole: process.env.NODE_ENV === 'production' ? {
            exclude: ['error', 'warn'],
        } : false,
    },

    // Experimental features for better performance
    experimental: {
        // Enable optimized package imports
        optimizePackageImports: ['next/image'],

        // Turbopack is already enabled by default in dev mode
        // These settings optimize its behavior
        turbotrace: {
            // Reduce file system watching overhead
            logLevel: 'error',
        },
    },
};

export default nextConfig;
