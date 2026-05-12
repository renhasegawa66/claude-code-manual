# 8. 応用 MCP — Playwright / Context7 / Dispatch / Routines

ここでは、Claude Code の **運用レベルを一段引き上げる** 4 つの MCP / 機能を扱います。

## Playwright MCP — ブラウザで動作テスト

<figure class="slide-figure">
  <img src="/slides/advanced/page-087.jpg" alt="Playwright MCP">
  <figcaption>ブラウザを自動操作して UI テストまで実施（p.87）</figcaption>
</figure>

### 何ができる？

スライド原文（p.87-88）：

> - ブラウザを自動操作して **UI テストまで実施**
> - 「作ったサイトを自動で動作確認」まで一気通貫
> - **Claude が自分で画面を見て** 正しく動くか確かめられる
> - Web スクレイピング等も簡単

### CLAUDE.md でルール化

```markdown
## Web 検証
- Web サイト / Web アプリを作ったら、完成宣言の前に
  Playwright MCP で必ず動作確認する
- 主要導線・エッジケース・コンソールエラー・スクリーンショットを
  最低限カバーすること
```

これで Claude が **勝手にブラウザを開いて動作確認** してくれるようになります。

### よくあるテストパターン

```text
ストップウォッチサイトを Playwright MCP で動作確認してください:
1. ページが正常に開く
2. Start ボタンで時計が進む
3. Stop ボタンで止まる
4. Reset で 0:00 に戻る
5. コンソールにエラーが出ていない
6. 主要画面のスクリーンショットを取る

問題があれば修正し、再度テストして完了報告してください。
```

::: warning スクレイピングの倫理
**対象サイトの利用規約** と **robots.txt** に従ってください。
特に SNS や有料データは規約違反になりやすいです。
:::

## Context7 MCP — 最新ドキュメントを自動取得

<figure class="slide-figure">
  <img src="/slides/advanced/page-089.jpg" alt="Context7 MCP">
  <figcaption>ライブラリの最新ドキュメントをリアルタイム取得（p.89）</figcaption>
</figure>

### 何ができる？

スライド原文（p.89）：

> - ライブラリの **最新ドキュメントをリアルタイム取得**
> - **古い API で詰むのを防ぐ**
> - Next.js 15 などバージョン特有の書き方にも対応

### 使い方

特別なコマンド不要。MCP を入れておくだけで、
**Claude が知らないツール** を使い始めたときに自動で参照しに行きます。

### 例

```text
Hono と Cloudflare Workers で API を作ってください。
Context7 を使って最新のドキュメントを参照しながら書いてください。
```

→ 古い `wrangler` の書き方ではなく、最新の方式で書いてくれる。

## Dispatch — スマホから Claude Code を動かす

<figure class="slide-figure">
  <img src="/slides/advanced/page-100.jpg" alt="Dispatch でスマホから操作">
  <figcaption>スマホ → クラウド → PC の Claude Code（p.100）</figcaption>
</figure>

### 何ができる？

スライド原文（p.100）：

> - Dispatch で **スマホから Claude Code を起動可能**
> - 常時 PC をオンにしておく必要がある
> - PC を閉じても常にオンにしておく設定も可能
> - **外出先からタスクを投げて、帰るまでに完了** させる

### セットアップ

1. App Store から **Claude** アプリをインストール
2. アプリ内で **Dispatch** を有効化
3. PC 側の Claude Code から Dispatch に接続を許可

### ユースケース

- リビングに 24 時間稼働の PC を置く
- 街中・カフェ・移動中から指示
- 「明日のミーティング資料、前回の議事録を元にスライド作っておいて」

### Amphetamine で PC を常時オン

<figure class="slide-figure">
  <img src="/slides/advanced/page-103.jpg" alt="Amphetamine">
  <figcaption>Mac のスリープを抑止する常時オン化アプリ（p.103）</figcaption>
</figure>

スライド原文（p.103）：

> - **Mac 限定** のネイティブアプリ
> - **ノート PC が閉じていても大丈夫**
> - Windows の場合は標準の機能でもできる

::: warning 熱がこもる
24 時間連続稼働は **非推奨**。長時間ジョブを走らせるときだけ ON にしましょう。
:::

## Routines — 定期実行

<figure class="slide-figure">
  <img src="/slides/advanced/page-105.jpg" alt="Routines の特徴">
  <figcaption>毎日何時に実行するかを決められる（p.105）</figcaption>
</figure>

### 何ができる？

スライド原文（p.105）：

> - **毎日何時に実行するかを決められる**
> - 日報を書いたりサイトのメンテナンス等
> - **PC を開いてなくても可能**

### 例

```text
毎朝 8 時に以下を実行するルーチンを設定してください。

1. 今日のカレンダー予定を取得
2. 昨日の Slack 通知サマリを生成
3. 昨日の GitHub コミット数を集計
4. それらを 1 ページの Notion 日報にまとめる
5. URL を私の Slack DM に送る
```

→ 毎朝、人間が起きる前に **日報が完成している** 状態を作れる。

### 応用 — AI 組織の常時稼働

[初級編 8 章のチームエージェント](/beginner/08-team-agents) と組み合わせると：

```
[毎朝]
  ├─ 教育者 AI: 今日のコンテンツ提案
  ├─ 調査班 AI: 実コンテンツ作成
  ├─ PR 担当 AI: メルマガ下書き
  └─ エゴサくん: SNS 言及収集
      ↓
   日報として人間に届く
```

これが講師の言う **"AI 組織が会社の OS になる" 状態** です。

## 4 つの組み合わせで生まれる世界

```
[Routines]
    ↓ 自動起動
[チームエージェント]
    ↓ 並列実行
[Context7]
    ↓ 最新仕様で
[Playwright]
    ↓ 完成物を検証
    ↓
[公開デプロイ]
    ↓
[人間は許可ポチのみ]
```

> 「人間が AI を使いこなすのではない。
> **AI 組織が動き、人間は許可しますねポチを押すだけになる**」
> — *薄井 匠*

## Claude Code vs Manus（コラム）

スライド原文（p.90-91）：

> 一通り話してきた後だけど…
> **今日くらいの簡単なサービスの場合、Claude Code より Manus の方が楽**。
>
> ただし Manus だと全部やってくれちゃう → **開発の知識が身につきづらい**。
> 本格的で大規模なサービスなら → **CC（Claude Code）**。

| | 楽さ | 学び |
| --- | --- | --- |
| **Manus** | 全部内包・最高 | 裏側は見えない |
| **Claude Code** | 自分で組み合わせる | **裏側の解像度が上がる** |

---

::: info 次に読む
[→ 9. AI 動画編集ワークフロー](/advanced/09-video)
:::
