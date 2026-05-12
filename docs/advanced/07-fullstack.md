# 7. フロント／バック分離と Supabase

## "フロント" と "バック" を分けて考える

<figure class="slide-figure">
  <img src="/slides/advanced/page-074.jpg" alt="フロントとバックの違い">
  <figcaption>フロント = 見える部分、バック = 見えない部分（p.74）</figcaption>
</figure>

| | 見える | 担うもの |
| --- | --- | --- |
| **フロントエンド** | ユーザに見える画面 | HTML / CSS / JS, ボタン、フォーム |
| **バックエンド** | 裏側 | データベース、認証、ビジネスロジック |

### Google フォームで例えると（p.75-77）

<figure class="slide-figure">
  <img src="/slides/advanced/page-076.jpg" alt="フロント = Google フォームの入力画面">
  <figcaption>ユーザーが見る部分 = フロントエンド（p.76）</figcaption>
</figure>

<figure class="slide-figure">
  <img src="/slides/advanced/page-077.jpg" alt="バック = フォームに紐づくスプレッドシート">
  <figcaption>裏側のデータ部分 = バックエンド（p.77）</figcaption>
</figure>

- フォームに回答する画面 → **フロントエンド**
- スプレッドシートに溜まっていく結果 → **バックエンド**

::: tip なぜ Claude Code が学びになるか
Manus などは **すべて内包** しているので、ユーザは裏側を意識せず使える。
代わりに **学びはあまり残らない**。

Claude Code は **外部の Supabase / Vercel / GitHub を組み合わせる** ので、
**バックエンドの解像度が一段上がります**。
:::

## Supabase とは

<figure class="slide-figure">
  <img src="/slides/advanced/page-080.jpg" alt="Supabase でバックエンドを一気に作れる">
  <figcaption>Supabase は DB・認証・ストレージ一体型 BaaS（p.80）</figcaption>
</figure>

オープンソースで、無料枠が寛大な **BaaS（Backend as a Service）**。

| 機能 | できること |
| --- | --- |
| **Auth** | メール / Google / GitHub などのログイン |
| **Database** | PostgreSQL ベース |
| **Storage** | 画像・動画などの保存 |
| **Realtime** | 変更を WebSocket で配信 |
| **Edge Functions** | サーバレス関数 |

スライド原文（p.80）：

> - 簡単にバックエンドを作れる例として Supabase
> - Supabase CLI でログイン機能などを実装できる
> - データベース・認証・ストレージが **全部入り**
> - 無料枠でもある程度遊べる

## ハンズオン — X 風 SNS の作成

スライド原文（p.85）：

> 今回は X 風の投稿サイトを作る。
> UI 等は適当でいいので、**ログイン機能・ユーザーごとに投稿** という機能。

::: code-group
```text [プロンプト]
X 風の SNS サイトを作りたい。

- 簡単なログイン機能（2 段階認証なし）
- ユーザーが「つぶやき」を投稿できる極めてシンプルな UI
- バックエンドは Supabase（Auth + DB）
- GitHub にプライベートリポジトリで push
- Vercel（または Netlify）で公開
- 環境変数が GitHub に漏れないよう注意してください
- Supabase の RLS は必ず有効化してください
- 完了したら公開 URL を教えてください
```
:::

### Claude が裏でやること

1. `supabase` プロジェクトを作成（Supabase MCP 経由）
2. `posts` テーブルを作成（id / user_id / content / created_at）
3. **RLS（Row Level Security）有効化**
4. ポリシー作成（自分の投稿のみ書ける、全員が読める 等）
5. Auth 設定（メールリンク方式）
6. Next.js / Vite + React のフロント生成
7. `.env.local` に Supabase URL / anon key を保存
8. `.gitignore` に追加
9. GitHub に push
10. Vercel / Netlify でデプロイ
11. 本番環境変数を設定

## RLS（Row Level Security）を必ず確認する

::: danger ここを設定し忘れると個人情報がダダ漏れ
Supabase のテーブルは、**デフォルトのままだと "公開"** に近い状態になりがちです。
誰でも `select * from posts` できてしまう。
:::

### 最小限のポリシー例

```sql
-- 投稿テーブル
alter table posts enable row level security;

-- 「自分の投稿のみ書ける」
create policy "users can insert their own posts"
  on posts for insert
  with check (auth.uid() = user_id);

-- 「自分の投稿のみ更新できる」
create policy "users can update their own posts"
  on posts for update
  using (auth.uid() = user_id);

-- 「全員が読める」
create policy "anyone can read posts"
  on posts for select
  using (true);
```

### Claude Code に確認させる

```text
Supabase の "posts" テーブルの RLS が
本当に正しく設定されているか、
- 認証なしのリクエストで select できる
- 認証なしのリクエストで insert はできない
- 認証済みでも他人の user_id では insert できない
の 3 つを実際にテストしてください。
```

::: tip スライド p.83 も再掲
**「`Supabase セキュリティ対策` 等で検索！」** — 公開前にこのキーワードで一度は記事を読みましょう。
:::

## バック構成の判断基準

| ニーズ | おすすめ |
| --- | --- |
| 個人練習・MVP | **Supabase**（速い・無料枠潤沢） |
| Next.js と一体で | **Vercel + Supabase** |
| Cloudflare 中心 | **Cloudflare D1 + Workers** |
| すでに AWS | **DynamoDB + Lambda** |
| 高度な検索 | **Algolia / Meilisearch** を併用 |
| 巨大ファイル | **Cloudflare R2 / S3** |

## 講師の運用ルール（応用）

- Supabase 接続情報は **必ず `.env.local`** に置く
- 本番デプロイ前に **必ず RLS のポリシーを 1 件ずつ目視確認**
- Supabase 公式の **"バイブコーダー向けセキュリティ対策"** ドキュメントを最低 1 度通読
- マイナンバー・健康情報など機微情報は **そもそも個人開発で扱わない**

## 認証フローの全体像

```
[ブラウザ]
    │   メール送信
    ▼
[Supabase Auth]
    │   マジックリンクを送信
    ▼
[ユーザーのメール]
    │   クリック
    ▼
[アプリに戻る]
    │   セッション確立
    ▼
[フロント] ←──→ [Supabase DB（RLS 適用）]
```

→ パスワード管理を自前でしないので **流出リスクが圧倒的に下がります**。

---

::: info 次に読む
[→ 8. 応用 MCP](/advanced/08-mcp-advanced)
:::
