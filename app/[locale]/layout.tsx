import '../globals.css';
import { notFound } from 'next/navigation';
import { copy } from '@/lib/content';
export const dynamicParams = false;
export function generateStaticParams() { return [{ locale: 'en' }]; }
const initTheme = `(function(){try{var t=localStorage.getItem('identity-theme');document.documentElement.dataset.theme=t==='light'?'light':'dark'}catch(e){document.documentElement.dataset.theme='dark'}})()`;
export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (locale !== 'en') notFound();
  return <html lang={copy[locale].lang} data-theme="dark" suppressHydrationWarning><head><script dangerouslySetInnerHTML={{ __html: initTheme }} /><meta name="color-scheme" content="light dark" /></head><body>{children}</body></html>;
}
