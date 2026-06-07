import { ArrowLeft, Flame, Hand, Shield, Sparkles } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

import { DemoExperience } from '@/components/demo/demo-experience';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Demo',
  description:
    'Simulación interactiva: así se ve el sistema de incentivos de 12 meses de Racha dentro de una billetera como Mercado Pago.',
};

export default function DemoPage() {
  return (
    // En lg la página se fija a la altura del viewport (sin scroll ni barra);
    // en mobile el contenido se apila y conserva el scroll natural.
    <div className="relative flex min-h-dvh flex-col lg:h-dvh lg:overflow-hidden">
      {/* Superpuesto arriba a la izquierda: fuera del flujo para no empujar
          el contenido y provocar scroll. left-6 = px-6 del main, para mantener
          el espaciado lateral uniforme */}
      <Button
        asChild
        variant="ghost"
        size="sm"
        className="absolute top-6 left-6 z-10"
      >
        <Link href="/">
          <ArrowLeft aria-hidden />
          Volver a la landing
        </Link>
      </Button>

      {/* pt-16 en mobile deja lugar al botón superpuesto; en lg el centrado
          vertical ya lo separa */}
      <main className="mx-auto grid w-full max-w-6xl flex-1 items-center gap-12 px-6 pt-16 pb-8 lg:grid-cols-2 lg:py-0">
        <div className="flex flex-col items-start gap-5">
          <h1 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Así se ve Racha dentro de tu app
          </h1>
          <p className="text-muted-foreground max-w-prose text-pretty">
            Esto es una simulación de una billetera como Mercado Pago. Racha se
            activa automáticamente cuando el usuario toma un microcrédito: no
            instala nada nuevo, ve los beneficios dentro de la app que ya usa.
          </p>
          <ul className="text-muted-foreground flex flex-col gap-3 text-sm">
            <li className="flex items-start gap-2">
              <Hand
                className="text-primary mt-0.5 size-4 shrink-0"
                aria-hidden
              />
              Tocá la tarjeta «Racha» debajo del balance: es el widget que la
              fintech integra vía API, con su propia marca
            </li>
            <li className="flex items-start gap-2">
              <Flame
                className="mt-0.5 size-4 shrink-0 text-orange-500"
                aria-hidden
              />
              Cada cuota pagada a término suma un mes de racha — tocá los meses
              para simular el avance del usuario
            </li>
            <li className="flex items-start gap-2">
              <Sparkles
                className="text-primary mt-0.5 size-4 shrink-0"
                aria-hidden
              />
              Los beneficios escalan con la constancia: cashback, reintegros,
              niveles Bronce → Plata → Oro y tasa -3% al completar el año
            </li>
            <li className="flex items-start gap-2">
              <Shield
                className="text-primary mt-0.5 size-4 shrink-0"
                aria-hidden
              />
              Romper la racha pierde el progreso acumulado; desde el mes 10, la
              cobertura por atraso protege lo construido
            </li>
          </ul>
          <p className="text-muted-foreground/80 max-w-prose text-xs text-pretty">
            Cada hito tiene un propósito conductual y costo mínimo para la
            fintech: el progreso visible y la aversión a la pérdida sostienen el
            hábito de pago mes a mes.
          </p>
        </div>

        <div className="flex justify-center pb-8 lg:justify-end lg:pb-0">
          <DemoExperience />
        </div>
      </main>
    </div>
  );
}
