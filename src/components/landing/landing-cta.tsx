import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

export function LandingCta() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-6 px-6 py-20 text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          Sumá Racha a tu app
        </h2>
        <p className="text-primary-foreground/80 max-w-prose text-pretty">
          Mirá la demo interactiva: así se ve el sistema de 12 meses dentro de
          una billetera real.
        </p>
        <Button asChild size="lg" variant="secondary">
          <Link href="/demo">
            Probar demo
            <ChevronRight aria-hidden />
          </Link>
        </Button>
      </div>
    </section>
  );
}
