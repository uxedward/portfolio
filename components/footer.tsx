import { site } from "@/lib/site";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="border-t border-hairline">
      <div className="flex flex-col gap-4 px-6 py-8 text-sm text-ink-soft sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
        <p>© {new Date().getFullYear()} {site.fullName}</p>
        <p>Made in {site.location}</p>
        <Button href="#top" variant="ghost" className="px-0">
          ↗ Back to top
        </Button>
      </div>
    </footer>
  );
}
