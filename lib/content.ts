import { demoProfile, demoExperiences, demoWorks, demoEducation, demoSkills } from './demo-content';
export type Locale = 'en' | 'zh';
export type Localized<T> = { en: T; zh?: T };
export const tags = ['Quant', 'Financial Risk', 'Data Analysis', 'Engineering', 'Personal Projects', 'Quantum Computing'] as const;
export type Tag = typeof tags[number];
export type Link = { label: string; url: string };
export type Work = { id: string; copy: Localized<{ title: string; summary: string; problem?: string; contribution?: string; outcome?: string; limitations?: string }>; tags: Tag[]; stack: string[]; links: Link[]; status?: string; featured?: boolean };
export type Experience = { id: string; type: 'professional' | 'research' | 'independent'; copy: Localized<{ role: string; organization?: string; summary: string; achievements: string[] }>; period?: string; links: Link[] };
export type Education = { id: string; copy: Localized<{ institution: string; qualification?: string; details?: string }>; period?: string; links: Link[] };
export type SkillGroup = { id: string; copy: Localized<{ title: string; items: string[] }> };
export const settings = {
  githubUsername: 'Jingw72', siteUrl: 'https://jingw72.github.io', githubUrl: 'https://github.com/Jingw72',
  photoUrl: '', photoAlt: 'Portrait of the portfolio owner',
  blogUrl: '', cvUrl: '', linkedinUrl: '', contactEmail: '',
};
export const demoMode = process.env.NEXT_PUBLIC_DEMO_CONTENT === 'true';
export const profile = demoMode ? demoProfile : {
  name: { en: 'Jingw72', zh: 'Jingw72' },
  headline: { en: 'Quantitative research.\nA focus on financial risk.', zh: '數量研究，\n聚焦金融風險。' },
  intro: { en: 'An evolving professional portfolio focused on quantitative research, financial risk, and data analysis.', zh: '以數量研究、金融風險與資料分析為方向，持續建構中的個人專業作品集。' },
};
// TODO: Add owner-approved facts and public URLs. Never use Git commit email as public contact.
// Empty collections are intentional. Add each item once with a stable id and copy.en/copy.zh.
export const experiences: Experience[] = demoMode ? demoExperiences : [];
export const works: Work[] = demoMode ? demoWorks : [];
export const education: Education[] = demoMode ? demoEducation : [];
export const skills: SkillGroup[] = demoMode ? demoSkills : [];
export function localized<T>(copy: Localized<T>, locale: Locale) {
  return { value: locale === 'zh' && copy.zh ? copy.zh : copy.en, fallback: locale === 'zh' && !copy.zh };
}
export function filterWorks(items: Work[], tag: Tag | 'All') { return tag === 'All' ? items : items.filter(item => item.tags.includes(tag)); }
export function validateContent() {
  for (const items of [works, experiences, education, skills]) {
    if (new Set(items.map(x => x.id)).size !== items.length) throw new Error('Duplicate content ID');
    for (const item of items) if (!/^[a-z0-9-]+$/.test(item.id)) throw new Error('Invalid stable ID');
  }
  for (const work of works) {
    if (!work.copy.en.title.trim() || !work.copy.en.summary.trim() || !work.tags.length) throw new Error('Incomplete work');
    if (work.tags.some(tag => !tags.includes(tag))) throw new Error('Unknown tag');
  }
  for (const item of [...works, ...experiences, ...education]) {
    for (const link of item.links) if (!/^https:\/\//.test(link.url) || !link.label.trim()) throw new Error('Invalid public link');
  }
}
export const sections = ['about', 'experience', 'work', 'skills', 'education', 'contact'] as const;
export const copy = {
  en: {
    lang: 'en', title: 'Jingw72 — Quantitative Research & Data Analysis', description: 'A professional portfolio framework focused on quantitative research, financial risk, and data analysis. Selected work and experience will be added over time.',
    nav: ['About', 'Experience', 'Work', 'Skills', 'Contact'], skip: 'Skip to content', theme: 'Switch color theme', light: 'Light', dark: 'Dark', language: '切換至繁體中文', index: 'PROFESSIONAL PORTFOLIO', note: 'A portfolio in progress',
    hero: ['Quantitative', 'thinking.', 'Practical', 'perspective.'], intro: 'An evolving professional portfolio focused on quantitative research, financial risk, and data analysis.', interests: 'Research interests & career direction', disciplines: ['Quantitative Research', 'Financial Risk', 'Data Analysis'], viewWork: 'Explore selected work', github: 'GitHub', cv: 'Download CV', blog: 'Blog', scroll: 'Scroll to explore',
    experience: 'Experience', experienceSub: 'The work behind the perspective.', experienceEmpty: 'The story is taking shape.', experienceBody: 'Professional experience, research, and independent contributions will be added here.',
    work: 'Selected work', workSub: 'Questions explored. Ideas made tangible.', all: 'All work', workEmpty: 'Good work deserves a closer look.', workBody: 'Selected research, analyses, and engineering projects will appear here as they are ready to share.', noResults: 'No work matches this filter.',
    skills: 'Methods & tools', skillsSub: 'A toolkit, grounded in practice.', skillsEmpty: 'Capabilities, with context.', skillsBody: 'Methods, programming tools, and domain knowledge will be listed alongside the work that supports them.',
    education: 'Education', educationSub: 'Foundations for the next question.', educationEmpty: 'The foundations matter.', educationBody: 'Education and earlier research background will be added here.',
    contact: 'Let’s connect.', contactSub: 'Continue the conversation.', contactBody: 'Find my public profile and repositories on GitHub.', profile: 'Visit GitHub profile', email: 'Email me', fallback: 'This item is currently available in English only.', footer: 'Quantitative research. Thoughtful engineering.', top: 'Back to top', empty: 'CONTENT IN PROGRESS', tags: { 'Quant': 'Quant', 'Financial Risk': 'Financial Risk', 'Data Analysis': 'Data Analysis', 'Engineering': 'Engineering', 'Personal Projects': 'Personal Projects', 'Quantum Computing': 'Quantum Computing' },
  },
  zh: {
    lang: 'zh-TW', title: 'Jingw72 — 數量研究與資料分析', description: '以數量研究、金融風險與資料分析為方向的個人作品集框架，經歷與精選作品將持續補充。',
    nav: ['關於', '經歷', '作品', '技能', '聯絡'], skip: '跳至主要內容', theme: '切換色彩主題', light: '淺色', dark: '深色', language: 'Switch to English', index: '個人專業作品集', note: '持續建構中的作品集',
    hero: ['以量化', '思考。', '從實務', '出發。'], intro: '以數量研究、金融風險與資料分析為方向，持續建構中的個人專業作品集。', interests: '研究興趣與職涯方向', disciplines: ['數量研究', '金融風險', '資料分析'], viewWork: '探索精選作品', github: 'GitHub', cv: '下載履歷', blog: '部落格', scroll: '向下探索',
    experience: '經歷', experienceSub: '在每一次實踐中，累積觀點。', experienceEmpty: '經歷，逐步成形。', experienceBody: '工作經歷、研究背景與獨立完成的成果，將陸續整理於此。',
    work: '精選作品', workSub: '探索問題，讓想法具體成形。', all: '全部作品', workEmpty: '值得細看，也值得等待。', workBody: '研究、資料分析與工程專案，將在準備好公開時逐步加入。', noResults: '目前沒有符合此分類的作品。',
    skills: '方法與工具', skillsSub: '讓能力，建立在實踐之上。', skillsEmpty: '不只列出工具，更說明應用。', skillsBody: '研究方法、程式工具與領域知識，將搭配實際作品一同呈現。',
    education: '學歷', educationSub: '為下一個問題，打好基礎。', educationEmpty: '每一步，都有其基礎。', educationBody: '教育背景與早期研究經驗，將陸續整理於此。',
    contact: '保持聯繫。', contactSub: '讓對話繼續。', contactBody: '歡迎透過 GitHub 查看我的公開個人頁面與程式碼儲存庫。', profile: '前往 GitHub 個人頁面', email: '寄送電子郵件', fallback: '此項內容目前僅提供英文版本。', footer: '量化思考，嚴謹實作。', top: '回到頂端', empty: '內容整理中', tags: { 'Quant': '數量研究', 'Financial Risk': '金融風險', 'Data Analysis': '資料分析', 'Engineering': '工程開發', 'Personal Projects': '個人專案', 'Quantum Computing': '量子計算' },
  },
};
