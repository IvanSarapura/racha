import { ArrowLeft, Flame, Hand, Sparkles } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

import { DemoExperience } from '@/components/demo/demo-experience';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Demo',
  description:
    'Simulación interactiva: así se ve el widget de incentivos de Racha dentro de una billetera como Mercado Pago.',
};

export default function DemoPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="mx-auto flex w-full max-w-6xl items-center px-6 py-4">
        <Button asChild variant="ghost" size="sm">
          <Link href="/">
            <ArrowLeft aria-hidden />
            Volver a la landing
          </Link>
        </Button>
      </header>

      <main className="mx-auto grid w-full max-w-6xl flex-1 items-center gap-12 px-6 py-8 lg:grid-cols-2 lg:py-12">
        <div className="flex flex-col items-start gap-5">
          <h1 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Así se ve Racha dentro de tu app
          </h1>
          <p className="text-muted-foreground max-w-prose text-pretty">
            Esto es una simulación de una billetera como Mercado Pago. Tocá la
            tarjeta de Racha debajo del balance para abrir la experiencia de
            incentivos.
          </p>
          <ul className="text-muted-foreground flex flex-col gap-3 text-sm">
            <li className="flex items-center gap-2">
              <Hand className="text-primary size-4" aria-hidden />
              Interactuá con la pantalla como si fuera tu app
            </li>
            <li className="flex items-center gap-2">
              <Flame className="text-primary size-4" aria-hidden />
              La tarjeta de racha es el widget que integrás
            </li>
            <li className="flex items-center gap-2">
              <Sparkles className="text-primary size-4" aria-hidden />
              Los beneficios se desbloquean con la constancia de pago
            </li>
          </ul>
        </div>

        <div className="flex justify-center pb-8 lg:justify-end lg:pb-0">
          <DemoExperience />
        </div>
      </main>
    </div>
  );
}
