# 4. デプロイ（Vercel / Netlify）

作ったアプリを **世界に公開** するステップです。
講座では **Vercel** を採用していますが、本マニュアル自身は **Netlify** にデプロイされています。
どちらも操作感はほぼ同じです。

## ホスティングとは

<figure class="slide-figure">
  <img src="/slides/advanced/page-051.jpg" alt="GitHub + Vercel の自動デプロイ">
  <figcaption>変更 → GitHub → Vercel の 3 段階自動デプロイ（p.51）</figcaption>
</figure>

スライド原文（p.43-44）：

> **Vercel とは**
> - 作った Web サイトを一瞬で世界に公開できるサービス
> - 無料枠でも個人利用なら十分
> - URL が自動で発行される（例：`my-app.vercel.app`）
>
> **GitHub + Vercel で自動デプロイ**
> - `git push` するだけで全世界に公開される

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

### 初回のセットアップ手順（p.45）

<div class="step-flow">
  <div class="step">
    <span class="n">1</span>
    <h5>GitHub アカウントで Vercel にサインアップ</h5>
    <p>OAuth で連携</p>
  </div>
  <div class="step">
    <span class="n">2</span>
    <h5>リポジトリを選択</h5>
    <p>先ほど作った GitHub リポジトリを指定</p>
  </div>
  <div class="step">
    <span class="n">3</span>
    <h5>フレームワーク自動検出</h5>
    <p>Next.js / Vite / 静的サイト を自動判別</p>
  </div>
  <div class="step">
    <span class="n">4</span>
    <h5>Deploy ボタン</h5>
    <p>1〜2 分で公開完了</p>
  </div>
</div>

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

スライド原文（p.50）：

> 2 回目以降は GitHub に push するだけ
> - `git push` した瞬間に Vercel が変更を検知
> - **自動で再ビルド & 再公開**
> - Claude に「デプロイして」と頼むだけで全部完了

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
