# ツール早見表

講座で名前が挙がったツール・サービス・コマンドを **一覧化** しました。
それぞれリンクが付いているので、ここから一次情報に飛んでください。

## Claude Code 本体

| 名前 | 用途 | リンク |
| --- | --- | --- |
| Claude Code Desktop | 本マニュアル推奨形態 | [claude.ai/code](https://claude.ai/code) |
| Claude Code CLI | ターミナル版 | `npm i -g @anthropic-ai/claude-code` |
| Claude iOS / Android | Dispatch でリモート操作 | App Store / Play Store |

## バージョン管理 / デプロイ

| 名前 | 用途 |
| --- | --- |
| **GitHub** | バージョン管理・コラボレーション |
| **GitHub CLI（`gh`）** | コマンドラインから GitHub 操作 |
| **Vercel** | 自動デプロイ（Next.js 系に強い） |
| **Netlify** | 自動デプロイ（静的サイト全般） |
| **Cloudflare Pages** | 自動デプロイ（CDN 統合） |

## バックエンド / DB

| 名前 | 用途 |
| --- | --- |
| **Supabase** | Auth + PostgreSQL + Storage + Realtime |
| **PostgreSQL** | Supabase の基盤 RDB |

## 決済 / メール / EC（自作しない領域）

| 名前 | 用途 |
| --- | --- |
| **Stripe** | 決済（世界の GDP の約 1.6%）|
| **Square** | 決済 |
| **SendGrid / Resend / Postmark** | メール配信 |
| **Shopify / BASE** | EC |

## 無料 API（練習向け）

| 名前 | URL |
| --- | --- |
| PokeAPI | <https://pokeapi.co/> |
| カーリル図書館 API | <https://calil.jp/api/> |
| NASA API | <https://api.nasa.gov/> |
| Cat API | <https://thecatapi.com/> |
| OpenWeather API | <https://openweathermap.org/api> |

## 商用 API（コラム）

| 名前 | 何ができる |
| --- | --- |
| **Saxo Bank API** | 株 / FX の自動取引（**自己責任**） |

## 応用 MCP

| 名前 | 用途 |
| --- | --- |
| **Playwright MCP** | ブラウザ自動操作・動作テスト |
| **Context7 MCP** | 最新 API ドキュメント自動取得 |
| **Supabase MCP** | Supabase 操作 |
| **GitHub MCP** | リポジトリ操作 |
| **Google Calendar MCP** | カレンダー操作 |
| **Gmail MCP** | 下書き作成（**送信は禁止運用**） |
| **Slack MCP** | メッセージ送受信 |
| **Notion MCP** | ページ・DB 操作 |
| **Google Drive MCP** | ファイル管理 |

## 動画編集

| 名前 | 用途 |
| --- | --- |
| **Remotion** | React で動画組み立て |
| **MLX Whisper** | Apple Silicon 用文字起こし（約 30× 速い） |
| **ElevenLabs API** | 文字起こし代替 |
| **Silero VAD** | 無音区間検出 |
| **budoux** | 日本語の自然な改行 |

## 音声入力

| 名前 | プラットフォーム |
| --- | --- |
| **Aqua Voice** | macOS |
| **TypeRess** | macOS |
| **Voice OS** | macOS |
| **OS 標準音声入力** | macOS / Windows |

## 補助ツール

| 名前 | 用途 |
| --- | --- |
| **Amphetamine** | macOS のスリープ防止 |
| **Clippy** | クリップボード履歴 |
| **Dia** | ブラウザ（閲覧履歴を Skill 入力に活用） |
| **Notion** | メモ・社内ドキュメント |
| **Obsidian** | ローカルマークダウン |
| **Slack** | チームコミュニケーション |
| **Cursor** | `~/.claude/` を覗くのに便利な IDE |

## キーボードショートカット早見

| キー | 効果 | OS |
| --- | --- | --- |
| <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>G</kbd> | Finder でパスを入力してジャンプ | macOS |
| <kbd>Win</kbd> + <kbd>R</kbd> | パスを入力してジャンプ | Windows |
| <kbd>Option</kbd> + 右クリック → パス名をコピー | ファイルパスを取得 | macOS |
| <kbd>Cmd</kbd> + <kbd>N</kbd> | Claude Code を新規ウィンドウで起動 | macOS |
| `/` | 入力欄で Skill 一覧表示 | 共通 |
| `/model` | モデル切替 | CLI 版 |

## Git / GitHub コマンド早見

| コマンド | 意味 |
| --- | --- |
| `git init` | Git 管理を開始 |
| `git add <file>` | 変更をステージング |
| `git commit -m "msg"` | 変更を確定 |
| `git push` | GitHub にアップロード |
| `git status` | 現在の状態確認 |
| `git diff` | 差分確認 |
| `gh auth login` | GitHub CLI 認証 |
| `gh repo create <name> --public --source=. --push` | リポジトリ作成と push を一発で |
| `gh pr create` | PR 作成 |
| `gh pr view <num>` | PR の中身を見る |

## デプロイ系コマンド早見

| コマンド | 用途 |
| --- | --- |
| `vercel --prod` | Vercel 本番デプロイ |
| `netlify init` | Netlify サイト紐付け |
| `netlify deploy --prod` | Netlify 本番デプロイ |
| `npm run dev` | ローカル開発サーバ |
| `npm run build` | 本番ビルド |

## 関連リソース

- **Anthropic 公式 Skills（GitHub）**: <https://github.com/anthropics/skills>
- **Anthropic 公式ドキュメント**: <https://docs.anthropic.com/>
- **Claude Code リファレンス**: <https://docs.anthropic.com/en/docs/claude-code>
