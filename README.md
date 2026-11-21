<div align="center">

# Next.js×microCMSでブログ作成

ブログサイト<br/>
（Next.js / microCMS の学習を兼ねて開発）

</div>

---

## 🚀 ローカル環境のセットアップ

#### 必要な環境

- Node.js 22.18 以上（`microcms-typegen` が TypeScript の設定ファイルを読み込むため）
- pnpm

#### 1. リポジトリをクローンして依存関係をインストール

```bash
git clone https://github.com/yagokakeru/microCMS-with-Next.js.git
cd microCMS-with-Next.js
pnpm install
```

#### 2. 環境変数を設定

```bash
cp .env.example .env
```

```env
MICROCMS_SERVICE_DOMAIN= # microCMS管理画面の URL（https://xxxxxxxx.microcms.io）の xxxxxxxx の部分
MICROCMS_API_KEY= # microCMS管理画面の「サービス設定 > API キー」から確認（default）
MICROCMS_API_INFO_API_KEY= # microCMS管理画面の「サービス設定 > API キー」から確認（型生成用）
MANUAL_USER= # 操作マニュアル（/manual）の Basic 認証のユーザー名
MANUAL_PASSWORD= # 操作マニュアル（/manual）の Basic 認証のパスワード
```

> `.env.local` ではなく `.env` を使います。`microcms-typegen` は `.env` しか読み込まないためです。`.env` は `.gitignore` に含まれているので、コミットされません。

#### 3. 開発サーバーを起動

```bash
pnpm dev
```

http://localhost:3000 で確認できます。

---

## 🧩 microCMS の型生成

microCMS の API スキーマから TypeScript の型を生成します。スキーマを変更したら実行してください。

```bash
npx microcms-typegen generate
```

生成先は `libs/microcms-types.ts` です（設定は `microcms-typegen.config.ts`）。

---

## 📖 操作マニュアル（/manual）

microCMS 管理画面の操作マニュアルを MDX で作成し、`/manual` で公開しています。`MANUAL_USER` / `MANUAL_PASSWORD` による Basic 認証がかかっています。

#### ページを追加する

1. `docs/manual/` に `04-xxx.mdx` を作成する
2. `docs/manual/index.ts` の `manualPages` に `{ slug: '04-xxx', title: '...' }` を追加する
3. 画像は `public/manual-images/` に置き、`<Screenshot src="/manual-images/xxx.png" alt="..." />` で表示する

> 画像を `public/manual/` に置くと Basic 認証の対象になり、表示されなくなります。

#### 使える部品

```mdx
<Step n={1}>左メニューの「ブログ」をクリックします。</Step>
<Warning>「公開」を押すとすぐにサイトに表示されます。</Warning>
<Screenshot src="/manual-images/blog-menu.png" alt="ブログメニュー" />
```

---

## ☁️ デプロイ

main ブランチにマージすると、Vercel が本番環境に自動でデプロイします。Vercel の Environment Variables には次の値を設定してください。

- `MICROCMS_SERVICE_DOMAIN`
- `MICROCMS_API_KEY`
- `MANUAL_USER`
- `MANUAL_PASSWORD`

`MICROCMS_API_INFO_API_KEY` は型生成にしか使わないので、本番環境には不要です。

---