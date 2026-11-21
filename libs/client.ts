import { createClient } from 'microcms-js-sdk';
import { cacheLife } from 'next/cache'
import type { Blog } from './microcms-types'

// 環境変数にMICROCMS_SERVICE_DOMAINが設定されていない場合はエラーを投げる
if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error('MICROCMS_SERVICE_DOMAIN is required');
}

// 環境変数にMICROCMS_API_INFO_API_KEYが設定されていない場合はエラーを投げる
if (!process.env.MICROCMS_API_INFO_API_KEY) {
  throw new Error('MICROCMS_API_INFO_API_KEY is required');
}

export const client = createClient({
    serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
    apiKey: process.env.MICROCMS_API_INFO_API_KEY,
});

// ブログ記事一覧を取得する関数
export async function getBlogs() {
    'use cache'
    cacheLife('minutes') // 数分ごとに再取得
    return client.get({ endpoint: 'blog' })
}

// 特定のブログ記事を取得する関数
export async function getBlogDetail(id: string) {
    'use cache'
    cacheLife('minutes') // 数分ごとに再取得
    return client.get<Blog>({ endpoint: `blog/${id}` })
}