import Link from "next/link"

export default function NotFound() {
  return (
    <div className="mx-auto max-w-6xl px-5 sm:px-8 pt-44 pb-40">
      <p className="font-mono text-sm text-orange">$ aws s3 ls s3://this-page</p>
      <p className="mt-3 font-mono text-sm text-muted">
        An error occurred (NoSuchKey) when calling the ListObjectsV2 operation: 404
      </p>
      <h1 className="mt-10 font-serif text-5xl sm:text-6xl font-light tracking-tight text-foreground">
        Nothing here.
      </h1>
      <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
        The page you asked for was never written, or it moved upstream.
      </p>
      <Link
        href="/"
        className="mt-10 inline-flex h-11 items-center rounded-md bg-blue px-5 text-sm font-semibold text-slate-950 transition-colors hover:bg-blue-light"
      >
        Back to home
      </Link>
    </div>
  )
}
