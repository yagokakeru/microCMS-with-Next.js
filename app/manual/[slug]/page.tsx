import { notFound } from 'next/navigation'
import { manualPages } from '@/docs/manual'

export default async function Page({ params }: PageProps<'/manual/[slug]'>) {
  const { slug } = await params
  if (!manualPages.some((page) => page.slug === slug)) notFound()

  const { default: Content } = await import(`@/docs/manual/${slug}.mdx`)
  return <Content />
}

export function generateStaticParams() {
  return manualPages.map(({ slug }) => ({ slug }))
}