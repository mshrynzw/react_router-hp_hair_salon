
# Beauty Salon Website (React Router + Vite)

美容室サイトを想定したフロントエンド実装です。  
トップページ、メニュー、ニュース、スタッフ、ブログ、お問い合わせページを含む、複数ページ構成のサンプルサイトになっています。

<img width="1920" height="911" alt="image" src="https://github.com/user-attachments/assets/b8399cf3-6f72-42e8-9506-5bee87bea817" />

## 主な特徴

- `react-router` を使った SPA ルーティング構成
- レスポンシブ対応のヘッダー / モバイルメニュー
- パンくずナビゲーション表示
- ホームのスタイルギャラリー（モーダル表示付き）
- Tailwind CSS ベースのユーティリティクラスで UI 構築

## 画面 / ルーティング

- `/` : ホーム
- `/menu` : メニュー
- `/news` : ニュース一覧
- `/news/:id` : ニュース詳細
- `/staff` : スタッフ
- `/blog` : ブログ一覧
- `/blog/:id` : ブログ詳細
- `/contact` : お問い合わせ
- `*` : 404（Not Found）

## 技術スタック

- React 18
- React Router 7
- Vite 6
- Tailwind CSS 4
- TypeScript
- `lucide-react`（アイコン）

## セットアップ

### 前提

- Node.js 18 以上推奨
- パッケージマネージャー: `pnpm` 推奨（`pnpm-lock.yaml` を使用）

### インストール

```bash
pnpm install
```

`npm` を使う場合:

```bash
npm install
```

## 開発

開発サーバーを起動:

```bash
pnpm dev
```

または:

```bash
npm run dev
```

起動後、通常は `http://localhost:5173` で確認できます。

## ビルド

本番ビルドを作成:

```bash
pnpm build
```

または:

```bash
npm run build
```

## ディレクトリ構成（主要部分）

```text
src/
  app/
    App.tsx                 # RouterProvider のエントリ
    routes.ts               # ルート定義
    components/
      Layout.tsx            # ヘッダー / フッター / パンくず
      Home.tsx              # トップページ
      Menu.tsx              # メニュー
      News.tsx              # ニュース一覧
      NewsDetail.tsx        # ニュース詳細
      Staff.tsx             # スタッフ
      Blog.tsx              # ブログ一覧
      BlogDetail.tsx        # ブログ詳細
      Contact.tsx           # お問い合わせ
      NotFound.tsx          # 404 ページ
  main.tsx                  # アプリ起動エントリ
```

## 補足

- 画像データや文言はデモ用途の内容を含みます。
- 必要に応じて API 連携や CMS 連携（ニュース/ブログ）を追加して拡張できます。
  
