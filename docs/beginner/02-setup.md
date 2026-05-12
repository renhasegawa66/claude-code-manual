# 2. セットアップと料金

## インストール

### macOS / Windows 共通

1. [claude.ai](https://claude.ai) → **Claude Code** のページから **Desktop アプリ** をダウンロード
2. 通常のアプリと同じく `Applications`（macOS）/ `Program Files`（Windows）に配置
3. 起動 → Anthropic アカウントでログイン

### Windows 専用の追加ステップ

- 事前に **[Git for Windows](https://git-scm.com/download/win)** をインストール
- 初回起動時に WSL / 内蔵 Node の自動セットアップが走る場合あり

::: tip 詰まったら
セットアップで詰まったら、講師曰く **「ChatGPT か Gemini に手順を聞け」**。
それも独学力の一部です。
:::

## セットアップ確認 — `claude doctor`

<figure class="slide-figure">
  <img src="/slides/beginner/page-024.jpg" alt="claude doctor の実行結果">
  <figcaption>各チェック項目が緑の [OK] になっていれば成功（p.24）</figcaption>
</figure>

ターミナル（または Claude Code 内のチャット）で **`claude doctor`** を実行すると、
バージョン・認証状態・ネットワーク接続を自動チェックしてくれます。

```bash
claude doctor
```

| 表示 | 意味 |
| --- | --- |
| `[OK] CLI version` | バージョン整合性 |
| `[OK] Authentication` | ログイン済み |
| `[OK] Network` | API/MCP 到達性 |
| `[FAIL]` | 何かしらの設定不備 → エラー文をそのまま ChatGPT/Gemini に貼って解決 |

## "動かす場所" を決める

<figure class="slide-figure">
  <img src="/slides/beginner/page-032.jpg" alt="ファイルの階層構造の図解">
  <figcaption>権限は階層構造。上位を渡すと配下すべてに作用する（p.32）</figcaption>
</figure>

ChatGPT と違い、Claude Code は **PC 内の特定フォルダの中で動きます**。
起動直後、左のサイドバーから **ローカル** を選び、**フォルダを 1 つ指定** してください。

### 推奨される起動場所

- **デスクトップ直下に作った空のテストフォルダ**
- もしくは `~/dev-projects/<案件名>/` のような専用フォルダ

::: warning ホーム全体・ C ドライブ全体を渡してはいけない
**PC 全体（最上位）への権限を一度渡すと、Claude Code は理論上ファイルを全消しできます。**
最初は必ず空のフォルダから始めてください。
:::

<div class="section-quote">
「<strong>デスクトップの汚さは品性の汚さ。</strong>作業場所を決めることが、Claude Code を扱う上で最も大事」<br>— 薄井 匠（p.30）
</div>

## 料金プラン

<figure class="slide-figure">
  <img src="/slides/beginner/page-026.jpg" alt="料金プラン比較">
  <figcaption>Pro で始めて、重く使うなら Max にアップグレード（p.26）</figcaption>
</figure>

| プラン | 月額目安 | 立ち位置 |
| --- | --- | --- |
| 無料 | $0 | **Claude Code は動かない**（無料プランでは利用不可） |
| Pro | 約 $20 | 入門用。重い長尺ハンズオンで制限到達の可能性あり |
| **Max** | **約 $100（≒ 15,000 円）** | **本マニュアル推奨ライン**。普段使いで余裕あり |
| Max 200 | 約 $200 | 研修講師・本気開発向け |

### 講師の見立て

> 「2026/04/22 には一時的に Pro プランで使えなくなった事象もあった。
> 今後 Pro プランでは制限がさらに強くなるかもしれない。
> 真剣に学ぶなら最初から **Max** を強く勧める」

> 「Claude Code は確実に赤字でユーザー獲得フェーズ。
> PayPay の 20% 還元期と同じで、いずれ値上げされる。
> **使い倒すなら今**」

## 使用状況の確認

Desktop 版なら、右下のモデル名をクリックすると **プラン使用状況のパネル** が出ます。
あるいは入力欄で **`/context`** を打つと、現在のコンテキスト使用量バーが常時表示に切り替わります。

| 表示項目 | 意味 |
| --- | --- |
| 5 時間制限 | 直近 5 時間あたりの上限 |
| 週制限 | 7 日合計の上限 |
| リセット時刻 | 次にカウンタがクリアされる時間 |

長尺の作業をするときは、**作業前にここを必ず一度見る** クセを付けてください。
Opus を連発するとあっという間に溶けます。

## コンテキスト（AI の記憶力）

| 項目 | 値 |
| --- | --- |
| 標準コンテキスト | 200K トークン |
| **Claude Opus 4.7（1M版）** | **最大 1,000K トークン（約 75 万字）** |

::: tip 1M コンテキストの威力
1M トークンモデルなら **数百ページの仕様書やリポジトリ全体を一気に読める**。
3 時間ぶん回しても使用量は 20% 程度で済みます。
逆に標準 200K で長尺をやると、途中から **AI が文脈を忘れて精度がガクッと落ちる** ので、
長尺なら最初から 1M 版を選びましょう。
:::

---

::: info 次に読む
[→ 3. 5 つの権限モード](/beginner/03-permissions)
:::
