import type { Metadata } from 'next'
import { manualPages } from '@/docs/manual'
import Link from 'next/link'

export const metadata: Metadata = { title: 'マニュアル' }

export default function ManualPage() {
  return (
    <ul>
      {manualPages.map((page) => (
        <li key={page.slug}>
          <Link href={`/manual/${page.slug}`}>{page.title}</Link>
        </li>
      ))}
    </ul>
  )
}