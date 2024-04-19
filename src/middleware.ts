import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from '@/config';
import { localePrefix } from '@/config';

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix,
});

export const config = {
  matcher: ['/', '/(es|en)/:path*'],
};
