'use client';

import { ChevronRight, Flame } from 'lucide-react';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

import { useDemo } from './demo-context';
import { MONTH_LABELS } from './demo-content';

// La tarjeta embebible de Racha: el producto que se está demostrando.
export function RachaIntegrationCard() {
  const { open, paidMonths } = useDemo();

  return (
    <button
      type="button"
      onClick={open}
      className="focus-visible:ring-ring/50 w-full rounded-xl text-left transition-transform outline-none focus-visible:ring-[3px] active:scale-[0.98]"
      aria-label="Abrir Racha: tu racha de pagos"
    >
      {/* Sin borde, como las cards nativas de MP; la marca Racha la pone el ícono */}
      <Card className="gap-3 border-0 py-4 shadow-sm">
        <CardHeader className="px-4">
          <CardTitle className="flex items-center justify-between text-sm">
            <span className="flex items-center gap-2">
              <Flame className="size-4 text-orange-500" aria-hidden />
              Racha
            </span>
            <ChevronRight
              className="text-muted-foreground size-4"
              aria-hidden
            />
          </CardTitle>
          <CardDescription>
            {paidMonths} meses seguidos · seguí así
          </CardDescription>
        </CardHeader>
        <CardContent className="px-4">
          <Progress
            value={(paidMonths / MONTH_LABELS.length) * 100}
            aria-label={`Progreso de tu racha: ${paidMonths} de ${MONTH_LABELS.length} meses`}
          />
        </CardContent>
      </Card>
    </button>
  );
}
