# 3. 5 つの権限モード

Claude Code は **左下のモードセレクタ**、または入力中の **<kbd>Shift</kbd> + <kbd>Tab</kbd>** で 5 種類の権限モードを切り替えられます。

<figure class="slide-figure">
  <img src="/slides/beginner/page-041.jpg" alt="5 つの権限モード">
  <figcaption>左下のセレクタまたは Shift+Tab で切替（p.41）</figcaption>
</figure>

::: tip ショートカット <kbd>Shift</kbd> + <kbd>Tab</kbd>
最も使う操作です。入力欄にカーソルがある状態で <kbd>Shift</kbd> + <kbd>Tab</kbd> を押すと、モードが順番に切り替わります。マウスでメニューを開く必要はありません。
:::

## 一覧

| # | モード | 挙動 | 講師の使いどころ |
| --- | --- | --- | --- |
| 1 | **許可を確認**（Default） | 各操作ごとに「実行してよい？」と聞いてくる | 安全だが煩雑。最初の数回 |
| 2 | **編集を承認**（Edits only） | 編集系のときだけ確認 | バランス型 |
| 3 | **プランモード** | 実行せず「こうやる」と **計画を提示** | **大規模・複雑なタスクの最初** |
| 4 | **自動モード** | 限りなく自律で動く | 中盤・確認済の流れ。Max プラン以上で出現 |
| 5 | **許可をバイパス**（Bypass） | 一切確認せず全自動 | **初心者厳禁** |

## なぜプランモードが効くか

「先に計画を見せてもらう」だけで、無駄な作業や見当違いをかなり減らせます。
**理想と現実のギャップ**（＝そのままだとどう動こうとしているか）が言語化されるので、
"思ってたのと違う" を最初の段階で止められます。

## 講師の使い分け

<div class="step-flow">
  <div class="step">
    <span class="n">1</span>
    <h5>新しい・難しい・規模が大きいタスク</h5>
    <p>まず <strong>プランモード</strong> で計画を出してもらう</p>
  </div>
  <div class="step">
    <span class="n">2</span>
    <h5>内容を確認</h5>
    <p>計画 OK なら <strong>自動モード</strong> に切替</p>
  </div>
  <div class="step">
    <span class="n">3</span>
    <h5>小修正フェーズ</h5>
    <p>取り返しのつく作業のみ <strong>Bypass</strong> も検討可</p>
  </div>
</div>

## Bypass モードについて

<figure class="slide-figure">
  <img src="/slides/beginner/page-043.jpg" alt="Bypass モードを使う気分">
  <figcaption>Bypass モードを使う気分（HUNTER×HUNTER 風／p.43）</figcaption>
</figure>

::: warning Bypass は最後の手段
講師曰く、Bypass モードを使う気分は
**「ハンターハンターで主人公が自分の体を犠牲にして敵を倒すあのシーン」** くらいの覚悟が必要。
何が起きても自己責任です。
:::

## Bypass / 自動モードを出すための設定

`Auto` や `Bypass` がモードセレクタに出ない場合：

1. 画面左下の **歯車アイコン** → 設定
2. **Claude Code** タブ
3. 以下を ON：
   - **権限モード許可**
   - **自動権限モードを許可する**

これで `Auto` / `Bypass` が選択肢に出てきます。

## 権限モード × タスクの目安表

| タスク | 推奨モード |
| --- | --- |
| 初めて触る・1 ファイル生成 | Default（確認） |
| デスクトップ整理デモ | Default → Auto |
| 中規模アプリ開発 | Plan → Auto |
| 既知の繰り返し作業（領収書一括処理など）| Auto |
| Git 操作・デプロイ | Plan → Auto（**Bypass は避ける**） |
| `rm` や全消し系を含む作業 | 必ず **Default で 1 操作ずつ** |

---

::: info 次に読む
[→ 4. モデルの選び方](/beginner/04-models)
:::
