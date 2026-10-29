// Fictional design fixtures, shown only with NEXT_PUBLIC_DEMO_CONTENT=true.
// These entries are not the website owner's biography or credentials.
import type { Experience, Work, Education, SkillGroup } from './content';
export const demoProfile = {
  name: { en: 'Alex Lin', zh: '林以衡' },
  headline: { en: 'Quantitative research.\nA focus on financial risk.', zh: '數量研究，\n聚焦金融風險。' },
  intro: {
    en: 'I turn complex data into clear, testable ideas. My work connects statistical modeling, financial risk, and practical software — informed by an earlier chapter in quantum computing research.',
    zh: '我將複雜資料轉化為清楚、可驗證的想法，結合統計建模、金融風險與軟體實作，也將過往量子計算研究中的嚴謹思考帶入新的問題。',
  },
};
export const demoExperiences: Experience[] = [
  {
    id: 'demo-research-analyst', type: 'professional', period: '2024 — 2026', links: [],
    copy: {
      en: { role: 'Quantitative Research Analyst', organization: 'Northline Analytics · Fictional organization', summary: 'Explored market data and portfolio risk with a small research team, translating open-ended questions into reproducible analyses.', achievements: ['Built a Python research workflow for data validation, factor analysis, and experiment tracking.', 'Developed scenario-based risk reports that made assumptions and model limitations explicit.'] },
      zh: { role: '數量研究分析師', organization: 'Northline Analytics · 虛構機構', summary: '在小型研究團隊中分析市場資料與投資組合風險，將開放式問題整理成可重現的分析流程。', achievements: ['建立 Python 研究流程，整合資料驗證、因子分析與實驗紀錄。', '設計情境風險報告，清楚呈現模型假設與限制。'] },
    },
  },
  {
    id: 'demo-quantum-research', type: 'research', period: '2022 — 2024', links: [],
    copy: {
      en: { role: 'Graduate Researcher · Quantum Computing', organization: 'Meridian Institute of Science · Fictional institution', summary: 'Studied small-scale variational quantum algorithms, with an emphasis on numerical experiments and reproducible results.', achievements: ['Designed simulation experiments to compare optimization behavior under different noise assumptions.'] },
      zh: { role: '研究生研究員 · 量子計算', organization: 'Meridian Institute of Science · 虛構學校', summary: '研究小規模變分量子演算法，著重數值實驗與結果重現。', achievements: ['設計模擬實驗，比較不同雜訊假設下的最佳化行為。'] },
    },
  },
];
export const demoWorks: Work[] = [
  {
    id: 'demo-risk-atlas', tags: ['Quant', 'Financial Risk', 'Data Analysis'], stack: ['Python', 'NumPy', 'Plotly'], links: [], featured: true,
    copy: {
      en: { title: 'Risk Atlas', summary: 'A portfolio risk workbench for exploring how market shocks flow through a multi-asset allocation.', contribution: 'Compared historical simulation and parametric VaR; built scenario views for drawdowns and concentration.', limitations: 'Research prototype using synthetic data. No live trading or investment advice.' },
      zh: { title: 'Risk Atlas｜投資組合風險工作台', summary: '探索市場衝擊如何影響多資產配置，將風險假設轉化為可理解的情境。', contribution: '比較歷史模擬與參數法 VaR，建立回撤與集中度的情境檢視。', limitations: '使用合成資料的研究原型，未用於實盤交易或投資建議。' },
    },
  },
  {
    id: 'demo-market-observatory', tags: ['Data Analysis', 'Engineering'], stack: ['Python', 'SQL', 'DuckDB'], links: [],
    copy: {
      en: { title: 'Market Observatory', summary: 'A reproducible data pipeline that turns fragmented market datasets into analysis-ready tables.', contribution: 'Added schema checks, missing-data diagnostics, and a concise notebook report for each dataset.' },
      zh: { title: 'Market Observatory｜市場資料觀測站', summary: '將分散的市場資料整理為可分析資料表，建立可重現的資料處理流程。', contribution: '整合結構驗證、缺值診斷，並為每份資料產生精簡的分析報告。' },
    },
  },
  {
    id: 'demo-focus-ledger', tags: ['Engineering', 'Personal Projects'], stack: ['TypeScript', 'Next.js', 'Local storage'], links: [],
    copy: {
      en: { title: 'Focus Ledger', summary: 'A lightweight, browser-local planning tool for connecting daily tasks with longer-term projects.', contribution: 'Designed an accessible interface with keyboard navigation and private, on-device storage.' },
      zh: { title: 'Focus Ledger｜日常計畫工具', summary: '輕量的瀏覽器端計畫工具，連結每日任務與長期專案。', contribution: '設計支援鍵盤操作的介面，資料保存在使用者裝置。' },
    },
  },
  {
    id: 'demo-quantum-notebook', tags: ['Quant', 'Quantum Computing'], stack: ['Python', 'Qiskit', 'Jupyter'], links: [],
    copy: {
      en: { title: 'Variational Quantum Notebook', summary: 'A numerical study of optimization sensitivity in small variational quantum circuits.', contribution: 'Compared initialization strategies and noise settings through reproducible simulation experiments.', limitations: 'Simulation only; no claim of quantum advantage.' },
      zh: { title: '變分量子實驗筆記', summary: '以數值實驗探索小規模變分量子電路的最佳化敏感度。', contribution: '透過可重現的模擬，比較初始化策略與不同雜訊設定。', limitations: '僅為模擬研究，不宣稱量子優勢。' },
    },
  },
];
export const demoSkills: SkillGroup[] = [
  { id: 'demo-methods', copy: { en: { title: 'Research & analysis', items: ['Statistical modeling', 'Time-series analysis', 'Monte Carlo simulation', 'Experimental design'] }, zh: { title: '研究與分析', items: ['統計建模', '時間序列分析', '蒙地卡羅模擬', '實驗設計'] } } },
  { id: 'demo-engineering', copy: { en: { title: 'Programming & tools', items: ['Python · pandas · NumPy', 'SQL · DuckDB', 'TypeScript · React', 'Git · reproducible workflows'] }, zh: { title: '程式與工具', items: ['Python · pandas · NumPy', 'SQL · DuckDB', 'TypeScript · React', 'Git · 可重現工作流程'] } } },
  { id: 'demo-domains', copy: { en: { title: 'Domain foundations', items: ['Portfolio risk & VaR', 'Financial markets', 'Model assumptions & validation', 'Quantum computing fundamentals'] }, zh: { title: '領域基礎', items: ['投資組合風險與 VaR', '金融市場', '模型假設與驗證', '量子計算基礎'] } } },
];
export const demoEducation: Education[] = [
  { id: 'demo-masters', period: '2022 — 2024', links: [], copy: { en: { institution: 'Meridian Institute of Science', qualification: 'MSc, Applied Mathematics · Fictional degree', details: 'Research focus: numerical methods and variational quantum algorithms.' }, zh: { institution: 'Meridian Institute of Science', qualification: '應用數學碩士 · 虛構學歷', details: '研究方向：數值方法與變分量子演算法。' } } },
  { id: 'demo-bachelors', period: '2018 — 2022', links: [], copy: { en: { institution: 'Westbridge University', qualification: 'BSc, Mathematics · Fictional degree', details: 'Foundations in probability, linear algebra, optimization, and scientific computing.' }, zh: { institution: 'Westbridge University', qualification: '數學學士 · 虛構學歷', details: '學習機率、線性代數、最佳化與科學計算。' } } },
];
