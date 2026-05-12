# 4. デプロイ（Vercel / Netlify）

作ったアプリを **世界に公開** するステップです。
講座では **Vercel** を採用していますが、本マニュアル自身は **Netlify** にデプロイされています。
どちらも操作感はほぼ同じです。

## ホスティングとは

- **ホスティング** = 自分のアプリをインターネット上のサーバに置くこと
- **GitHub と連携** することで、push するたびに **自動再ビルド・自動再デプロイ**
- 無料枠で `*.vercel.app` / `*.netlify.app` などのドメインが付与される

```
[ローカル編集]
   ↓ git push
[GitHub]
   ↓ webhook
[Vercel / Netlify が検知]
   ↓ build
[本番 URL に自動反映]
```

## Vercel でデプロイ

### ハンズオン

```text
さきほど作ったストップウォッチを Vercel で公開してください。
- Vercel CLI が必要なら入れて OK
- 必要な対話があれば AskUserQuestion で私に聞いてください
- 完了後、公開 URL を教えてください
```

Claude が以下を裏で実行：
1. `npm i -g vercel`（必要なら）
2. `vercel login`
3. `vercel --prod`
4. 公開 URL を返す

### 再デプロイの体験

```text
タイトルとフォントをもう少しリッチに変更してください。
変更内容を GitHub に push し、Vercel に反映してください。
```

→ `git push` だけで Vercel が自動検知 → 数十秒で本番に反映。
これが "**自動デプロイの威力**" です。

## Netlify でデプロイ

### CLI 経由

```bash
# 初回のみ
npm install -g netlify-cli
netlify login

# 新規サイト作成と紐付け
cd <project>
netlify init

# 手動デプロイ（プレビュー）
netlify deploy

# 本番デプロイ
netlify deploy --prod
```

### Claude Code に頼むなら

```text
このプロジェクトを Netlify に公開してください。
- GitHub 連携で自動デプロイになるようにしてください
- カスタムドメインはなしで OK
- 完了後、公開 URL を教えてください
```

### Netlify の設定ファイル

リポジトリ直下に `netlify.toml` を置くとビルド設定が固定できます：

```toml
[build]
  command = "npm run build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "20"
```

::: tip 本マニュアルの実例
このマニュアル自身が `netlify.toml` でビルド設定を固定し、
GitHub 連携で自動デプロイされています。
[リポジトリ](https://github.com/renhasegawa66/claude-code-manual) の `netlify.toml` を見ると、ほぼ最小構成です。
:::

## Vercel vs Netlify どう違う？

| 項目 | Vercel | Netlify |
| --- | --- | --- |
| 得意領域 | Next.js / React 系 | 静的サイト全般・JAMstack |
| 無料枠 | 寛大 | 寛大 |
| 環境変数 UI | わかりやすい | わかりやすい |
| ビルドの速さ | やや速い印象 | 標準的 |

実用上どちらでも問題ありません。**講師は両方使う派**（Cloudflare Pages も併用）。

## 環境変数の設定

API キーなど **コードに書きたくない値** はホスティングの管理画面から設定します。

### Vercel

`Project Settings → Environment Variables`

### Netlify

`Site settings → Environment variables`

### Claude Code に任せる場合

```text
.env.local に書いている SUPABASE_URL と SUPABASE_ANON_KEY を、
Netlify の本番環境変数として設定してください。
（CLI が必要なら使用して OK）
```

::: warning 一線
**`.env` は絶対にコミットしない。** `.gitignore` に必ず入れてください。
詳細は [6. APIキーとセキュリティ](/advanced/06-security)。
:::

## 公開してよいライン

講師の整理：

| 公開先 | OK / NG |
| --- | --- |
| 家族・友人に見せる | OK |
| ポートフォリオに載せる | OK（個人情報なし） |
| 不特定多数に拡散 | **要注意**（EC・個人情報を扱うなら本番品質が必要） |
| マイナンバー・カード情報を扱う | **NG**（Stripe 等の専門サービスに任せる） |

> 「家族・友達に見せるレベルまでが、今日の到達点。
> EC や個人情報を扱うサイトは、まだ作るな」 — 薄井 匠

---

::: info 次に読む
[→ 5. API 連携の基本](/advanced/05-api)
:::
