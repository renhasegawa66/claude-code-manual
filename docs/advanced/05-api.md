# 5. API 連携の基本

## API とは — "レストラン" のたとえ

<figure class="slide-figure">
  <img src="/slides/advanced/page-055.jpg" alt="API のレストラン比喩">
  <figcaption>API はウェイター。人間（アプリ）と厨房（サービス）の間を取り持つ（p.55）</figcaption>
</figure>

スライド原文（p.55-56）：

> 人間がウェイターに料理を頼むと厨房で料理を作るよね。
> このときオーダーを聞いたり厨房に連絡したりするのが **API**。

5 段階の流れ（p.56）：

| ステップ | 役割 | 例 |
| --- | --- | --- |
| 1 | 人間が料理を頼む | アプリ・サイト（ユーザー） |
| 2 | 料理を聞く人 | **API** |
| 3 | 厨房が作る | サービス運営元（サーバー） |
| 4 | 料理を持ってくる人 | **API** |
| 5 | 料理を実際に食べられる | アプリ・サイト（戻り値） |

世界中の Web サービスはすべて、この **API という規格** でつながっています。

::: tip ChatGPT も Claude Code も
裏側は全部 API です。
ホテルの予約、地図検索、銀行残高、SNS の投稿 — 全部 API。
:::

## API でできること（p.63）

<figure class="slide-figure">
  <img src="/slides/advanced/page-063.jpg" alt="API でできること">
  <figcaption>API を使えると開発の幅が圧倒的に広がる（p.63）</figcaption>
</figure>

- LLM で考えさせる
- 決済させる
- 投稿させる
- 翻訳させる
- 天気も取れる
- **= 全部つなげて新しいサービスを作れる**

## ハンズオン 1 — PokeAPI（無料・登録不要）

<figure class="slide-figure">
  <img src="/slides/advanced/page-058.jpg" alt="PokeAPI を使ったポケモン図鑑">
  <figcaption>PokeAPI を使ったポケモン図鑑のサイト（p.58）</figcaption>
</figure>

最初に触るのに最適。APIキー不要、無料、データもポップ。

### 鉄則: ドキュメント URL を一緒に渡す

```text
このドキュメントを参考にしてください:
https://pokeapi.co/docs/v2

クリックするとランダムなポケモンが表示されるサイトを作ってください。
完成したら GitHub に push して Vercel で公開してください。
```

::: warning なぜドキュメントを渡すか
**渡さないと、AI が古い仕様で書いてしまう** ことがあります。
最新 API はバージョンが変わると壊れる。
URL を一緒に投げるだけで、AI は最新の正解を読みに行ってくれます（Context7 MCP を入れているとさらに確実、[8 章](/advanced/08-mcp-advanced) 参照）。

スライド原文（p.60）：
> API を使うときは… **API Key**（複数種類の場合あり）＆ **Document** を渡すのが鉄則
:::

## ハンズオン 2 — 図書館 API（カーリル）

近所の図書館や蔵書を検索できる無料 API です。**API キー登録が必要** なので、
"普通の API の取り方" の練習になります。

### 1. API キーを取得

1. [カーリル開発者ページ](https://calil.jp/api/) にアクセス
2. アカウント登録
3. **API キーを発行**

### 2. ドキュメントも取得

`Checkout Docs` から **公式ドキュメント** のページ URL を控えておきます。

### 3. Claude Code に投げる

```text
次のドキュメントと API キーを使い、
近くの図書館を調べることができるサービスを作ってください。

- ドキュメント: <URL>
- API キー: <key>  ← .env.local に置いてください

近所の図書館に "○○" の蔵書があるかを検索できる UI で。
```

::: tip 受講者の反応
このハンズオンで、参加者から
**「近所に知らなかった図書館に気づいた」** の声が多発。
データそのものより、**自分の生活に直結する体験** が API の威力を実感させます。
:::

## 紹介された無料 API（p.65）

| API | 内容 | キー要否 |
| --- | --- | --- |
| PokeAPI | ポケモン情報 | 不要 |
| カーリル図書館 API | 全国の図書館・蔵書 | 要 |
| **NASA API** | 天文画像・データ | 要（無料） |
| **Cat API** | 猫の画像 | 要（無料） |
| **OpenWeather API** | 天気予報 | 要（無料） |

## コラム — 世界を変えた API：Stripe

<figure class="slide-figure">
  <img src="/slides/advanced/page-068.jpg" alt="Stripe — 世界の GDP の約 1.6%">
  <figcaption>世界の GDP の約 1.6% は Stripe（p.68）</figcaption>
</figure>

スライド原文（p.68）：

> **世界の GDP の約 1.6% は Stripe!**
> 皆が使ってる ChatGPT 等の AI も大体 Stripe。
> 今日の講座の申し込みも Stripe。

::: warning Stripe を "自作" しようとしない
講師の表現：
> 「Stripe を自作するみたいなバカなことを考えるな」

決済・メール配信・EC は **既存サービスに任せる** のが鉄則です。
:::

## コラム — Saxo Bank API（証券取引）

スライド p.92-93 で紹介された、個人投資家向けに **株 / FX 取引が API で完結** できる証券口座。

- 「10% 下がったら買い、戻ったら売り」のような **独自ルール自動取引** を Claude Code で組める
- 講師はデモアカウントで実演。**運用は自己責任**

## API 連携の汎用テンプレ

```text
次の API を使ったサービスを作ってください。

- API ドキュメント URL: <URL>
- API キー: 一旦私が紙に書いて見せます。
  あなたは ".env.local" に保存して扱ってください。
- .env.local は必ず .gitignore に入れてください。
- ハードコードは禁止。

機能:
1. <機能 1>
2. <機能 2>

完成したら:
- GitHub に push（プライベートリポジトリで）
- Netlify or Vercel で公開
- 環境変数は本番側にも設定
```

---

::: info 次に読む
[→ 6. APIキーとセキュリティ](/advanced/06-security)
:::
