import type { MDXComponents } from 'mdx/types'
import { Step, Warning, Screenshot } from '@/components/manual'

const components: MDXComponents = {
  Step,
  Warning,
  Screenshot,
}

export function useMDXComponents(): MDXComponents {
  return components
}