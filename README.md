# Claude Code 完全マニュアル

薄井匠氏（道草株式会社）の Claude Code 講座 初級編・応用編（参加者 約 10,000人 / 計 6 時間）の内容を、検索しやすい体系的なマニュアルブックに再構成した非公式の学習用ドキュメントです。

🔗 **公開サイト**: [https://claude-code-manual-629.netlify.app](https://claude-code-manual-629.netlify.app)

## 何が読めるか

- **初級編 10 章** — Claude Code の正体、権限モード、モデル選択、実演デモ、MCP、Skills、チームエージェント、プロンプト作法、安全運用
- **応用編 10 章** — CLAUDE.md 設計、GitHub 連携、Vercel/Netlify デプロイ、API 連携、セキュリティ、Supabase、Playwright/Context7/Dispatch/Routines、AI 動画編集、個人ワークフロー
- **付録** — ツール早見表 / 名言集 / クレジット

## ローカル起動

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # docs/.vitepress/dist/ にビルド出力
npm run preview  # ビルド結果のプレビュー
```

## 技術スタック

- **[VitePress](https://vitepress.dev/)** ベースの静的サイト
- **Netlify** で自動デプロイ（`main` への push 連動）
- 全ページ **Markdown** で記述

## ライセンス

本マニュアルは非公式の学習用ドキュメントです。
講座原典の権利は薄井匠氏 / 道草株式会社に帰属します。
Claude Code の最新仕様は [Anthropic 公式ドキュメント](https://docs.anthropic.com/) を参照してください。
