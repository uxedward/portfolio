import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-3xl flex-col justify-center px-5 py-24 sm:px-8">
      <p className="text-sm text-ink-soft">404</p>
      <h1 className="mt-4 font-serif text-5xl tracking-tight">
        This page wandered off.
      </h1>
      <p className="mt-4 text-ink-soft">
        The work is still here — just on a different path.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex w-fit rounded-full bg-ink px-5 py-2.5 text-sm text-paper"
      >
        Back to work
      </Link>
    </div>
  );
}
