# 10. 個人ワークフローと総まとめ

応用編の最後に、**個人ワークフロー** と、これまで学んできたことを統合した **総まとめ** を扱います。

## 講師の `dev-projects` 構成

- ルール: **「Claude Code 関連で作ったものは `~/dev-projects/` に入れろ」** を `CLAUDE.md` で固定
- 即席の試作（タイマー、デスクトップ整理など）は Desktop 直下で OK
- 「正直、結構適当」（薄井氏談）

```
~/dev-projects/
├─ claude-code-manual/      # このマニュアル
├─ stopwatch/
├─ x-clone-simple/
├─ kaigo-mensetsu-qa/
└─ ...
```

## 並列 Claude Code 運用

- <kbd>Cmd</kbd> + <kbd>N</kbd>（macOS）で **複数 Claude Code** を立ち上げて並列処理
- 例: レシート整理しながら、別ウィンドウで名刺整理
- **モニターを複数買え**（講師は 4 枚体制）

## Heatlog 風のデイリーレポート

講師の "Daily Report" Skill 実例：

```
[毎朝チームエージェント並列収集]
├─ Dia ブラウザの閲覧履歴
├─ Notion 更新
├─ Slack の自分宛て通知
├─ GitHub commit
└─ Obsidian の差分
      ↓ 統合
[今日の日報]
```

これを `/daily-report` 一発で実行できるようにスキル化。

## PC スペックの話

::: tip 講師の主張
**「料理人にとっての包丁」と同じで、PC は必要投資。**

- 最低: **16GB** RAM
- 推奨: **24〜32GB** RAM
- 講師: **128GB** MacBook（Apple 製品の最大構成）
- コムドットの裏方は全員 128GB
:::

### なぜスペックが要るか

- mlx-whisper / Remotion は重い
- 複数 Claude Code を並列で動かす
- ブラウザ／Notion／Slack を同時に開く
- Docker / Supabase ローカル開発

## 自走力（独学力）の話

> 「**エラー文言は、そのまま AI（チャット）にコピペすれば 99% 解決する。**
> これを自走力（独学力）と呼ぶ。
> これができないと Claude Code は正直使えない」 — 薄井 匠

つまり：
1. エラーが出た
2. **全文をコピー**
3. 別の Claude（または ChatGPT）に貼る
4. 「これ何？どう直す？」と聞く
5. 解決策を試す
6. ダメだったらもう一回 4 へ

ループを回せる人だけが、Claude Code を使い倒せる。

## Day 2 で身についたこと（公式まとめ p.107-108）

<figure class="slide-figure">
  <img src="/slides/advanced/page-107.jpg" alt="Day 2 で学んだこと（前半）">
  <figcaption>Day 2 まとめ前半（p.107）</figcaption>
</figure>

<figure class="slide-figure">
  <img src="/slides/advanced/page-108.jpg" alt="Day 2 で学んだこと（後半）">
  <figcaption>Day 2 まとめ後半（p.108）</figcaption>
</figure>

応用編で扱った全項目：

### 前半
1. Claude Code のディレクトリ構造と `CLAUDE.md`
2. GitHub の基本（`init` / `add` / `commit` / `push`）
3. `gh` CLI の活用
4. Vercel でのデプロイと push 連動の自動デプロイ
5. API・MCP による外部連携と API キーの扱い方

### 後半
6. フロントとバックの違い、Supabase でバックエンド
7. 個人情報・決済まわりのセキュリティ注意点
8. 実践：Supabase でログイン付き SNS（インスタ風）
9. 開発を加速する MCP（Playwright・Context7）
10. Claude Code での動画編集（Remotion MCP）
11. スマホ操作（Dispatch）と PC 常時オン（Amphetamine）
12. Routines による定期実行

## "全体のストーリー" として

```
[ローカルで作る]
    ↓
[GitHub に入れる]
    ↓
[Vercel / Netlify で公開]
    ↓
[裏に Supabase（DB & Auth）]
    ↓
[API で世界とつなぐ]
    ↓
[Playwright で検証]
    ↓
[Routines で定期実行]
    ↓
[チームエージェントで並列化]
    ↓
[Dispatch でスマホから指示]
```

この **8 段** が一気通貫で繋がっているなら、**もう「AI でサイト作れます」というレベルではない**。
**開発者として相当レベルアップした** と思って大丈夫です。

## 最後のメッセージ

<div class="section-quote">
「<strong>情報を受動するだけで死ぬ人ではなく、世の中に何かを生み出す人になってほしい。</strong><br>
今、人類が一番賢い時代と、人類以外が一番賢い時代の両方を体験できる、地球史で唯一の世代だ」<br>
— 薄井 匠
</div>

---

::: info 学習の続き
- [付録 / ツール早見表](/appendix/tools) — 出てきたツールの一覧
- [付録 / 名言集](/appendix/quotes) — 章扉に使った金言を全部まとめて
- [付録 / クレジット](/appendix/credits) — このマニュアルの出典・謝辞
- [初級編スライド全集](/slides/beginner) — 145 ページ
- [応用編スライド全集](/slides/advanced) — 125 ページ
:::
