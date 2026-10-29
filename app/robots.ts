import type { MetadataRoute } from 'next';
import { settings, demoMode } from '@/lib/content';
export const dynamic = 'force-static';
export default function robots(): MetadataRoute.Robots { return { rules: { userAgent: '*', ...(demoMode ? { disallow: '/' } : { allow: '/' }) }, sitemap: `${settings.siteUrl}/sitemap.xml` }; }
