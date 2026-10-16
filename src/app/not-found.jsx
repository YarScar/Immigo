import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="page">
      <section className="page-header">
        <h1>Page not found</h1>
        <p className="page-subtitle">That page doesn&apos;t exist.</p>
        <Link href="/" className="btn btn-secondary">
          Go home
        </Link>
      </section>
    </div>
  )
}
