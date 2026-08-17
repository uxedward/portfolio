import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-hairline">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-4 px-5 py-8 text-sm text-ink-soft sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>© {new Date().getFullYear()} {site.fullName}</p>
        <p>Made in {site.location}</p>
        <a href="#top" className="transition-colors hover:text-ink">
          ↗ Back to top
        </a>
      </div>
    </footer>
  );
}
