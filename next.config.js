/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = { 
    output: 'export',
    assetPrefix: isProd ? '/portfolio' : undefined,
    publicRuntimeConfig: { basePath: process.env.BASE_PATH || '' }
}



module.exports = nextConfig
