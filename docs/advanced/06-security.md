# 6. APIキーとセキュリティ

<div class="section-quote">
「<strong>自分の可能性は過信していい。だがセキュリティ周りは絶対に過信するな</strong>」<br>— 薄井 匠
</div>

## API キーは "玄関の鍵"

- 他人に渡すと **あなたのアカウントで好き勝手される**
- 流出時の被害は **金銭・データ・信用** の三重
- "後から消した" は通用しない（**過去履歴は永遠に残る**）

## 5 つの鉄則

### 鉄則 1 — ハードコードしない

::: code-group
```js [❌ NG: コードに直書き]
const apiKey = "sk-live-abcdef0123456789"
fetch(`https://api.example.com/data?key=${apiKey}`)
```
```js [✅ OK: 環境変数経由]
const apiKey = import.meta.env.VITE_API_KEY
fetch(`https://api.example.com/data?key=${apiKey}`)
```
:::

::: warning フロントの "裏側コード" は丸見え
ブラウザの DevTools を開けば誰でも JS の中身を読めます。
**フロントエンドにベタ書きされた API キーは公開と同義** です。
:::

### 鉄則 2 — .env / .env.local に格納

ローカル開発では `.env.local` を使うのが定番：

```bash
# .env.local
VITE_API_KEY=xxxxxxxxxxxx
SUPABASE_URL=https://xxx.supabase.co
SUPABASE_ANON_KEY=xxxxxxxxxxxx
```

### 鉄則 3 — .gitignore に入れる

```gitignore
# .gitignore
.env
.env.local
.env.*.local
```

::: danger これを忘れると地獄
`.env` を Git に上げてしまい、API キーが GitHub にそのまま公開された結果、
**1 時間で $5,000 の不正利用** が発生した事例が国内外で多数。
特に OpenAI / Anthropic / AWS の鍵は **ボットが秒で見つけにきます**。
:::

### 鉄則 4 — 本番は環境変数 UI から設定

| 環境 | 設定場所 |
| --- | --- |
| Vercel | Settings → Environment Variables |
| Netlify | Site settings → Environment variables |
| Cloudflare Pages | Settings → Environment variables |
| Supabase | Project settings → API |

::: code-group
```text [Claude Code に頼む例]
.env.local に書いている SUPABASE_URL と SUPABASE_ANON_KEY を、
Netlify の本番環境変数として設定してください。
（CLI を使って OK）
完了後、本番に push して動作確認してください。
```
:::

### 鉄則 5 — 静的フロントは必ず "プロキシ経由"

API キーが必要な API を **ブラウザから直接呼ぶのは NG**。
- サーバ（Edge Functions / Netlify Functions / Supabase Functions）を間に挟む
- ブラウザにはキーを **絶対に出さない**

```
[ブラウザ] → [サーバレス関数（鍵はここ）] → [外部 API]
   (キー無し)                                (キー有り)
```

## 事故事例 — 東大マッチング流出

参考までに、講座で言及された **実際の事故**：

- **東大マッチング** という個人開発サービスで、
- **Supabase の RLS（Row Level Security）** を未設定のまま公開
- 結果、**個人情報・マイナンバーが全閲覧可能** に
- 大学側から処分対象

### 教訓

- 「動いた = 安全」ではない
- 公開デプロイ前には **必ず権限設定を確認**
- Supabase 公式の "**バイブコーダーのためのセキュリティ対策**" 記事は必読

## "自作してはいけない領域"

以下は **絶対に自作せず、専門サービスに任せる** べき：

| 領域 | 任せ先 |
| --- | --- |
| 決済 | **Stripe / Square** |
| メール配信 | **SendGrid / Postmark / Resend** |
| EC | **Shopify / BASE** |
| 認証（パスワード管理） | **Supabase Auth / Auth0 / Clerk** |
| 顔認証・本人確認 | **専門サービス** |

> 「Stripe を自作するみたいなバカなことを考えるな」 — 薄井 匠

## Claude Code 自身が起こしうる事故

Claude Code は理屈上、以下を **やりかねません**：

- API キーをそのままコードに書いて GitHub に push
- `.env` のリネームを忘れて 公開リポジトリ にコミット
- 環境変数の値をログに出力する
- ログをそのままチャットにペーストしてあなたに表示

::: tip 防衛策
`CLAUDE.md` に **明文化** しておく：

```markdown
## セキュリティ
- API キーは絶対にコードに書かない（.env 経由のみ）
- .env / .env.local / .env.*.local は必ず .gitignore に追加
- 環境変数の値をログ・チャット・README に出さない
- 公開デプロイ前に Supabase RLS の設定確認をする
- Stripe / メール送信などの専用領域は既存サービスを使う
```
:::

## チェックリスト

公開デプロイの前に、これを声に出して確認：

- [ ] `.env*` は **すべて** `.gitignore` に入っているか？
- [ ] `git status` で `.env` が "Untracked" にないか？
- [ ] フロントの JS に **API キーがハードコードされていない** か？
- [ ] Supabase などの **行レベル権限（RLS）** は設定済みか？
- [ ] 本番環境変数を **ホスティングの管理画面** から設定したか？
- [ ] **public** リポジトリにしてよいか？ 機密が混じっていないか？

---

::: info 次に読む
[→ 7. フロント／バック分離と Supabase](/advanced/07-fullstack)
:::
