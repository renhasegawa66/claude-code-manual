# 応用編 — はじめに

初級編で **Claude Code の基礎体力** が入った前提で、
本パートでは **「個人で作ったアプリを、世界に公開できる状態まで持っていく」** までの実戦テクニックを 10 章で扱います。

<div class="section-quote">
「<strong>枠組みは人から学べ、細かい部分は AI に聞け</strong>」<br>— 薄井 匠
</div>

## 本パートのゴール

1. **`CLAUDE.md`** で自分専用の Claude Code を作れる
2. **GitHub** でバージョン管理し、**Vercel / Netlify** に自動デプロイできる
3. **API** を安全に呼び出し、外部データと連携できる
4. **`.env` / 環境変数** を使い、API キーを漏らさない
5. **Supabase** などのバックエンドと組み合わせ、認証付きアプリを動かせる
6. **Playwright MCP・Context7・Dispatch・Routines** で運用を一段引き上げる
7. **AI 動画編集** など、Claude Code の応用ユースケースの全体像を持つ

## 章一覧

| 章 | テーマ |
| --- | --- |
| [1](/advanced/01-architecture) | Claude Code の内部構造 |
| [2](/advanced/02-claude-md) | `CLAUDE.md` 設計術 |
| [3](/advanced/03-github) | GitHub 連携 |
| [4](/advanced/04-deploy) | デプロイ（Vercel / Netlify） |
| [5](/advanced/05-api) | API 連携の基本 |
| [6](/advanced/06-security) | API キーとセキュリティ |
| [7](/advanced/07-fullstack) | フロント／バック分離と Supabase |
| [8](/advanced/08-mcp-advanced) | 応用 MCP（Playwright / Context7 / Dispatch / Routines） |
| [9](/advanced/09-video) | AI 動画編集ワークフロー |
| [10](/advanced/10-workflow) | 個人ワークフローと総まとめ |

::: warning 注意
応用編は **不可逆操作** が増えます。
GitHub への push、デプロイ、API キーの扱い、メール送信 — どれも一度漏れると取り返しがつかないものです。
**手を動かす前に各章を一度通読** してから実装してください。
:::
