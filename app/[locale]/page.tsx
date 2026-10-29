import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Portfolio from '@/components/portfolio';
import { copy, settings, demoMode, validateContent } from '@/lib/content';
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (locale !== 'en') return {};
  const c = copy[locale];
  return { metadataBase: new URL(settings.siteUrl), title: demoMode ? `${locale === 'en' ? 'Fictional design preview — Alex Lin' : '虛構設計預覽 — 林以衡'}` : c.title, description: c.description, alternates: { canonical: '/en/' }, openGraph: { title: demoMode ? 'Fictional design preview — Alex Lin' : c.title, description: demoMode ? 'Fictional content for local layout review.' : c.description, url: `/${locale}/`, type: 'website', locale: locale === 'en' ? 'en_US' : 'zh_TW', siteName: 'Jingw72' }, robots: { index: !demoMode, follow: !demoMode }, icons: { icon: '/icon.svg' } };
}
export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (locale !== 'en') notFound();
  validateContent();
  return <Portfolio locale={locale} />;
}
