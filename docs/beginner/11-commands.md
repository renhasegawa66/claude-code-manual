# 11. 便利コマンド集（チートシート）

Claude Code に標準で備わっている **スラッシュコマンド** と、覚えておくとラクな **キーボードショートカット** をまとめます。
すべて Desktop / CLI 両対応です。

<figure class="slide-figure">
  <img src="/slides/beginner/page-108.jpg" alt="知っておくと便利なコマンド・裏技 Tips">
  <figcaption>便利コマンド集の章扉（p.108）</figcaption>
</figure>

## セッション操作

### `/resume` — セッション一覧から再開

<figure class="slide-figure">
  <img src="/slides/beginner/page-120.jpg" alt="/resume のセッション一覧">
  <figcaption>過去のセッションを選んで続きから作業（p.120）</figcaption>
</figure>

- 過去のセッションを一覧表示し、選んで **続きから作業** できる
- Desktop 版は左サイドバーから常時アクセス可

```
/resume
```

### `/clear` — 新しいセッションを開始

- 完全に新規セッションを開く
- 直前の文脈をリセットしたいときに

```
/clear
```

### `/rewind` — 会話をロールバック

<figure class="slide-figure">
  <img src="/slides/beginner/page-110.jpg" alt="/rewind の画面">
  <figcaption>戻りたい地点を選んで Enter（p.110）</figcaption>
</figure>

- 会話の **前の方まで巻き戻せる**
- 「あの場面まで戻りたい」「何かやらかして戻して直したい」ときに
- 過去メッセージ一覧から戻り先を選択

```
/rewind
```

### `/btw` — 脇道で会話

- "By the way（ところで）" の略
- **メインのコンテキストを保ったまま**、関係ない別の話題を扱える
- メインの会話のトークンを減らしたくないときに重宝

```
/btw
（このあとに別の話題を入力）
```

## コンテキスト管理

### `/context` — 使用量を可視化

- 現在のコンテキスト使用量を **右下に常時表示** する
- 残量バーが視覚的に出るので、使いすぎを防げる

```
/context
```

### `/compact` — 会話を要約圧縮

<figure class="slide-figure">
  <img src="/slides/beginner/page-112.jpg" alt="/compact による圧縮">
  <figcaption>180k → 24k トークンへの圧縮例（p.112）</figcaption>
</figure>

- これまでの会話を **要約してまとめる**
- コンテキストが大きくなりすぎたときに使う
- **重要なファイル編集や決定事項は保たれる**
- 実例：180K → 24K に圧縮

```
/compact
```

## モデル・連携

### `/model` — モデル切り替え

- Opus / Sonnet / Haiku を切り替える
- タスクの重さに合わせて都度切替

```
/model
```

### `/mcp` — MCP 接続状況の確認

- 接続中の MCP を一覧表示
- 緑のチェックが付いていれば接続済み

```
/mcp
```

## CLAUDE.md（プロジェクト設定）

### `/init` — CLAUDE.md の雛形作成

<figure class="slide-figure">
  <img src="/slides/beginner/page-116.jpg" alt="/init で CLAUDE.md を生成">
  <figcaption>プロジェクト約束事を書くファイルの雛形が生成される（p.116）</figcaption>
</figure>

- カレントプロジェクトに **`CLAUDE.md` の雛形** を作る
- 約束事を後から自然言語で追加していくのが現実的
- 詳細は [応用編 2 章 CLAUDE.md 設計術](/advanced/02-claude-md)

```
/init
```

## キーボードショートカット

| キー | 効果 | 対象 |
| --- | --- | --- |
| **<kbd>Shift</kbd> + <kbd>Tab</kbd>** | **権限モードを順に切替** | 入力欄 |
| `/` | スラッシュコマンド／Skill 一覧 | 入力欄 |
| <kbd>Cmd</kbd> + <kbd>N</kbd> | 新規ウィンドウで起動 | macOS Desktop |
| <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>G</kbd> | Finder でパスを入力してジャンプ | macOS |
| <kbd>Option</kbd> + 右クリック → パス名をコピー | ファイルパスを取得 | macOS Finder |
| <kbd>Win</kbd> + <kbd>R</kbd> | パスを入力してジャンプ | Windows |

## Claude チャット / Cowork との違い

> 「コードが関わらない時は **Cowork** で可。大体のことは **Claude Code** で出来る」（p.122）

| | ユースケース |
| --- | --- |
| **Claude Code** | ファイル操作・開発・MCP・Skill を含む実作業 |
| **Claude チャット（claude.ai）** | テキストの相談・原稿作成・調査 |
| **Cowork** | 共同作業ワークスペース。コード以外の業務全般 |

ローカルで何かを **創るなら Claude Code**、思考や原稿なら **Claude / Cowork** という棲み分けが現実的です。

## チートシート（印刷用）

| カテゴリ | コマンド | 用途 |
| --- | --- | --- |
| セッション | `/resume` | 過去のセッションを開く |
| | `/clear` | 新規セッション |
| | `/rewind` | 巻き戻し |
| | `/btw` | 脇道会話 |
| コンテキスト | `/context` | 使用量表示 |
| | `/compact` | 要約圧縮 |
| モデル | `/model` | モデル切替 |
| 連携 | `/mcp` | MCP 接続確認 |
| 設定 | `/init` | CLAUDE.md 雛形作成 |
| Skill | `/<skill名>` | 自作 Skill 実行 |

---

::: info 関連
- [3. 5 つの権限モード](/beginner/03-permissions)
- [4. モデルの選び方](/beginner/04-models)
- [応用編 2. CLAUDE.md 設計術](/advanced/02-claude-md)
:::
