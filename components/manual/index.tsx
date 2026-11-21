type StepProps = {
  n: number
  children: React.ReactNode
}

export function Step({ n, children }: StepProps) {
  return (
    <div className="my-4 flex items-start gap-3">
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
        {n}
      </span>
      <div className="pt-0.5">{children}</div>
    </div>
  )
}

type WarningProps = {
  title?: string // 省略可能にしたい props には ? を付ける
  children: React.ReactNode
}

export function Warning({ title = '注意', children }: WarningProps) {
  return (
    <div role="note" className="my-4 rounded-md border-l-4 border-amber-500 bg-amber-50 p-4">
      <p className="mb-1 font-bold text-amber-800">⚠️ {title}</p>
      <div className="text-amber-900">{children}</div>
    </div>
  )
}

import Image from 'next/image'

type ScreenshotProps = {
  src: string
  alt: string
  width?: number
  height?: number
  caption?: string
}

export function Screenshot({ src, alt, width = 1200, height = 800, caption }: ScreenshotProps) {
  return (
    <figure className="my-6">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="h-auto w-full rounded-md border border-gray-200 shadow-sm"
      />
      {caption && <figcaption className="mt-2 text-sm text-gray-500">{caption}</figcaption>}
    </figure>
  )
}