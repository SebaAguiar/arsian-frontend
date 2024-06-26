import createNextIntlPlugin from 'next-intl/plugin';

/** @type {import('next').NextConfig} */

const withNextIntl = createNextIntlPlugin();


const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/dvuqyaegw/**',
      },
    ],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.module.rules.push({
        test: /\.pdf$/,
        use: 'file-loader?name=[path][name].[ext]',
      });
    }
    return config;
  },
  reactStrictMode: true,
};

export default withNextIntl(nextConfig);
