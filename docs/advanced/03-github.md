# 3. GitHub 連携

## なぜ GitHub なのか

<figure class="slide-figure">
  <img src="/slides/advanced/page-029.jpg" alt="GitHub とは">
  <figcaption>GitHub はファイルを保存できるバージョン管理ツール（p.29）</figcaption>
</figure>

**GitHub は "ゲームのセーブ機能"** です。

スライド原文：

> - ファイルを保存できる **バージョン管理ツール**
> - 使えると色々な更新ができるようになる
> - 世界中の開発者が使っている **標準ツール**

なぜ必要か（p.31）：

- 「**昨日までは動いていたのに今日壊れた**」を巻き戻せる
- チームで同じコードを同時に触ってもぶつからない
- GitHub にあれば **Vercel などに自動デプロイ** できる

## セットアップ

### ステップ 1 — GitHub アカウントを作る

無料。<https://github.com/signup>。

### ステップ 2 — Claude Code から接続

1. 設定 → **コネクタ**
2. GitHub を選択
3. 接続環境は **クラウド側** を選ぶ（ローカルではない）
4. OAuth ログイン

### ステップ 3 — つながらない場合（Windows ほか）

**GitHub CLI（`gh` コマンド）** で代替します。

```bash
# macOS
brew install gh

# Windows
winget install GitHub.cli
```

その後：

```bash
gh auth login
```

Claude Code に「`gh` で認証してください」と頼めば、上記の手順を案内・実行してくれます。

## 知っておくべき GitHub の 4 概念

<figure class="slide-figure">
  <img src="/slides/advanced/page-036.jpg" alt="GitHub で大事な 4 つの概念">
  <figcaption>git の基本 4 コマンド（p.36）</figcaption>
</figure>

Claude Code が裏で全部やってくれますが、**一度は手で覚えておく** ことを講師は強く推奨。

| コマンド | 意味 |
| --- | --- |
| `git init` | この場所を Git 管理下にする |
| `git add .` | 変更をステージング |
| `git commit -m "メッセージ"` | スナップショットを保存 |
| `git push` | GitHub にアップロード |

### 一連の流れ（手作業ベース）

```bash
cd ~/dev-projects/stopwatch
git init
git add .
git commit -m "first commit"
gh repo create stopwatch --private --source=. --push
```

## Claude Code 経由で全部やってもらう

スライド原文（p.38）：

> 例：「簡単なタイマーを作って。それを GitHub の新規リポジトリに入れて」
> ※リポジトリ ≒ フォルダ

```text
簡単なタイマーを作ってください。
出来上がったら、GitHub で新規のプライベートリポジトリを作って
push してください。
リポジトリ名は適当で構いません。
```

これで Claude が裏で：
- `git init` / `git add` / `git commit` / `gh repo create`
- README 自動生成
- push

までを **1 プロンプトで完結** させます。

::: tip 「今日は GitHub の 5% くらいしか解説してません」
スライド原文（p.40）：
> 「本気で開発する人は別途必ず丁寧に勉強しましょう！」

今日に関しては「Claude Code で作ったコードを保存して、サービスの公開とかに使えるバックアップツール」くらいの温度感で構いません。
:::

::: tip プロジェクトの置き場所
講師は `CLAUDE.md` で
**「新規プロジェクトは `~/dev-projects/<name>/` に作る」**
と固定しているので、毎回ディレクトリ名を考えなくて済みます。
:::

## Pull Request の概念

PR (Pull Request) は **「こう変えたらどう？」と提案する仕組み** です。

- public リポジトリで **他者から改善案を募れる**
- チーム開発では **マージ前のレビュー** が必須
- Claude Code は PR の **作成・コメント・マージ** まで `gh` 経由で操作可能

```text
ブランチを切って、ストップウォッチに
"ラップ機能" を追加してください。
作業ブランチを GitHub にプッシュし、PR を作成してください。
PR タイトルは "Add lap timer feature"、本文には変更点と
テスト手順を簡潔に書いてください。
```

## ブランチ運用の基本

| ブランチ | 役割 |
| --- | --- |
| `main` | 本番に出る安定版 |
| `feature/<name>` | 機能追加用 |
| `fix/<name>` | バグ修正用 |

Claude Code に "ブランチ切って" と言えば、いい感じに命名してくれます。

## .gitignore — 漏らさないための鉄則

::: danger 必ず .gitignore に入れるもの
```gitignore
.env
.env.local
.env.*.local
node_modules
.DS_Store
dist/
*.log
.netlify/
```

**API キーや個人情報を含むファイルは絶対に `git add` してはいけません。**
詳細は [6. API キーとセキュリティ](/advanced/06-security)。
:::

## よくあるミスと対処

| ミス | 結果 | 対処 |
| --- | --- | --- |
| `.env` を `.gitignore` に入れ忘れて push | **API キー流出** | 即座にキーを失効・再発行。`git filter-branch` で履歴削除 |
| public リポジトリに個人情報を入れた | **検索エンジンに乗る** | 削除しても遅い。事前に必ず private |
| `force push` で他人の変更を上書き | **同僚のコミット消失** | 復旧は履歴次第。**force push は最後の手段** |

::: tip 講師の運用
個人練習・サンプル系は基本 **public**。
業務・機密が混じる場合は **private** にして、その理由を一言添える。
:::

---

::: info 次に読む
[→ 4. デプロイ（Vercel / Netlify）](/advanced/04-deploy)
:::
