# 1. Claude Code とは

<figure class="slide-figure">
  <img src="/slides/beginner/page-002.jpg" alt="入門講座 Claude Code Day 1 — はじめての Claude Code">
  <figcaption>初級講座 表紙スライド（p.2）</figcaption>
</figure>

## ひとことで言うと

Claude Code は **「あなたの PC の中で動く AI 開発者」** です。
ChatGPT や Gemini のような「クラウド上で会話するだけの AI」ではなく、
**あなたのフォルダのファイルを直接 読む・書く・消す・実行** できます。

## "すごさ" のコア（薄井氏の整理）

スライド原文より：

> Claude Code って何がすごいの？
>
> - **大規模な開発ができる**（大量ファイル・長時間稼働）
> - **色々なツールとの連携が可能**
> - **とにかく賢い！**

::: tip 業界の裏付け
2026/04/25 に Google が Anthropic に **100 億ドル + 300 億ドル**（合計 **6.4 兆円規模**）を出資。AI 業界最大級の資本注入が裏にあります。
:::

## 他 AI との決定的な違い

<figure class="slide-figure">
  <img src="/slides/beginner/page-036.jpg" alt="普通の AI vs Claude Code の比較図">
  <figcaption>普通の AI はダウンロード経由、Claude Code は PC 内へ直接配置（p.36）</figcaption>
</figure>

| | ChatGPT / Gemini | **Claude Code** |
| --- | --- | --- |
| 動く場所 | クラウド | **あなたの PC 内部** |
| 出力の形 | テキストを画面に返すだけ | **ファイルとして直接配置** |
| できる作業 | 会話・原稿・コード生成（コピペが必要）| 開発・ファイル整理・コマンド実行を **自動で完結** |
| 連携の幅 | API 単発呼び出し | **大量のファイル × 長時間稼働 × 多様な外部ツール** |

## "未来の働き方" として

3 時間レベルの作業を、Claude Code は休まずに走らせ続けます。
人間のタスクは「**ビジネス設計**」と「**許可しますかのポチ**」に寄せていける、というのが講師の主張です。

<div class="section-quote">
「<strong>Claude Code は未来の働き方そのものだ。</strong>経営者は、それを使っている人と使っていない人で発言の解像度がすぐにわかる」<br>— 薄井 匠
</div>

## 4 つの使い方

<figure class="slide-figure">
  <img src="/slides/beginner/page-019.jpg" alt="Claude Code の 4 つの使い方">
  <figcaption>2026 年 4 月現在の 4 形態（p.19）</figcaption>
</figure>

| # | 形態 | 起動方法 | 推奨度 |
| --- | --- | --- | --- |
| 1 | **CLI 版（ターミナル）** | `claude` コマンド | キーボード派・上級者 |
| 2 | **Claude Desktop 版（GUI）** | `.app` を起動 | ⭐ **本マニュアル推奨** |
| 3 | **Web 版** | `claude.ai/code` をブラウザで開く | インストール不要・出先用 |
| 4 | **IDE 拡張** | VS Code / JetBrains / Cursor のプラグイン | 開発者向け |

### CLI 版 vs Desktop 版

<div class="compare-grid">
  <div class="compare-card">
    <h4>Claude Code CLI（ターミナル）</h4>
    <ul>
      <li>ターミナルから <code>claude</code> で起動</li>
      <li>自由度が高い</li>
      <li>スクリプトと組み合わせやすい</li>
      <li>上級者向け</li>
    </ul>
  </div>
  <div class="compare-card">
    <h4>Claude Desktop 版（推奨）</h4>
    <ul>
      <li>アプリとして起動するだけ</li>
      <li>UI からモード・モデルを切替</li>
      <li>初心者にやさしい</li>
      <li><code>/resume</code> など便利機能</li>
    </ul>
  </div>
</div>

> 「色々あるけれど、**デスクトップ使えば OK**。
> デスクトップ版は『劣化版』と言われていたが、直近のアップデートで相当進化している」 — 薄井 匠

## "これは初心者向きではない" という前提

Claude Code はあなたのファイルを直接消せます。
**だからこそ、最初の一歩で `Bypass` モードを使わない**、
**空のフォルダで試す** といった "やってはいけないこと" の理解が必須です。
詳細は [10 章 落とし穴と安全運用](/beginner/10-pitfalls) を参照。

---

::: info 次に読む
[→ 2. セットアップと料金](/beginner/02-setup)
:::
