import Link from 'next/link'
import { getBlogs } from '@/libs/client'
import type { Blog } from '@/libs/microcms-types';

export default async function Home() {
  const blogs = await getBlogs()

  return (
    <ul>
      {blogs.contents.map((blog: Blog) => (
        <li key={blog.id}>
          <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
        </li>
      ))}
    </ul>
  );
}
