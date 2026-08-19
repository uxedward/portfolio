import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="page-enter mx-auto flex min-h-[60vh] max-w-3xl flex-col justify-center px-5 py-24 sm:px-8 lg:px-10">
      <p className="text-sm text-ink-soft">404</p>
      <h1 className="mt-4 font-serif text-5xl tracking-tight">
        This page wandered off.
      </h1>
      <p className="mt-4 text-ink-soft">
        The work is still here — just on a different path.
      </p>
      <Button href="/" className="mt-8 w-fit">
        Back to work
      </Button>
    </div>
  );
}
