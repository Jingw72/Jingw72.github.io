# Jingw72 · Professional Portfolio

英文單頁履歷與作品集框架，使用 Next.js App Router、TypeScript、Tailwind CSS 與本地型別化內容。完全靜態匯出，可部署至 GitHub Pages。

## 本機執行

需要 Node.js 22 與 npm。

```bash
npm ci
npm run dev
```

開啟 http://127.0.0.1:3000/en/。

## 編輯內容

所有經歷與作品保存在 `lib/content.ts`。詳見 [內容維護指南](CONTENT_GUIDE.md)。目前沒有填入未確認的經歷、學歷、技能、績效或外部連結。各區塊顯示內容整理中的說明，之後加入資料便會自動使用正式版面。

## 檢查與正式預覽

```bash
npm run lint
npm run typecheck
npm test
npm run build
npm run check:output
npx playwright install chromium
npm run test:e2e
node scripts/serve.mjs
```

正式靜態輸出位於 `out/`；靜態預覽為 http://127.0.0.1:4173/en/。

## 自行部署 GitHub Pages

目標儲存庫：`Jingw72/Jingw72.github.io`。

1. 在 GitHub 儲存庫的 Settings → Pages → Build and deployment → Source 選擇 **GitHub Actions**。
2. 確認 `git remote -v` 指向你的儲存庫。
3. 提交並推送：

```bash
git add .
git commit -m "Build bilingual portfolio framework"
git push -u origin main
```

4. 在 Actions 查看 **Check and deploy portfolio**。流程會執行 lint、typecheck、單元測試、靜態建置、輸出驗證及瀏覽器測試，再部署 `out/`。
5. 流程成功後，檢查 https://jingw72.github.io/、`/en/` 與帶錨點的網址，例如 `/en/#work`。

`/` 以用戶端跳轉進入英文；JavaScript 關閉時保留可操作的英文入口。主題預設深色，僅記住使用者明確選擇；網站僅保留英文版。學歷日期保留在資料中但不顯示，工作經歷日期仍顯示。

## 功能界線

無伺服器、資料庫、登入、站內 Blog 或結帳功能。未提供 Blog、CV、LinkedIn 或公開聯絡信箱前，不顯示相應按鈕。標題使用直立襯線字體 Newsreader，內文使用 Manrope。字體檔與 OFL 授權存放於 `public/fonts/`，不依賴外部字體服務。

Lighthouse 應在發布後以相同手機預設測量英文首頁，目標 Performance ≥ 90、Accessibility ≥ 95；自動無障礙檢查不能取代人工鍵盤操作驗證。
