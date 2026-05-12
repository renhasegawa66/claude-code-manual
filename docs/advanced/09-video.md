# 9. AI 動画編集ワークフロー

Claude Code は **動画編集まで自動化** できます。
講師が運用している **Remotion ベース** のワークフローを紹介します。

<figure class="slide-figure">
  <img src="/slides/advanced/page-095.jpg" alt="動画編集でできること">
  <figcaption>無音区間カット・字幕付け・BGM 追加（p.95）</figcaption>
</figure>

## できること（p.95）

- **無音区間の自動カット**
- **字幕の自動付与**
- **BGM の自動挿入**
- **書き出しレンダリング**

> 「意外と難しいので丁寧に解説する。**Remotion** という Skills を使う」

## 構成要素（p.96）

<figure class="slide-figure">
  <img src="/slides/advanced/page-096.jpg" alt="動画編集で便利な Tips">
  <figcaption>文字起こし・無音検出・改行の各ツール（p.96）</figcaption>
</figure>

| ツール | 役割 |
| --- | --- |
| **[Remotion](https://www.remotion.dev/)** | React で動画を組み立てる動画フレームワーク（MCP あり） |
| **mlx-whisper** | Apple Silicon 用文字起こし。Whisper の **約 30× 速い** |
| **ElevenLabs API** | 文字起こしの代替（Apple Silicon でない人向け） |
| **Silero VAD** | 無音区間の検出（Python ライブラリ） |
| **BudouX** | 自然な日本語の改行制御 |

```
[元動画]
   ↓ mlx-whisper / ElevenLabs
[文字起こし]
   ↓ Silero VAD
[無音区間検出]
   ↓ BudouX
[字幕の改行整形]
   ↓ Remotion
[最終レンダリング]
```

## 講師のスキル `rough-cut`

これらを **1 つの Skill として `~/.claude/skills/rough-cut/`** に登録済み。
`/rough-cut` 1 行で起動できる状態にしている。

```text
/rough-cut
入力: /Users/usu/Movies/2026-05-12.mov
- 無音 0.8 秒以上カット
- 字幕オン
- BGM は lo-fi 系を低音量
- 縦動画（9:16）
```

## 講師のワークフロー（端的に）

1. iPhone で動画撮影
2. AirDrop で MacBook に転送
3. Finder でファイルを **<kbd>Option</kbd> + 右クリック → パス名をコピー**
4. Claude Code に **"これカットして"** とだけ送る
5. Remotion 上で確認 → レンダリング → 完成

## どの環境で何を選ぶか

| あなたの環境 | 文字起こし |
| --- | --- |
| **Apple Silicon Mac**（M1 以降） | **mlx-whisper** |
| Intel Mac / Windows / クラウド | **ElevenLabs API**（有料・高品質） |

::: tip mlx-whisper の威力
講師の MacBook（M3 Max 128GB）では、
**従来の Whisper の 約 30× 速度** で文字起こしが終わる。
1 時間の動画の文字起こしが **2 分** で完了するレベル。
:::

## グレーゾーンの話

<figure class="slide-figure">
  <img src="/slides/advanced/page-097.jpg" alt="Claude Code でできてしまうこと（非推奨）">
  <figcaption>YouTube / X 動画ダウンロード等（p.97）</figcaption>
</figure>

::: warning YouTube / X の動画ダウンロード
スライド原文（p.98）：

> - 技術的には **可能**（`yt-dlp` 等が裏で動く）
> - **利用規約上は NG**
> - 個人利用なら **著作権法上はグレー**
> - YouTube DL 的なツールは **危ないものが多い**
> - 文字起こし・サムネイル一括 DL も技術的には可能

講師は「やるな」とは言わないが、**推奨もしていない**。
業務・配信・商用利用は **明確に NG**。
:::

## Claude Code を動画編集者にする CLAUDE.md 例

```markdown
## 動画編集
- 文字起こしは mlx-whisper（Apple Silicon の場合）
  Intel / Windows なら ElevenLabs API
- 改行は BudouX を必ず通す
- 無音検出は Silero VAD、デフォルト 0.6 秒
- 出力は 1080p 30fps 縦動画（9:16）
- BGM 音量は -18dB
- 字幕は 1 行 14 文字以内
- 完成後、ファイルパスを最後に明記する
```

## 応用 — SNS 投稿までの自動化

```
[動画撮影]
   ↓ Skill: rough-cut
[編集済み動画]
   ↓ Skill: thumbnail-gen
[サムネ画像]
   ↓ Skill: caption-gen
[キャプション文]
   ↓ MCP: X / YouTube / TikTok
[各プラットフォームに投稿]
```

ここまで来ると **撮影だけが人間の仕事** になります。

---

::: info 次に読む
[→ 10. 個人ワークフローと総まとめ](/advanced/10-workflow)
:::
