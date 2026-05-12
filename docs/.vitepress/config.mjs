import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'ja-JP',
  title: 'Claude Code 完全マニュアル',
  description: '薄井匠氏の3時間ライブ講座（初級編・応用編）を元に構築した、Claude Code の体系的マニュアル。',
  cleanUrls: true,
  lastUpdated: true,
  ignoreDeadLinks: true,

  head: [
    ['meta', { name: 'theme-color', content: '#cc785c' }],
    ['meta', { property: 'og:title', content: 'Claude Code 完全マニュアル' }],
    ['meta', { property: 'og:description', content: 'Claude Code 初級〜応用までを体系的に学ぶための実践マニュアル' }],
    ['meta', { property: 'og:type', content: 'website' }],
  ],

  themeConfig: {
    siteTitle: 'Claude Code 完全マニュアル',
    logo: { src: '/logo.svg', width: 24, height: 24 },

    nav: [
      { text: 'ホーム', link: '/' },
      {
        text: '初級編',
        link: '/beginner/',
        activeMatch: '/beginner/',
      },
      {
        text: '応用編',
        link: '/advanced/',
        activeMatch: '/advanced/',
      },
      {
        text: '付録',
        items: [
          { text: 'ツール早見表', link: '/appendix/tools' },
          { text: '名言集', link: '/appendix/quotes' },
          { text: 'クレジット', link: '/appendix/credits' },
        ],
      },
    ],

    sidebar: {
      '/beginner/': [
        {
          text: '初級編',
          items: [
            { text: 'はじめに', link: '/beginner/' },
            { text: '1. Claude Code とは', link: '/beginner/01-overview' },
            { text: '2. セットアップと料金', link: '/beginner/02-setup' },
            { text: '3. 5 つの権限モード', link: '/beginner/03-permissions' },
            { text: '4. モデルの選び方', link: '/beginner/04-models' },
            { text: '5. 実演デモ集', link: '/beginner/05-demos' },
            { text: '6. MCP — 外部連携', link: '/beginner/06-mcp' },
            { text: '7. Skills — 業務の手順書化', link: '/beginner/07-skills' },
            { text: '8. チームエージェント', link: '/beginner/08-team-agents' },
            { text: '9. プロンプトの作法', link: '/beginner/09-prompting' },
            { text: '10. 落とし穴と安全運用', link: '/beginner/10-pitfalls' },
          ],
        },
      ],
      '/advanced/': [
        {
          text: '応用編',
          items: [
            { text: 'はじめに', link: '/advanced/' },
            { text: '1. Claude Code の内部構造', link: '/advanced/01-architecture' },
            { text: '2. CLAUDE.md 設計術', link: '/advanced/02-claude-md' },
            { text: '3. GitHub 連携', link: '/advanced/03-github' },
            { text: '4. デプロイ（Vercel/Netlify）', link: '/advanced/04-deploy' },
            { text: '5. API 連携の基本', link: '/advanced/05-api' },
            { text: '6. APIキーとセキュリティ', link: '/advanced/06-security' },
            { text: '7. フロント／バック分離と Supabase', link: '/advanced/07-fullstack' },
            { text: '8. 応用 MCP（Playwright / Context7 / Dispatch / Routines）', link: '/advanced/08-mcp-advanced' },
            { text: '9. AI 動画編集ワークフロー', link: '/advanced/09-video' },
            { text: '10. 個人ワークフローと総まとめ', link: '/advanced/10-workflow' },
          ],
        },
      ],
      '/appendix/': [
        {
          text: '付録',
          items: [
            { text: 'ツール早見表', link: '/appendix/tools' },
            { text: '名言集', link: '/appendix/quotes' },
            { text: 'クレジット', link: '/appendix/credits' },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/renhasegawa66/claude-code-manual' },
    ],

    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: { buttonText: '検索', buttonAriaLabel: '検索' },
              modal: {
                noResultsText: '該当する結果がありません',
                resetButtonTitle: 'クエリをリセット',
                footer: {
                  selectText: '選択',
                  navigateText: '移動',
                  closeText: '閉じる',
                },
              },
            },
          },
        },
      },
    },

    outline: { label: '目次', level: [2, 3] },
    docFooter: { prev: '前へ', next: '次へ' },
    darkModeSwitchLabel: 'ダークモード',
    sidebarMenuLabel: 'メニュー',
    returnToTopLabel: 'トップへ',
    lastUpdated: { text: '最終更新', formatOptions: { dateStyle: 'long' } },

    footer: {
      message: '本マニュアルは薄井匠氏（道草株式会社）の Claude Code 講座（初級編・応用編）を元に再構成した非公式の学習用ドキュメントです。',
      copyright: 'Built with VitePress · 2026',
    },
  },
})
