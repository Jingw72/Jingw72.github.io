import Link from 'next/link';
import { demoMode } from '@/lib/content';
export const metadata = { title: demoMode ? 'Fictional design preview' : 'Jingw72 — Portfolio', robots: { index: !demoMode, follow: !demoMode }, alternates: { canonical: 'https://jingw72.github.io/en/' } };
export default function Entry() { return <main className="entry"><p className="eyebrow">JINGW72 / PORTFOLIO</p><h1>Welcome.</h1><Link className="button primary" href="/en/">Enter in English →</Link><script dangerouslySetInnerHTML={{ __html: "window.location.replace('/en/' + window.location.hash)" }} /></main>; }
