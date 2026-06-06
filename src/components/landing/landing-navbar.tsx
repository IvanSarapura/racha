import { Flame } from 'lucide-react';
import Link from 'next/link';

import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import { env } from '@/lib/env';

export function LandingNavbar() {
  return (
    <header className="bg-background/80 sticky top-0 z-50 border-b backdrop-blur-sm">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-3">
        <Link
          href="/"
          className="flex items-center gap-2 text-base font-semibold tracking-tight"
        >
          <Flame className="text-primary size-5" aria-hidden />
          {env.NEXT_PUBLIC_APP_NAME}
        </Link>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button asChild size="sm">
            <Link href="/demo">Probar demo</Link>
          </Button>
        </div>
      </nav>
    </header>
  );
}
