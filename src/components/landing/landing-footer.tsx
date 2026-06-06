import { Flame } from 'lucide-react';
import Link from 'next/link';

import { Separator } from '@/components/ui/separator';
import { env } from '@/lib/env';

export function LandingFooter() {
  return (
    <footer className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10">
      <Separator />
      <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-muted-foreground flex items-center gap-2 text-sm">
          <Flame className="text-primary size-4" aria-hidden />
          {env.NEXT_PUBLIC_APP_NAME} — incentivos por constancia para fintechs.
        </p>
        <div className="text-muted-foreground flex items-center gap-4 text-sm">
          <Link
            href="/demo"
            className="hover:text-foreground transition-colors"
          >
            Demo
          </Link>
          <span>© 2026 {env.NEXT_PUBLIC_APP_NAME}</span>
        </div>
      </div>
    </footer>
  );
}
