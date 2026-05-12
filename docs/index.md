---
layout: home

hero:
  name: Claude Code
  text: 完全マニュアル
  tagline: 「未来の働き方そのもの」を、初級から応用まで体系的に。公式スライド 270 枚を収録。
  image:
    src: /logo.svg
    alt: Claude Code Manual
  actions:
    - theme: brand
      text: 初級編からはじめる →
      link: /beginner/
    - theme: alt
      text: 応用編へジャンプ
      link: /advanced/
    - theme: alt
      text: スライド全集
      link: /slides/beginner

features:
  - icon: 🟧
    title: 初級編（11 章）
    details: Claude Code の正体・5 つの権限モード・モデル選択・実演デモ・MCP・Skills・チームエージェント・便利コマンド集を網羅。
    link: /beginner/
    linkText: 入門する
  - icon: 🟫
    title: 応用編（10 章）
    details: CLAUDE.md 設計、GitHub 連携、自動デプロイ、API 連携、Supabase、Playwright、AI 動画編集など実戦領域へ。
    link: /advanced/
    linkText: 踏み込む
  - icon: 🖼️
    title: スライド全集
    details: 講座で投影された公式スライド全 270 ページを収録。章ごとの理解に詰まったら、視覚的に確認できます。
    link: /slides/beginner
    linkText: スライドを見る
  - icon: 📜
    title: 名言と早見表
    details: 講師・薄井匠氏の核心フレーズ集、ツール／コマンド／キーボードショートカット早見表を付録に収録。
    link: /appendix/tools
    linkText: 一覧を見る
  - icon: ⌨️
    title: 便利コマンド集
    details: /rewind, /compact, /btw, /init, /resume, /context, /model, /mcp — 全スラッシュコマンドのチートシート。
    link: /beginner/11-commands
    linkText: チートシート
  - icon: 🔒
    title: 安全運用
    details: 「Bypass モード」「APIキー漏洩」「Supabase RLS」など、知らないと事故るポイントを章でカバー。
    link: /beginner/10-pitfalls
    linkText: 落とし穴を見る
---

## このマニュアルについて

道草株式会社 代表 **薄井 匠（うすい たくみ）** 氏が 2026年4月に開催した
**Claude Code 講座 初級編 / 応用編**（参加者 約 10,000人）の 6 時間にわたる内容を、

- **文字起こし（28,000 行）**
- **公式投影資料（PPTX 270 ページ）**

の両方を読み込み、

- 検索しやすい
- 順番に学べる
- いつでも辞書として引ける

ように体系化した、非公式の学習用マニュアルです。
**「Claude Code をインストールしたが、何から始めるかわからない」** という人が
一通り目を通せば、**ローカル開発 → GitHub → デプロイ → API → バックエンド** までの
"全体像と手触り" を一日で掴めるよう構成しています。

::: tip 本マニュアルの読み方
- **はじめての人** は `初級編 → 1. Claude Code とは` から順に読み進めてください。
- **既に使っている人** は気になる章だけ拾い読みでも構いません。
- **画面右上の検索** からキーワードでも引けます（例: `MCP`, `Supabase`, `Plan モード`, `/compact`）。
- **スライドで視覚的に確認したい** ときは [初級編スライド全集](/slides/beginner) / [応用編スライド全集](/slides/advanced) を開いてください。
:::

::: warning 安全上の最重要事項
Claude Code はあなたの PC のファイルを **読み・書き・消し・実行できます**。
権限付与は必ず **空のフォルダ／プロジェクト単位** で行い、PC 全体への権限付与は
絶対に避けてください。詳細は [10. 落とし穴と安全運用](/beginner/10-pitfalls) を参照。
:::

## 講師について

**薄井 匠** ｜ 道草株式会社 代表
コムドット出身、AI 教育「AI 木曜会」「あいぼん」運営。
寿司打 全国 12 位（タイピング）／音声入力推進派。

> 「Claude Code は、未来の働き方そのものだ。
> 経営者は、それを使っている人と使っていない人で
> 発言の解像度がすぐにわかる」
>
> — *薄井 匠*

---

## 構成

| パート | 内容 | 推奨対象 |
| --- | --- | --- |
| [初級編（11 章）](/beginner/) | Claude Code の正体・操作・代表的なユースケース | はじめての人 |
| [応用編（10 章）](/advanced/) | 開発を本番運用まで持ち上げる実戦テクニック | 一通り触った人 |
| [スライド全集](/slides/beginner) | 講座で投影された公式スライド 270 ページ | 視覚的に確認したい人 |
| [付録](/appendix/tools) | ツール・コマンド・名言の参照辞書 | 全員 |
