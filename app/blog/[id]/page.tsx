import { getBlogDetail, client } from '@/libs/client';
import dayjs from 'dayjs';

// 記事詳細ページの生成
export default async function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params; // IDを取得
  const post = await getBlogDetail(id);

  // dayjsを使ってpublishedAtをYY.MM.DD形式に変換
  const formattedDate = dayjs(post.publishedAt).format('YY.MM.DD');

  return (
    <main>
      <h1>{post.title}</h1> {/* タイトルを表示 */}
      <div>{formattedDate}</div> {/* 日付を表示 */}
      <div>カテゴリー：{post.category && post.category.name}</div> {/* カテゴリーを表示 */}
      {/* summaryが空の記事もあるので、値があるときだけ表示 */}
      {post.summary && <div dangerouslySetInnerHTML={{ __html: post.summary }} />}
    </main>
  );
}

// 静的パスを生成
export async function generateStaticParams() {
  const contentIds = await client.getAllContentIds({ endpoint: 'blog' });

  return contentIds.map((contentId) => ({
    id: contentId, // 各記事のIDをパラメータとして返す
  }));
}