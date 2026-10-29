# 內容維護指南

內容集中於 `lib/content.ts`，不必修改版面元件。這一版先建立框架，沒有虛構經歷或作品。公開頁面的「內容整理中」是刻意保留的狀態。

## 個人與外部連結

- `settings.githubUsername` / `githubUrl`：目前採用已確認的 Jingw72。
- `settings.blogUrl` / `cvUrl` / `linkedinUrl` / `contactEmail`：取得實際公開連結後再填入。空字串不會顯示按鈕。
- `copy.en` / `copy.zh`：首頁文字、導覽及區塊標題。目前定位文字表達研究興趣與職涯方向，不代表已任職的職稱。
- 如修改網域，須同步更新入口頁 `app/(entry)/page.tsx` 中的 metadata，並調整測試網址。

## 加入作品

在 `works` 陣列加入一筆資料，格式如下。以下僅為**格式說明**，請替換為自己的真實資料後再發布：

```ts
{
  id: 'stable-project-id',
  copy: {
    en: { title: 'Approved English title', summary: 'An accurate description of the work.' },
    zh: { title: '經確認的中文名稱', summary: '準確說明作品、貢獻與成果。' },
  },
  tags: ['Data Analysis', 'Engineering'],
  stack: ['Python'],
  links: [{ label: 'GitHub', url: 'https://github.com/your-account/your-repo' }],
}
```

- 每份作品只加入一次，使用穩定的 `id`。`tags` 可複選。
- 篩選採「單次選一個分類」，顯示包含該標籤的所有作品；All 顯示全部。
- 可選填 `problem`、`contribution`、`outcome`、`limitations`，放在各語系的 `copy` 內。
- 沒有外部連結就使用 `links: []`，不製作假的或停用的按鈕。
- 沒有經審核的中文時省略 `copy.zh`；中文介面會顯示英文內容及缺譯提示，並以 `lang="en"` 標示正文。
- 更新英文時，請同時確認中文仍與原文一致；未確認時先移除舊中文，使用英文備援。

## 加入其他內容

`Experience`、`Education`、`SkillGroup` 的型別也在同一檔案中。經歷可分 professional / research / independent。沒有任職組織或時間時，不要自行補造。

來源文件、內部 TODO、私人資料不要貼到公開資料欄位。不要將 Git 提交用信箱自動當成公開聯絡信箱。回測與實盤結果須明確區分。

## 發布前

執行 `npm run lint`、`npm run typecheck`、`npm test`、`npm run build`、`npm run check:output`。首次執行瀏覽器測試前先執行 `npx playwright install chromium`，再執行 `npm run test:e2e`。

## 虛構資料預覽

`lib/demo-content.ts` 的資料全部是虛構範例，不是網站擁有者的真實履歷。

- `npm run demo:dev`：開啟帶示範資料的開發預覽。
- `npm run demo:build`：建立帶示範資料的靜態預覽，接著 `node scripts/serve.mjs`。
- 一般的 `npm run build` 與 GitHub Actions 不啟用示範資料，會使用 `lib/content.ts` 中的正式資料。
- 預覽顯示醒目說明，虛構機構／學歷也個別標示，且設為 noindex。
- 請勿將預覽輸出的 `out/` 直接當成自己的真實履歷發布。正式部署前重新執行 `npm run build`。

## 英文版與新視覺方向

目前只輸出 `/en/`，不產生中文路由或語言切換。中文欄位可留在來源資料備存，但不公開顯示。學歷的 `period` 不顯示；經歷日期不受影響。

淺色使用明亮暖白 `#f8f7f2`，深色使用深灰藍 `#172330`。標題為直立襯線 Newsreader，內文為 Manrope；開源字體及授權在 `public/fonts/`。

## 個人照片

把照片存放於 `public/`（例如 `public/portrait.jpg`），再設定 `settings.photoUrl: '/portrait.jpg'` 與 `settings.photoAlt`。未提供照片時顯示預留區，並不提供上傳功能。照片以 4:5 裁切；手機版縮成右上方的小幅肖像。學歷使用無年份的雙欄排版，手機上改為單欄。
