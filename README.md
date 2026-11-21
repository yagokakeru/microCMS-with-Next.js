<div align="center">

# Next.js×microCMSでブログ作成

ブログサイト<br/>
（Next.js / microCMS の学習を兼ねて開発）

</div>

---

## 🚀 ローカル環境のセットアップ

#### 1. リポジトリをクローンして依存関係をインストール

```bash
git clone https://github.com/yagokakeru/microCMS-with-Next.js.git
cd microCMS-with-Next.js
pnpm install
```

#### 2. 環境変数を設定

```bash
cp .env.example .env.local
```

```env
MICROCMS_SERVICE_DOMAIN= # microCMS管理画面の URL（https://xxxxxxxx.microcms.io）の xxxxxxxx の部分
MICROCMS_API_INFO_API_KEY= # microCMS管理画面の「サービス設定 > API キー」から確認
```
---