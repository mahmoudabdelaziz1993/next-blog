import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin(
    './i18n.ts',
);
 
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['loremflickr.com'],
    }
};
 
export default withNextIntl(nextConfig);