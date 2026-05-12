# 7. Skills — 業務を手順書化する

## Skills とは

<figure class="slide-figure">
  <img src="/slides/beginner/page-095.jpg" alt="Skills の概要">
  <figcaption>一度設定した作業を高度にやり直しできる仕組み（p.95）</figcaption>
</figure>

**Skills** は、Claude Code に **「一度確立した作業手順」を覚えさせて、ワンコマンドで再実行できるようにする仕組み** です。

- 形態は **ローカルのファイル群**（`SKILL.md` ＋関連ファイル）
- ChatGPT の GPTs に近いが、**より複雑な手順・複数ファイルを盛り込める**
- 「**ただのプロンプトではない**」のがポイント
- 呼び出しは `/<skill名>` というスラッシュコマンドで一発

::: tip MCP / Skill / 設定の役割分担
| | 役割 |
| --- | --- |
| **MCP** | 外部サービス連携（道具）|
| **Skill** | 再利用可能な手順書（レシピ）|
| **`CLAUDE.md`** | プロジェクトや全体に効く前提・ルール（[応用編 2 章](/advanced/02-claude-md)） |
:::

## Skill の作り方（3 ステップ）

### ステップ 1 — 通常のチャットで作業を確立する

まずは Skill を意識せず、**普通に Claude Code に依頼して、満足のいく結果が出るプロンプト** を試行錯誤します。

### ステップ 2 — Skill 化を依頼する

::: code-group
```text [プロンプト]
今の一連の流れを Skill にしてください。
名前は "<好きな名前>" でお願いします。
```
:::

Claude が自動で：
- `SKILL.md`（手順書）を生成
- 必要なら補助ファイルもまとめる
- 適切な保存場所（`~/.claude/skills/<skill名>/`）に配置

### ステップ 3 — 呼び出す

以後、入力欄で `/` を押すと自作 Skill 一覧が出るので、選ぶだけ：

```
/<skill名>
```

## 実践 — Skill「日程調整」を作る

講座中盤の実演：

1. 先ほど Google Calendar を MCP で繋いだ
2. 「自分の空き日程を教えてくれる」プロンプトを Claude Code に投げて挙動を確認
3. 「今の一連の流れを `日程調整` という Skill にしてください」と依頼
4. 以降、`/日程調整` だけで自分の空き枠を毎回返してくれる

## Skill の共有

Skill はただのファイルなので **コピー or GitHub で簡単に配布できます**。

- 社内に「カスタマーサポート対応 Skill」を配って属人化解消
- Anthropic 公式のサンプル Skill が GitHub にある
- **公式の Skill マーケットプレース**（2026 年 1 月開始）も登場

### 公式 Skill マーケットプレース（2026 年 1 月）

<figure class="slide-figure">
  <img src="/slides/beginner/page-100.jpg" alt="公式 Skill マーケットプレース">
  <figcaption>Anthropic 公式の Skill・プラグイン配布サイト（p.100）</figcaption>
</figure>

- **pptx / xlsx / pdf / docx** など資料系 Skill
- **canvas-design / brand-guidelines** など即戦力
- 自作 Skill を **公開・共有** することもできる

### 配布 Skill の取り込み手順

::: code-group
```text [プロンプト]
このリポジトリ https://github.com/usutaku/skill-michikusa-pptx を
ダウンロードしてください。
中の Skill 群を私の Claude Code から
"/pptx_michikusastyle" で呼び出せるように
登録してください。
```
:::

## 講師が公開している Skill 例

| Skill | 用途 |
| --- | --- |
| `pptx_michikusa` | 道草ブランドのスライドを生成 |
| `jet_cut` / `rough-cut` | 動画自動編集（応用編で詳述） |
| `日程調整` | Google Calendar から空き枠抽出 |
| ツイート生成 | Notion メモを X 投稿に変換 |
| ウェビナーサムネ | テキスト → サムネ画像 |
| YouTube サムネ | 動画タイトルから自動デザイン |

## Skill のメリット

1. **プロンプトを毎回書き直さなくていい**
2. **チームで品質を揃えられる**（同じ Skill を全員に配る）
3. **属人化が解消する**（手順書がそのまま実行される）

## "GitHub から Skill を入れる" ときの注意

::: warning 信頼性の確認
Claude Code は **GitHub からのインストールを止めてくれません**。
- 信頼できる人の紹介経由で入れる
- もしくは **Star 1,000 以上** を目安にする（Google マップで言うと "500 件レビュー 4.2" の信頼度）
:::

---

::: info 次に読む
[→ 8. チームエージェント](/beginner/08-team-agents)
:::
