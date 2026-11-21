export const metadata = { robots: { index: false } }

export default function ManualLayout({ children }: { children: React.ReactNode }) {
    return <article className="prose mx-auto max-w-3xl px-4 py-8">{children}</article>
}